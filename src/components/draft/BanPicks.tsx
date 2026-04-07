import React from 'react';
import { useDraftStore } from '../../store/useDraftStore';
import heroesData from '../../data/heroes_public.json';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BanPicks: React.FC = () => {
  const { banned, currentStepIndex, isRanked, getSequence } = useDraftStore();
  const sequence = getSequence();
  const getHeroById = (id: string) => (heroesData as any).find((h: any) => h.id === id);

  // In Ranked Mode: 3 bans each. In Tournament: 4 bans each.
  const numBansPerSide = isRanked ? 3 : 4;

  return (
    <div className="flex justify-between items-center px-8 py-3 bg-surface-container-lowest/50 border-b border-outline-variant/10">
      {/* Ally Bans */}
      <div className="flex gap-2">
        {Array.from({ length: numBansPerSide }).map((_, index) => {
          // Find the step index in sequence for Ally Bans
          const allyBanSteps = sequence
            .map((s, i) => ({ ...s, i }))
            .filter(s => s.type === 'ban' && s.team === 'blue')
            .map(s => s.i);
          
          const stepIndex = allyBanSteps[index];
          const isActive = currentStepIndex === stepIndex;
          
          // Find hero in 'banned' array
          // Count total bans at or before this step index
          const bannedIndex = sequence.slice(0, stepIndex + 1).filter(s => s.type === 'ban').length - 1;
          const heroId = currentStepIndex > stepIndex ? banned[bannedIndex] : null;
          const hero = heroId && heroId !== 'none' ? getHeroById(heroId) : null;
          const isSkipped = heroId === 'none';

          return (
            <div key={index} className={cn(
              "w-10 h-10 rounded-full border overflow-hidden bg-surface-container-high transition-all relative flex items-center justify-center",
              isActive ? "border-primary-container shadow-neon-blue animate-pulse z-10" : "border-primary-container/20"
            )}>
              {hero && <img className="w-full h-full object-cover grayscale opacity-50" src={hero.avatar_img} alt="Ban" />}
              {isSkipped && <span className="text-[8px] font-black text-outline uppercase">SKIP</span>}
              {isActive && <div className="absolute inset-0 bg-primary-container/20 pointer-events-none" />}
            </div>
          );
        })}
      </div>
      
      <div className="text-center group">
        <p className="font-headline font-black text-[9px] tracking-[0.3em] text-outline uppercase group-hover:text-primary-container transition-colors">Tactical Bans Stage</p>
        <div className="h-0.5 w-full bg-outline-variant/10 mt-1 overflow-hidden">
          <motion.div 
            animate={{ x: [-50, 50] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="h-full w-1/2 bg-primary-container/30" 
          />
        </div>
      </div>

      {/* Enemy Bans */}
      <div className="flex gap-2">
        {Array.from({ length: numBansPerSide }).map((_, index) => {
          const enemyBanSteps = sequence
            .map((s, i) => ({ ...s, i }))
            .filter(s => s.type === 'ban' && s.team === 'red')
            .map(s => s.i);
          
          const stepIndex = enemyBanSteps[index];
          const isActive = currentStepIndex === stepIndex;
          
          const bannedIndex = sequence.slice(0, stepIndex + 1).filter(s => s.type === 'ban').length - 1;
          const heroId = currentStepIndex > stepIndex ? banned[bannedIndex] : null;
          const hero = heroId && heroId !== 'none' ? getHeroById(heroId) : null;
          const isSkipped = heroId === 'none';

          return (
            <div key={index} className={cn(
              "w-10 h-10 rounded-full border overflow-hidden bg-surface-container-high transition-all relative flex items-center justify-center",
              isActive ? "border-secondary-container shadow-neon-red animate-pulse z-10" : "border-secondary-container/20"
            )}>
              {hero && <img className="w-full h-full object-cover grayscale opacity-50" src={hero.avatar_img} alt="Ban" />}
              {isSkipped && <span className="text-[8px] font-black text-outline uppercase">SKIP</span>}
              {isActive && <div className="absolute inset-0 bg-secondary-container/20 pointer-events-none" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BanPicks;
