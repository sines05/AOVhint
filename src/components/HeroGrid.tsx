import React, { useState } from 'react';
import { useDraftStore } from '../store/useDraftStore';
import heroesData from '../data/heroes_public.json';
import { Search, UserPlus, Ban } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const HeroGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const { 
    teamBlue, teamRed, banned, addHeroToDraft, 
    currentStepIndex, isRanked, startingSide,
    getCurrentStep, getSequence, toggleMode, toggleSide, undoStep, resetDraft, skipStep
  } = useDraftStore();

  const sequence = getSequence();
  const currentStep = getCurrentStep();
  const isFinished = currentStepIndex >= sequence.length;

  const heroes = heroesData as any[];
  
  const filteredHeroes = heroes.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesRole = true;
    if (selectedRole) {
      matchesRole = hero.role.includes(selectedRole as any);
    }
    
    return matchesSearch && matchesRole;
  });

  const isSelected = (heroId: string) => 
    teamBlue.includes(heroId) || teamRed.includes(heroId) || banned.includes(heroId);

  const getSelectionType = (heroId: string) => {
    if (teamBlue.includes(heroId)) return 'PICKED';
    if (teamRed.includes(heroId)) return 'PICKED';
    if (banned.includes(heroId)) return 'BANNED';
    return null;
  };

  return (
    <div className="flex-1 bg-surface-container flex flex-col h-full overflow-hidden">
      {/* Tactical Settings & Turn Banner */}
      <div className="bg-surface-container-high/50 border-b border-outline-variant/10">
        <div className="px-6 py-1.5 flex items-center justify-between border-b border-outline-variant/5 bg-black/40">
           <div className="flex items-center gap-4">
              <button 
                onClick={toggleMode}
                className="font-headline font-black text-[8px] tracking-[0.2em] uppercase px-3 py-1 bg-surface-container-highest border border-outline-variant/20 hover:border-primary-container transition-all"
              >
                MODE: <span className="text-primary-container">{isRanked ? 'RANKED' : 'TOURNAMENT'}</span>
              </button>
              <button 
                onClick={toggleSide}
                className="font-headline font-black text-[8px] tracking-[0.2em] uppercase px-3 py-1 bg-surface-container-highest border border-outline-variant/20 hover:border-primary-container transition-all"
              >
                FIRST: <span className={startingSide === 'blue' ? "text-primary-container" : "text-red-400"}>{startingSide.toUpperCase()}</span>
              </button>
           </div>
           <div className="flex items-center gap-2">
              <button 
                onClick={undoStep}
                className="font-headline font-black text-[8px] tracking-[0.2em] uppercase px-3 py-1 hover:text-white transition-all text-outline"
              >
                [ UNDO ]
              </button>
              <button 
                onClick={resetDraft}
                className="font-headline font-black text-[8px] tracking-[0.2em] uppercase px-3 py-1 hover:text-red-400 transition-all text-outline"
              >
                [ RESET ]
              </button>
           </div>
        </div>

        {!isFinished && (
          <div className={cn(
            "px-6 py-2 flex items-center justify-between transition-all duration-500",
            currentStep.team === 'blue' ? "bg-primary-container/10 border-l-4 border-primary-container" : "bg-red-950/20 border-l-4 border-red-500"
          )}>
            <div className="flex items-center gap-3">
              <span className={cn(
                "w-2 h-2 rounded-full neon-pulse",
                currentStep.team === 'blue' ? "bg-primary-container" : "bg-red-500"
              )} />
              <p className="font-headline font-black text-[10px] uppercase tracking-[0.2em]">
                CURRENT TURN: <span className={currentStep.team === 'blue' ? "text-primary-container" : "text-red-400"}>
                  {currentStep.label}
                </span>
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {currentStep.type === 'ban' && (
                <button 
                  onClick={skipStep}
                  className="bg-red-500/10 border border-red-500/30 text-red-400 px-3 py-1 font-headline font-black text-[9px] uppercase hover:bg-red-500 hover:text-white transition-all"
                >
                  SKIP BAN
                </button>
              )}
              <p className="font-label text-[9px] font-bold text-outline uppercase">
                Step {currentStepIndex + 1} of {sequence.length}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Role Filters */}
      <div className="p-6 flex flex-col lg:flex-row items-center justify-between gap-6 bg-surface-container-low/30">
        <div className="flex flex-wrap gap-2">
          {["Tất cả", "Hỗ trợ", "Đỡ đòn", "Sát thủ", "Pháp sư", "Xạ thủ", "Đấu sĩ"].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role === "Tất cả" ? null : role)}
              className={cn(
                "px-5 py-2 clip-path-chamfer font-headline text-[10px] font-black tracking-widest transition-all border uppercase",
                (selectedRole === role || (role === "Tất cả" && selectedRole === null))
                  ? "bg-primary-container border-primary-container text-on-primary shadow-neon-blue"
                  : "bg-surface-container-high border-outline-variant/30 text-outline hover:text-primary-container hover:border-primary-container/50"
              )}
            >
              {role === 'Tất cả' ? 'ALL' : role === 'Hỗ trợ' ? 'SUPPORT' : role === 'Đỡ đòn' ? 'TANK' : role === 'Sát thủ' ? 'ASSASSIN' : role === 'Pháp sư' ? 'MAGE' : role === 'Xạ thủ' ? 'ADC' : 'WARRIOR'}
            </button>
          ))}
        </div>
        
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
          <input 
            type="text" 
            placeholder="SEARCH HERO..."
            className="w-full bg-surface-container-high border-2 border-outline-variant/20 focus:border-primary-container focus:ring-0 text-on-surface font-headline text-xs font-bold uppercase pl-12 py-3 clip-path-chamfer transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-24 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 auto-rows-max">
        {filteredHeroes.map((hero) => {
          const selected = isSelected(hero.id);
          const selectionType = getSelectionType(hero.id);
          const isEnemy = teamRed.includes(hero.id);

          return (
            <div key={hero.id} className="relative group aspect-square">
              <div className={cn(
                "w-full h-full clip-path-chamfer border-2 transition-all duration-300 relative overflow-hidden group",
                selected 
                  ? "border-outline-variant/20 grayscale opacity-40" 
                  : "border-outline-variant/10 group-hover:border-primary-container/50 group-hover:shadow-neon-blue"
              )}>
                <img 
                  src={hero.avatar_img} 
                  alt={hero.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-center">
                  <p className="font-headline font-black text-[9px] tracking-widest uppercase text-white truncate">
                    {hero.name}
                  </p>
                </div>

                {selected && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className={cn(
                      "px-2 py-0.5 font-headline font-black text-[8px] uppercase -rotate-12 shadow-lg",
                      selectionType === 'BANNED' ? "bg-surface-variant text-white" : isEnemy ? "bg-secondary-container text-white" : "bg-primary-container text-on-primary"
                    )}>
                      {selectionType}
                    </span>
                  </div>
                )}
              </div>

              {!selected && !isFinished && (
                <div className="absolute inset-0 bg-surface-dim/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 flex flex-col p-2 gap-1.5 clip-path-chamfer scale-95 group-hover:scale-100">
                  <button 
                    onClick={() => addHeroToDraft(hero.id)}
                    className={cn(
                      "flex-1 font-headline font-black text-[10px] uppercase clip-path-chamfer hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5",
                      currentStep.type === 'ban' 
                        ? "bg-red-900/40 border border-red-500/30 text-red-100 hover:bg-red-600" 
                        : currentStep.team === 'blue' 
                          ? "bg-primary-container text-on-primary" 
                          : "bg-secondary-container text-white"
                    )}
                  >
                    {currentStep.type === 'ban' ? <Ban className="w-3 h-3" /> : <UserPlus className="w-3 h-3" />}
                    {currentStep.type === 'ban' ? 'BAN HERO' : `SELECT FOR ${currentStep.team === 'blue' ? 'ALLY' : 'ENEMY'}`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroGrid;
