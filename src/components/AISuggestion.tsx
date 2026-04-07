import React, { useState, useEffect, useRef } from 'react';
import { useDraftStore, type Recommendation } from '../store/useDraftStore';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Zap, Terminal, Activity, AlertTriangle, Cpu, Share2, Trophy, Target, ShieldAlert } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AISkeleton from './ui/AISkeleton';
import heroesData from '../data/heroes_public.json';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NeuralPick {
  id: string;
  name: string;
  reason: string;
}

interface VictoryForecast {
  win_rate: number;
  summary: string;
  win_conditions: string[];
  danger_alerts: string[];
}

const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:8787'
  : (import.meta.env.VITE_API_URL || 'https://aov-draft-api.aov-hint.workers.dev');

const AISuggestion: React.FC = () => {
  const { teamBlue, teamRed, banned, currentStepIndex, addHeroToDraft, getCurrentStep } = useDraftStore();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [neuralPicks, setNeuralPicks] = useState<NeuralPick[]>([]);
  const [missingRoles, setMissingRoles] = useState<string[]>([]);
  const [isRecsLoading, setIsRecsLoading] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<Record<string, string>>({});
  const [aiSummary, setAiSummary] = useState<string>("");
  const [forecast, setForecast] = useState<VictoryForecast | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const getHeroById = (id: string) => (heroesData as any[]).find(h => h.id === id);

  useEffect(() => {
    const fetchTacticalData = async () => {
      const isDraftEmpty = teamBlue.length === 0 && teamRed.length === 0 && banned.length === 0;
      if (isDraftEmpty) {
        setRecommendations([]);
        setNeuralPicks([]);
        setMissingRoles([]);
        setAiAdvice({});
        setAiSummary("");
        setForecast(null);
        return;
      }

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      const currentStep = getCurrentStep();
      const isFinal = teamBlue.length === 5 && teamRed.length === 5;

      // LAZY AI LOGIC: Only involve AI on Ally Pick turns OR Final state
      // During Enemy turns or Ban turns, just do algorithmic sync
      const shouldInvolveAI = isFinal || (currentStep && currentStep.team === 'blue' && currentStep.type === 'pick');

      // Step 1: Rapid Algorithmic Sync (Always run to keep UI snappy)
      setIsRecsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/recommend`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ teamBlue, teamRed, banned, includeAI: false }),
        });
        const data = await response.json();
        setRecommendations(data.recommendations || []);
        if (data.missingRoles) setMissingRoles(data.missingRoles);
        if (!isFinal) setForecast(null);
      } catch (error: any) {
        if (error.name !== 'AbortError') console.error('Failed to fetch recommendations:', error);
      } finally {
        setIsRecsLoading(false);
      }

      // Step 2: Neural Strategic Overlay (Triggered based on lazy logic)
      if (shouldInvolveAI) {
        setIsAIThinking(true);
        try {
          const response = await fetch(`${API_BASE_URL}/recommend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ teamBlue, teamRed, banned, includeAI: true }),
            signal: abortControllerRef.current.signal
          });
          const data = await response.json();

          if (data.recommendations) setRecommendations(data.recommendations);
          if (data.missingRoles) setMissingRoles(data.missingRoles);

          if (data.isFinal && data.forecast) {
            setForecast(data.forecast);
            setAiSummary(data.forecast.summary);
          } else {
            setAiAdvice(data.aiAdvice || {});
            setAiSummary(data.aiSummary || "");
            setNeuralPicks(data.neuralPicks || []);
            setForecast(null);
          }
        } catch (error: any) {
          if (error.name !== 'AbortError') console.error('Failed to fetch AI advice:', error);
        } finally {
          setIsAIThinking(false);
        }
      }
    };

    fetchTacticalData();

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [teamBlue, teamRed, banned, currentStepIndex]);

  if (recommendations.length === 0 && !isRecsLoading && !forecast && !isAIThinking) return null;

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-surface-container-low/50 relative overflow-hidden backdrop-blur-sm">
      {/* HUD Scan Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-container/20 shadow-[0_0_10px_#00f2ff] animate-scanline pointer-events-none" />

      {/* Header Panel */}
      <div className="p-4 border-b border-outline-variant/10 flex items-center justify-between bg-black/20">
        <div className="flex items-center gap-2">
          <BrainCircuit className={cn("w-4 h-4", isAIThinking ? "text-primary-container animate-pulse" : "text-tertiary-fixed-dim")} />
          <h4 className="font-headline font-black text-[10px] text-on-surface tracking-[0.2em] uppercase">
            {forecast ? 'Neural Match Analysis' : 'Tactical Neural Link'}
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <Activity className={cn("w-3 h-3", isAIThinking ? "text-primary-container animate-bounce" : "text-outline")} />
          <span className="font-label text-[8px] font-black text-outline uppercase tracking-widest">
            {isAIThinking ? 'Processing...' : 'Stable'}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        <AnimatePresence mode="wait">
          {isRecsLoading ? (
            <AISkeleton key="loading" />
          ) : forecast ? (
            <motion.div
              key="forecast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 pb-6"
            >
              {/* Victory Rate Meter */}
              <div className="bg-black/40 p-6 clip-path-chamfer border border-primary-container/30 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-container/5 animate-pulse" />
                <h5 className="font-headline font-black text-[10px] uppercase tracking-[0.3em] text-primary-container mb-4">Dự báo Tương Quan Lực Lượng</h5>
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                      <motion.circle
                        cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={377}
                        initial={{ strokeDashoffset: 377 }}
                        animate={{ strokeDashoffset: 377 - (377 * forecast.win_rate) / 100 }}
                        className="text-primary-container"
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-headline font-black text-4xl text-white">{forecast.win_rate}%</span>
                      <span className="font-label text-[8px] text-primary-container uppercase tracking-tight">Cơ hội Thắng (Blue)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Summary */}
              <div className="bg-surface-container-highest/30 p-4 border-l-4 border-primary-container">
                <p className="text-sm font-medium italic text-on-surface leading-relaxed">
                  "{forecast.summary}"
                </p>
              </div>

              {/* Win Conditions & Alerts */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-primary-container/10 p-4 border border-primary-container/20 space-y-3">
                  <div className="flex items-center gap-2 text-primary-container">
                    <Trophy className="w-4 h-4" />
                    <span className="font-headline font-black text-[10px] uppercase tracking-widest">Key Win Conditions (Blue/Red)</span>
                  </div>
                  <ul className="space-y-2">
                    {forecast.win_conditions.map((cond, i) => (
                      <li key={i} className="flex gap-2 text-[11px] text-on-surface-variant font-medium">
                        <Target className="w-3 h-3 mt-0.5 text-primary-container shrink-0" />
                        {cond}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-error-container/10 p-4 border border-error-container/20 space-y-3">
                  <div className="flex items-center gap-2 text-error-container">
                    <ShieldAlert className="w-4 h-4" />
                    <span className="font-headline font-black text-[10px] uppercase tracking-widest text-error-container">Cảnh Báo Chiến Thuật (Blue)</span>
                  </div>
                  <ul className="space-y-2">
                    {forecast.danger_alerts.map((alert, i) => (
                      <li key={i} className="flex gap-2 text-[11px] text-error-container font-medium">
                        <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                        {alert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* SECTION 1: ROLE GAP HUD */}
              {missingRoles.length > 0 && (
                <div className="bg-red-950/20 border border-red-500/30 p-3 clip-path-chamfer flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-headline font-black text-[8px] uppercase tracking-widest text-red-400 mb-1">Team Composition Gaps</p>
                    <div className="flex flex-wrap gap-1.5">
                      {missingRoles.map(role => (
                        <span key={role} className="px-2 py-0.5 bg-red-500/10 text-red-200 font-label text-[8px] uppercase font-bold border border-red-500/20">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 2: STRATEGIC BRIEFING */}
              <div className="bg-surface-container-highest/30 p-4 clip-path-chamfer border border-primary-container/20 relative overflow-hidden group">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-3 h-3 text-primary-container" />
                  <span className="font-headline font-black text-[9px] uppercase tracking-widest text-primary-container">
                    {isAIThinking ? 'Neural Analysis Active' : 'Strategic Briefing'}
                  </span>
                </div>

                <p className="text-[11px] leading-relaxed text-on-surface-variant font-medium italic border-l-2 border-primary-container/30 pl-3 py-1">
                  {isAIThinking ? (
                    <span className="animate-pulse">Deep scanning draft context for counter-opportunities...</span>
                  ) : (
                    aiSummary || "Hệ thống thuật toán đang hoạt động. AI sẽ kích hoạt khi đến lượt chọn của bạn."
                  )}
                </p>
              </div>

              {/* SECTION 3: NEURAL INTEL (AI Independent Picks) */}
              {neuralPicks.length > 0 && (
                <div className="space-y-3">
                  <h5 className="font-headline font-black text-[9px] uppercase tracking-widest text-tertiary-fixed-dim pl-1 flex items-center gap-2">
                    <Cpu className="w-3 h-3" />
                    Neural Intelligence Picks
                  </h5>
                  <div className="grid grid-cols-1 gap-2">
                    {neuralPicks.map((pick, idx) => {
                      const hero = getHeroById(pick.id);
                      if (!hero) return null;
                      const isConsensus = recommendations.some(r => r.hero.id === pick.id);

                      return (
                        <motion.div
                          key={pick.id}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-tertiary-container/5 border border-tertiary-container/30 p-3 clip-path-chamfer relative overflow-hidden group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 clip-path-chamfer border-2 border-tertiary-container shrink-0 relative">
                              <img src={hero.avatar_img} alt={hero.name} className="w-full h-full object-cover" />
                              {isConsensus && (
                                <div className="absolute -top-1 -right-1 bg-primary-container text-on-primary rounded-full p-0.5 z-10">
                                  <Share2 className="w-2 h-2" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-headline font-black text-xs text-white uppercase truncate">{hero.name}</h3>
                                {isConsensus && <span className="text-[7px] font-black text-primary-container uppercase tracking-widest">Consensus</span>}
                              </div>
                              <p className="text-[9px] text-tertiary-fixed-dim line-clamp-2 mt-1 leading-tight">
                                {pick.reason}
                              </p>
                            </div>
                            <button
                              onClick={() => addHeroToDraft(pick.id)}
                              className="w-7 h-7 flex items-center justify-center bg-tertiary-container text-white rounded-sm hover:scale-110 transition-transform"
                            >
                              <Zap className="w-3 h-3" />
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SECTION 4: ALGORITHMIC CANDIDATES */}
              <div className="space-y-3">
                <h5 className="font-headline font-black text-[9px] uppercase tracking-widest text-outline pl-1 flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  Top Candidates
                </h5>

                {recommendations.map((rec, idx) => (
                  <motion.div
                    key={rec.hero.id}
                    className={cn(
                      "bg-surface-container-highest/40 p-3 clip-path-chamfer border transition-all relative group",
                      idx === 0
                        ? "border-primary-container/30 bg-primary-container/5"
                        : "border-outline-variant/20 hover:border-outline-variant/50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 clip-path-chamfer border-2 overflow-hidden shrink-0 relative",
                        idx === 0 ? "border-primary-container shadow-neon-blue" : "border-outline-variant"
                      )}>
                        <img src={rec.hero.avatar_img} alt={rec.hero.name} className="w-full h-full object-cover grayscale-[0.2] transition-all" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-headline font-black text-xs uppercase text-white truncate">{rec.hero.name}</p>
                          <span className="text-[9px] font-black text-primary-container/60">{Math.round(rec.score)}%</span>
                        </div>
                        <p className="text-[9px] text-on-surface-variant line-clamp-1 italic text-primary-container/80 mt-1">
                          {aiAdvice[rec.hero.id] || rec.reasons[0]}
                        </p>
                      </div>

                      <button
                        onClick={() => addHeroToDraft(rec.hero.id)}
                        className={cn(
                          "w-7 h-7 flex items-center justify-center rounded-sm transition-all",
                          idx === 0 ? "bg-primary-container text-on-primary" : "bg-surface-container-highest border border-outline-variant text-outline hover:border-primary-container"
                        )}
                      >
                        <Zap className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AISuggestion;
