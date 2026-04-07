import React from 'react';
import { useDraftStore } from './store/useDraftStore';
import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';
import AllyPicks from './components/draft/AllyPicks';
import EnemyPicks from './components/draft/EnemyPicks';
import BanPicks from './components/draft/BanPicks';
import HeroGrid from './components/HeroGrid';
import AISuggestion from './components/AISuggestion';
import { Wifi, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const { resetDraft } = useDraftStore();

  return (
    <div className="flex flex-col h-screen bg-surface-container-lowest text-on-surface font-body overflow-hidden">
      <Header />
      
      <main className="flex-1 flex overflow-hidden">
        <SideNav />
        
        {/* Main Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left: Ally Picks */}
          <AllyPicks />
          
          {/* Center: Grid & Phases */}
          <section className="flex-1 flex flex-col bg-surface-container overflow-hidden">
            <BanPicks />
            <HeroGrid />
          </section>

          {/* Right: Enemy & AI Insights */}
          <section className="w-80 bg-surface-container-low border-l border-outline-variant/10 flex flex-col z-30">
            <EnemyPicks />
            <AISuggestion />
            
            {/* Footer Action */}
            <div className="p-4 border-t border-outline-variant/10 bg-surface-container-low">
              <button 
                onClick={resetDraft}
                className="w-full bg-gradient-to-r from-primary-container to-primary-fixed-dim text-on-primary font-headline font-black py-4 clip-path-chamfer hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs shadow-neon-blue"
              >
                Reset Tactical Draft
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* HUD Status Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-surface-container-high/80 backdrop-blur-md clip-path-chamfer border border-outline-variant/30 flex items-center gap-8 z-50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container neon-pulse"></span>
          <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Latency: 12ms</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
          <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Sync: Active</span>
        </div>
        <div className="flex items-center gap-2 text-tertiary-fixed-dim">
          <Wifi className="w-3.5 h-3.5" />
          <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em]">Encrypted</span>
        </div>
        <div className="flex items-center gap-2 text-primary-container/60 border-l border-outline-variant/30 pl-8">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em]">V1.0 Operational</span>
        </div>
      </div>
    </div>
  );
};

export default App;
