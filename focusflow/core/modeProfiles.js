export const ModeProfiles = {
  CASUAL_VIDEO: {
    weights: { 
        interaction: 0.8, // High weight on clicks/keys (chaotic)
        scroll: 0.2       // Low weight on scroll
    },
    thresholds: { T1: 10, T2: 25, T3: 50 }
  },
  WORK_CODE: {
    weights: { 
        interaction: 0.1, // Ignore typing/clicks
        scroll: 0.5 
    },
    thresholds: { T1: 30, T2: 50, T3: 80 }
  }
};