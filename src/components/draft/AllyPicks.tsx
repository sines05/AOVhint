import React from 'react';
import { useDraftStore } from '../../store/useDraftStore';
import heroesData from '../../data/heroes_public.json';
import { UserPlus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AllyPicks: React.FC = () => {
  const { teamBlue, currentStepIndex, getSequence } = useDraftStore();
  const sequence = getSequence();
  const getHeroById = (id: string) => (heroesData as any).find((h: any) => h.id === id);

  return (
    <section className="w-24 md:w-32 bg-surface-container-low p-2 flex flex-col gap-2 border-r border-outline-variant/10 z-30">
      <p className="font-label text-[9px] text-primary-container font-black tracking-widest text-center uppercase mb-1">Ally Draft</p>
      <div className="flex-1 flex flex-col gap-3">
        {[0, 1, 2, 3, 4].map((index) => {
          const heroId = teamBlue[index];
          const hero = heroId ? getHeroById(heroId) : null;
          
          // Find the step index in sequence for Ally Picks
          const bluePickSteps = sequence
            .map((s, i) => ({ ...s, i }))
            .filter(s => s.type === 'pick' && s.team === 'blue')
            .map(s => s.i);
          
          const stepIndex = bluePickSteps[index];
          const isActive = currentStepIndex === stepIndex;
          
          return (
            <div 
              key={index} 
              className={cn(
                "aspect-square clip-path-chamfer relative overflow-hidden border-2 transition-all duration-300",
                hero 
                  ? 'bg-surface-container-high border-primary-container shadow-neon-blue' 
                  : isActive
                    ? 'bg-primary-container/10 border-primary-container shadow-neon-blue animate-pulse'
                    : 'bg-primary-container/5 border-dashed border-primary-container/20 flex items-center justify-center'
              )}
            >
              {hero ? (
                <img 
                  src={hero.avatar_img} 
                  alt={hero.name} 
                  className="w-full h-full object-cover animate-in fade-in zoom-in duration-500"
                />
              ) : (
                <UserPlus className={cn("w-5 h-5", isActive ? "text-primary-container" : "text-primary-container/30")} />
              )}
              
              {/* Slot Number Overlay */}
              <div className={cn(
                "absolute top-1 left-1 px-1 text-[8px] font-black rounded z-10",
                isActive ? "bg-primary-container text-on-primary" : "bg-black/60 text-primary-container"
              )}>
                Ally {index + 1}
              </div>

              {isActive && (
                <div className="absolute inset-0 bg-primary-container/5 pointer-events-none border-2 border-primary-container animate-ping opacity-20" />
              )}
            </div>
          );
        })}
      </div>
      
      {/* Team Stats Summary */}
      <div className="bg-surface-container-highest p-2 rounded text-[8px] space-y-1 mt-auto">
        <div className="flex justify-between">
          <span className="text-outline uppercase">COMP</span>
          <span className="text-primary-container">65%</span>
        </div>
        <div className="h-1 bg-surface-dim rounded-full overflow-hidden">
          <div className="h-full bg-primary-container w-[65%] shadow-neon-blue" />
        </div>
      </div>
    </section>
  );
};

export default AllyPicks;
