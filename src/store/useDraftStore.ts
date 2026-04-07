import { create } from 'zustand';

export type Role = "Hỗ trợ" | "Đỡ đòn" | "Sát thủ" | "Pháp sư" | "Xạ thủ" | "Đấu sĩ";

export interface Hero {
  id: string;
  name: string;
  role: Role[];
  avatar_img: string;
  stats: {
    sinh_menh: number;
    sat_thuong: number;
    hieu_ung: number;
    do_kho: number;
  };
  meta_data: {
    win_rate: number;
    pick_rate: number;
    ban_rate: number;
  };
}

export interface Recommendation {
  hero: Hero;
  score: number;
  reasons: string[];
}

export type DraftStep = {
  team: 'blue' | 'red';
  type: 'pick' | 'ban';
  label: string;
};

export const getDraftSequence = (isRanked: boolean, startingSide: 'blue' | 'red'): DraftStep[] => {
  const otherSide = startingSide === 'blue' ? 'red' : 'blue';
  
  if (isRanked) {
    // Ranked Mode: 6 Bans -> 10 Picks
    return [
      // 6 Bans (Alternating)
      { team: startingSide, type: 'ban', label: `${startingSide.toUpperCase()} Ban 1` },
      { team: otherSide, type: 'ban', label: `${otherSide.toUpperCase()} Ban 1` },
      { team: startingSide, type: 'ban', label: `${startingSide.toUpperCase()} Ban 2` },
      { team: otherSide, type: 'ban', label: `${otherSide.toUpperCase()} Ban 2` },
      { team: startingSide, type: 'ban', label: `${startingSide.toUpperCase()} Ban 3` },
      { team: otherSide, type: 'ban', label: `${otherSide.toUpperCase()} Ban 3` },
      // 10 Picks (1-2-2-2-2-1)
      { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 1` },
      { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 1` },
      { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 2` },
      { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 2` },
      { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 3` },
      { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 3` },
      { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 4` },
      { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 4` },
      { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 5` },
      { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 5` },
    ];
  }

  // Tournament Mode (Standard)
  return [
    { team: startingSide, type: 'ban', label: `${startingSide.toUpperCase()} Ban 1` },
    { team: otherSide, type: 'ban', label: `${otherSide.toUpperCase()} Ban 1` },
    { team: startingSide, type: 'ban', label: `${startingSide.toUpperCase()} Ban 2` },
    { team: otherSide, type: 'ban', label: `${otherSide.toUpperCase()} Ban 2` },
    { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 1` },
    { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 1` },
    { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 2` },
    { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 2` },
    { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 3` },
    { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 3` },
    { team: otherSide, type: 'ban', label: `${otherSide.toUpperCase()} Ban 3` },
    { team: startingSide, type: 'ban', label: `${startingSide.toUpperCase()} Ban 3` },
    { team: otherSide, type: 'ban', label: `${otherSide.toUpperCase()} Ban 4` },
    { team: startingSide, type: 'ban', label: `${startingSide.toUpperCase()} Ban 4` },
    { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 4` },
    { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 4` },
    { team: startingSide, type: 'pick', label: `${startingSide.toUpperCase()} Pick 5` },
    { team: otherSide, type: 'pick', label: `${otherSide.toUpperCase()} Pick 5` },
  ];
};

interface DraftState {
  teamBlue: string[];
  teamRed: string[];
  banned: string[];
  currentStepIndex: number;
  isRanked: boolean;
  startingSide: 'blue' | 'red';
  
  // Actions
  addHeroToDraft: (heroId: string) => void; 
  skipStep: () => void;
  undoStep: () => void;
  resetDraft: () => void;
  toggleMode: () => void;
  toggleSide: () => void;
  getSequence: () => DraftStep[];
  getCurrentStep: () => DraftStep;
}

export const useDraftStore = create<DraftState>((set, get) => ({
  teamBlue: [],
  teamRed: [],
  banned: [],
  currentStepIndex: 0,
  isRanked: true,
  startingSide: 'blue',

  getSequence: () => getDraftSequence(get().isRanked, get().startingSide),
  getCurrentStep: () => get().getSequence()[get().currentStepIndex],

  addHeroToDraft: (heroId) => set((state) => {
    const sequence = getDraftSequence(state.isRanked, state.startingSide);
    if (state.currentStepIndex >= sequence.length) return state;
    
    if (state.teamBlue.includes(heroId) || state.teamRed.includes(heroId) || state.banned.includes(heroId)) {
      return state;
    }

    const step = sequence[state.currentStepIndex];
    let nextState = { ...state, currentStepIndex: state.currentStepIndex + 1 };

    if (step.type === 'ban') {
      nextState.banned = [...state.banned, heroId];
    } else if (step.team === 'blue') {
      nextState.teamBlue = [...state.teamBlue, heroId];
    } else {
      nextState.teamRed = [...state.teamRed, heroId];
    }

    return nextState;
  }),

  skipStep: () => set((state) => {
    const sequence = getDraftSequence(state.isRanked, state.startingSide);
    if (state.currentStepIndex >= sequence.length) return state;
    
    // Skip adds an empty string placeholder to keep array indices aligned if needed, 
    // or we can just increment index and handle nulls in UI.
    // For bans, we'll add "none" to indicate a skip.
    const step = sequence[state.currentStepIndex];
    let nextState = { ...state, currentStepIndex: state.currentStepIndex + 1 };
    
    if (step.type === 'ban') {
      nextState.banned = [...state.banned, 'none'];
    }
    // Note: Skipping a pick is harder, usually not allowed, but we'll increment index anyway.
    
    return nextState;
  }),

  undoStep: () => set((state) => {
    if (state.currentStepIndex === 0) return state;
    
    const prevIndex = state.currentStepIndex - 1;
    const sequence = getDraftSequence(state.isRanked, state.startingSide);
    const step = sequence[prevIndex];
    
    let nextState = { ...state, currentStepIndex: prevIndex };
    
    if (step.type === 'ban') {
      nextState.banned = state.banned.slice(0, -1);
    } else if (step.team === 'blue') {
      nextState.teamBlue = state.teamBlue.slice(0, -1);
    } else {
      nextState.teamRed = state.teamRed.slice(0, -1);
    }
    
    return nextState;
  }),

  resetDraft: () => set({
    teamBlue: [],
    teamRed: [],
    banned: [],
    currentStepIndex: 0
  }),

  toggleMode: () => set((state) => ({ 
    isRanked: !state.isRanked,
    ...state.resetDraft // Reset when switching mode
  })),

  toggleSide: () => set((state) => ({ 
    startingSide: state.startingSide === 'blue' ? 'red' : 'blue',
    ...state.resetDraft
  }))
}));
