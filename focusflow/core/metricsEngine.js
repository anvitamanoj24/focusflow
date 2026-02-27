// core/metricsEngine.js
const calculateVolatility = (snapshot) => {
  return {
    // Example: normalize 0-20 tab switches in 5s to 0.0-1.0
    tabSwitchRate: Math.min(snapshot.tabSwitchCount / 20, 1),
    scrollIntensity: Math.min(snapshot.scrollCount / 50, 1),
    interactionBurst: Math.min((snapshot.clickCount + snapshot.keyCount) / 30, 1)
  };
};