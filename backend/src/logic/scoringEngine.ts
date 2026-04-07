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
  skills: {
    passive: string;
    s1: string;
    s2: string;
    s3: string;
  };
  meta_data: {
    win_rate: number;
    pick_rate: number;
    ban_rate: number;
  };
  counters: string[];
  countered_by?: string[];
  synergies?: string[];
}

import rawHeroesData from '../data/heroes_data.json';

// Initialize and Enhance Data
export const heroes: Hero[] = (rawHeroesData as any[]).map(h => ({
  ...h,
  countered_by: [],
  synergies: []
}));

// Build Reverse Counter Map
heroes.forEach(h => {
  h.counters.forEach(targetName => {
    const targetHero = heroes.find(other => other.name === targetName);
    if (targetHero) {
      if (!targetHero.countered_by) targetHero.countered_by = [];
      if (!targetHero.countered_by.includes(h.name)) {
        targetHero.countered_by.push(h.name);
      }
    }
  });
});

// Advanced Synergy Matrix
heroes.forEach(h => {
  const hRoles = h.role;
  if (hRoles.includes("Hỗ trợ") || hRoles.includes("Đỡ đòn")) {
    h.synergies = heroes.filter(other => other.role.includes("Xạ thủ") || other.role.includes("Pháp sư")).map(o => o.name);
  } else if (hRoles.includes("Sát thủ")) {
    h.synergies = heroes.filter(other => other.role.includes("Hỗ trợ") && other.name !== h.name).map(o => o.name);
  }
});

export interface Recommendation {
  hero: Hero;
  score: number;
  reasons: string[];
  breakdown: {
    power: number;
    counter: number;
    synergy: number;
    balance: number;
  };
}

/**
 * ASBI 모델: AOV-Strategic Balanced Index (V2 - Flexible Meta Calibration)
 * Formula: Total = (P * 0.25) + (C * 0.35) + (S * 0.25) + (B * 0.15)
 */
export const calculateRecommendations = (
  teamBlueIds: string[],
  teamRedIds: string[],
  bannedIds: string[]
): Recommendation[] => {
  const teamBlue = teamBlueIds.map(id => heroes.find(h => h.id === id)).filter(Boolean) as Hero[];
  const teamRed = teamRedIds.map(id => heroes.find(h => h.id === id)).filter(Boolean) as Hero[];
  const unavailable = new Set([...teamBlueIds, ...teamRedIds, ...bannedIds]);
  const availableHeroes = heroes.filter(h => !unavailable.has(h.id));

  const blueRoles = teamBlue.flatMap(h => h.role);
  
  // Weights configuration
  const WEIGHTS = { P: 0.25, C: 0.35, S: 0.25, B: 0.15 };

  const recommendations = availableHeroes.map(hero => {
    const reasons: string[] = [];

    // --- 1. POWER FACTOR (P) - The "Wisp Fix" ---
    // Rule: Penalize Win Rate if Pick Rate is low (Reliability weight)
    const reliability = Math.min(1.0, hero.meta_data.pick_rate / 10.0);
    const wrBaseline = 50.0;
    const adjustedWRBonus = (hero.meta_data.win_rate - wrBaseline) * reliability;
    
    // Normalized PR/BR contribution
    const prScore = Math.min(100, hero.meta_data.pick_rate * 4); // 25% PR -> 100pts
    const brScore = Math.min(100, hero.meta_data.ban_rate * 3);  // 33% BR -> 100pts
    
    const powerBase = 50 + (adjustedWRBonus * 8); 
    const powerScore = (powerBase * 0.4) + (prScore * 0.3) + (brScore * 0.3);

    if (hero.meta_data.ban_rate > 15) reasons.push(`Tướng S-Tier (Tỉ lệ cấm cao: ${hero.meta_data.ban_rate}%)`);
    if (hero.meta_data.pick_rate > 15) reasons.push("Tướng Meta phổ biến (Độ ổn định cao)");

    // --- 2. COUNTER DIFFERENTIAL (C) ---
    let counterScore = 50; 
    teamRed.forEach(enemy => {
      // Countering a strong enemy (high power) is more valuable
      const enemyPowerFactor = (enemy.meta_data.win_rate - 45) / 10.0; // 0.5 to 1.5 range
      
      if (hero.counters.includes(enemy.name)) {
        const impact = 20 * Math.max(0.8, enemyPowerFactor); 
        counterScore += impact;
        reasons.push(`Khắc chế: ${enemy.name} (Value: +${impact.toFixed(1)})`);
      }
      if (hero.countered_by?.includes(enemy.name)) {
        counterScore -= 25;
      }
    });

    // --- 3. SYNERGY & ROLE SATURATION (S) ---
    let synergyScore = 50;
    const essentialRoles: Role[] = ["Xạ thủ", "Pháp sư", "Hỗ trợ", "Đỡ đòn", "Sát thủ"];
    
    hero.role.forEach(r => {
      const countInTeam = blueRoles.filter(role => role === r).length;
      if (countInTeam === 0) {
        synergyScore += 25;
        if (essentialRoles.includes(r)) reasons.push(`Bổ sung vị trí còn thiếu: ${r}`);
      } else {
        // Penalty for saturation: Picking 2nd of same role is bad, 3rd is disaster
        synergyScore -= (countInTeam * 35);
        if (countInTeam >= 1) reasons.push(`Cảnh báo: Đội đã có ${countInTeam} ${r}`);
      }
    });

    // Ally Synergies
    const syncMates = teamBlue.filter(mate => hero.synergies?.includes(mate.name));
    if (syncMates.length > 0) {
      synergyScore += 15;
      reasons.push(`Phối hợp tốt với: ${syncMates[0].name}`);
    }

    // --- 4. STRATEGIC BALANCE (B) ---
    let balanceScore = 50;
    const hasFrontline = blueRoles.some(r => r === "Đỡ đòn" || r === "Đấu sĩ");
    const hasMagicDamage = blueRoles.some(r => r === "Pháp sư");
    const hasPhysicalDamage = blueRoles.some(r => r === "Xạ thủ" || r === "Sát thủ");

    if (!hasFrontline && (hero.role.includes("Đỡ đòn") || hero.role.includes("Đấu sĩ"))) {
      balanceScore += 25;
      reasons.push("Cần thêm dàn chắn (Frontline)");
    }
    if (!hasMagicDamage && hero.role.includes("Pháp sư")) {
      balanceScore += 20;
      reasons.push("Cần thêm sát thương Phép");
    }
    if (!hasPhysicalDamage && (hero.role.includes("Xạ thủ") || hero.role.includes("Sát thủ"))) {
      balanceScore += 20;
    }

    // FINAL ASBI CALCULATION
    const totalScore = (powerScore * WEIGHTS.P) + 
                       (counterScore * WEIGHTS.C) + 
                       (synergyScore * WEIGHTS.S) + 
                       (balanceScore * WEIGHTS.B);

    return { 
      hero, 
      score: totalScore, 
      reasons: Array.from(new Set(reasons)),
      breakdown: {
        power: powerScore,
        counter: counterScore,
        synergy: synergyScore,
        balance: balanceScore
      }
    };
  });

  return recommendations.sort((a, b) => b.score - a.score);
};

export const getMissingRoles = (teamBlueIds: string[]): string[] => {
  const teamBlue = teamBlueIds.map(id => heroes.find(h => h.id === id)).filter(Boolean) as Hero[];
  const rolesPresent = teamBlue.flatMap(h => h.role);
  
  const missing: string[] = [];
  if (!rolesPresent.includes("Pháp sư")) missing.push("Pháp sư (Mid)");
  if (!rolesPresent.includes("Xạ thủ")) missing.push("Xạ thủ (AD)");
  if (!rolesPresent.includes("Sát thủ") && !rolesPresent.some(r => r === "Đấu sĩ")) missing.push("Sát thủ/Sát thương (Rừng)");
  if (!rolesPresent.includes("Hỗ trợ") && !rolesPresent.includes("Đỡ đòn")) missing.push("Trợ thủ/Đỡ đòn (Support)");
  if (teamBlue.length < 5 && !rolesPresent.includes("Đấu sĩ")) missing.push("Đấu sĩ (Đường Tà thần)");
  
  return missing;
};

export const getDetailedMatchupWeights = (teamBlueIds: string[], teamRedIds: string[]) => {
  const teamBlue = teamBlueIds.map(id => heroes.find(h => h.id === id)).filter(Boolean) as Hero[];
  const teamRed = teamRedIds.map(id => heroes.find(h => h.id === id)).filter(Boolean) as Hero[];
  
  const getWeights = (team: Hero[], enemies: Hero[]) => {
    return team.map(hero => {
      // 1. Base Power (Normalized WR * Reliability)
      const reliability = Math.min(1.0, hero.meta_data.pick_rate / 10.0);
      const basePower = (hero.meta_data.win_rate - 45) * 10 * reliability;

      // 2. Counter Score
      let counterScore = 0;
      enemies.forEach(enemy => {
        if (hero.counters.includes(enemy.name)) counterScore += 25;
        if (hero.countered_by?.includes(enemy.name)) counterScore -= 25;
      });

      // 3. Synergy Score
      let synergyScore = 0;
      team.forEach(mate => {
        if (mate.id !== hero.id && hero.synergies?.includes(mate.name)) synergyScore += 15;
      });

      return {
        id: hero.id,
        name: hero.name,
        base_power: Math.round(basePower),
        counter_advantage: counterScore,
        synergy_impact: synergyScore,
        roles: hero.role
      };
    });
  };

  return {
    blue: getWeights(teamBlue, teamRed),
    red: getWeights(teamRed, teamBlue),
    missing_roles_blue: getMissingRoles(teamBlueIds)
  };
};
