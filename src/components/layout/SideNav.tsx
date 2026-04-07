import React from 'react';
import { LayoutGrid, Users, Zap, Shield, BrainCircuit } from 'lucide-react';

const SideNav: React.FC = () => {
  return (
    <aside className="w-16 md:w-20 bg-[#181b25] border-r border-[#31353f]/20 z-40 flex flex-col items-center py-6 gap-8">
      <div className="w-10 h-10 bg-primary-container/10 clip-path-chamfer flex items-center justify-center border border-primary-container/20">
        <LayoutGrid className="w-5 h-5 text-primary-container" />
      </div>
      <nav className="flex flex-col gap-6">
        <button className="w-12 h-12 flex items-center justify-center text-[#00f2ff] bg-[#262a34] rounded-lg transition-all border border-[#00f2ff]/30 shadow-neon-blue">
          <BrainCircuit className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-[#849495] hover:text-primary-container hover:bg-white/5 transition-all rounded-lg">
          <Users className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-[#849495] hover:text-primary-container hover:bg-white/5 transition-all rounded-lg">
          <Zap className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-[#849495] hover:text-primary-container hover:bg-white/5 transition-all rounded-lg">
          <Shield className="w-6 h-6" />
        </button>
      </nav>
    </aside>
  );
};

export default SideNav;
