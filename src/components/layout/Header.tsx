import React from 'react';
import { useDraftStore } from '../../store/useDraftStore';
import { ChevronDown, History, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const { currentStepIndex, getSequence } = useDraftStore();
  const sequence = getSequence();
  const currentStep = sequence[currentStepIndex];

  return (
    <header className="bg-gradient-to-b from-[#181b25] to-[#0a0e17] flex justify-between items-center w-full px-6 py-3 shadow-[0_4px_20px_rgba(0,242,255,0.15)] z-50">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-black text-[#00f2ff] tracking-tighter font-headline uppercase leading-none">
          AOV Draft Master
        </h1>
        <nav className="hidden md:flex gap-6 items-center">
          <a className="font-headline uppercase tracking-wider text-[#f1c100] border-b-2 border-[#f1c100] pb-1 transition-colors duration-300 text-xs" href="#">RANKED</a>
          <a className="font-headline uppercase tracking-wider text-[#849495] hover:text-[#00f2ff] transition-colors duration-300 text-xs" href="#">CLASSIC</a>
        </nav>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary-container neon-pulse"></span>
          <span className="text-primary-container font-headline font-black tracking-[0.2em] uppercase text-[10px]">
             {currentStep ? currentStep.label : 'DRAFT COMPLETE'}
          </span>
          <span className="w-2 h-2 rounded-full bg-primary-container neon-pulse"></span>
        </div>
        <div className="text-secondary-container font-headline text-2xl font-bold tracking-widest mt-0.5">00:24</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-surface-container-high px-4 py-1 clip-path-chamfer border border-outline-variant/30 flex items-center gap-3 opacity-50 grayscale pointer-events-none">
          <span className="font-label text-[10px] text-outline uppercase font-bold tracking-widest">Global Status</span>
          <span className="text-[#00f2ff] font-headline font-bold text-sm">
            ONLINE
          </span>
          <ChevronDown className="w-3 h-3 text-outline" />
        </div>
        <div className="flex items-center gap-4">
          <History className="w-5 h-5 text-[#849495] hover:text-[#00f2ff] cursor-pointer transition-colors" />
          <Settings className="w-5 h-5 text-[#849495] hover:text-[#00f2ff] cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;
