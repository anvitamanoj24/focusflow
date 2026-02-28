// core/modeProfiles.js
export const ModeProfiles = {
  CASUAL: {
    weights: { interaction: 0.8, scroll: 0.2, tabSwitch: 0.5 },
    thresholds: { T1: 10, T2: 25, T3: 50 }
  },
  DEVELOPER: {
    weights: { interaction: 0.1, scroll: 0.3, tabSwitch: 0.8 },
    thresholds: { T1: 30, T2: 50, T3: 80 }
  },
  WRITER: {
    weights: { interaction: 0.05, scroll: 0.2, tabSwitch: 0.9 }, // High tolerance for typing
    thresholds: { T1: 40, T2: 60, T3: 90 }
  },
  NEUTRAL: {
    weights: { interaction: 0.4, scroll: 0.4, tabSwitch: 0.4 },
    thresholds: { T1: 20, T2: 40, T3: 70 }
  }
};