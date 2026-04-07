import React from 'react';

const AISkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Strategic Briefing Skeleton */}
      <div className="bg-surface-container-highest/30 p-4 clip-path-chamfer border border-outline-variant/10 relative overflow-hidden h-32">
        <div className="scanline" />
        <div className="flex gap-2 mb-4">
          <div className="w-4 h-4 bg-primary-container/20 rounded" />
          <div className="w-32 h-3 bg-primary-container/20 rounded" />
        </div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-on-surface/5 rounded" />
          <div className="w-5/6 h-2 bg-on-surface/5 rounded" />
          <div className="w-4/6 h-2 bg-on-surface/5 rounded" />
        </div>
      </div>

      {/* Suggested Operators Skeleton */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-surface-container-highest/20 p-3 clip-path-chamfer border border-outline-variant/10 h-24 flex items-center gap-3">
          <div className="w-12 h-12 bg-on-surface/5 clip-path-chamfer shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="w-24 h-3 bg-on-surface/10 rounded" />
            <div className="w-16 h-2 bg-on-surface/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AISkeleton;
