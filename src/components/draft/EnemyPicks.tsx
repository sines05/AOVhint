import React from 'react';
import { useDraftStore } from '../../store/useDraftStore';
import heroesData from '../../data/heroes_public.json';
import { Search } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EnemyPicks: React.FC = () => {
  const { teamRed, currentStepIndex, getSequence } = useDraftStore();
  const sequence = getSequence();
  const getHeroById = (id: string) => (heroesData as any).find((h: any) => h.id === id);

  return (
    <div className="p-4 border-b border-outline-variant/10 bg-surface-container-low/20">
      <div className="flex items-center justify-between mb-3">
        <p className="font-label text-[10px] text-secondary-container font-black tracking-widest uppercase">Enemy Draft</p>
        <div className="flex gap-1.5">
          <div className="w-1 h-3 bg-secondary-container/20 rounded-full" />
          <div className="w-1 h-3 bg-secondary-container/40 rounded-full" />
          <div className="w-1 h-3 bg-secondary-container/60 rounded-full" />
        </div>
      </div>
      <div className="flex gap-3">
        {[0, 1, 2, 3, 4].map((index) => {
          const heroId = teamRed[index];
          const hero = heroId ? getHeroById(heroId) : null;
          
          // Mapping index to sequence pick steps for the OTHER team
          // We find ALL pick steps for the team that is NOT startingTeam.
          // Wait, 'teamRed' in the store is simply the 'Enemy' team.
          // In getDraftSequence, we use 'startingSide' and 'otherSide'.
          // If startingSide is blue, teamBlue = Ally, teamRed = Enemy.
          // Let's find pick steps for 'red'.
          const redPickSteps = sequence
            .map((s, i) => ({ ...s, i }))
            .filter(s => s.type === 'pick' && s.team === 'red')
            .map(s => s.i);
          
          const stepIndex = redPickSteps[index];
          const isActive = currentStepIndex === stepIndex;

          return (
            <div 
              key={index} 
              className={cn(
                "w-12 h-12 clip-path-chamfer relative overflow-hidden border-2 transition-all duration-300",
                hero 
                  ? 'bg-surface-container-high border-secondary-container shadow-neon-red shadow-[0_0_10px_rgba(255,59,48,0.3)]' 
                  : isActive
                    ? 'bg-secondary-container/10 border-secondary-container shadow-neon-red animate-pulse'
                    : 'bg-secondary-container/5 border-dashed border-secondary-container/10 flex items-center justify-center'
              )}
            >
              {hero ? (
                <img 
                  src={hero.avatar_img} 
                  alt={hero.name} 
                  className="w-full h-full object-cover grayscale opacity-80 animate-in fade-in zoom-in duration-500"
                />
              ) : (
                <Search className={cn("w-4 h-4", isActive ? "text-secondary-container" : "text-secondary-container/30")} />
              )}
              
              {isActive && (
                <div className="absolute inset-0 bg-secondary-container/5 pointer-events-none border-2 border-secondary-container animate-ping opacity-20" />
              )}
              
              <div className={cn(
                "absolute bottom-0 right-0 px-1 text-[7px] font-black rounded-tl z-10",
                isActive ? "bg-secondary-container text-white" : "bg-black/40 text-secondary-container/50"
              )}>
                E{index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnemyPicks;
