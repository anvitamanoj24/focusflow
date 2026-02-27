// core/overloadEngine.js
class OverloadEngine {
  constructor() {
    this.accumulator = 0;
    this.decay = 0.95;
  }

  calculate(metrics, profile) {
    const instantScore =
      (metrics.tabSwitchRate * profile.weights.tabSwitch) +
      (metrics.scrollIntensity * profile.weights.scroll) +
      (metrics.interactionBurst * profile.weights.interaction);

    // Apply accumulator logic: Current = (Previous * Decay) + Instant
    this.accumulator = (this.accumulator * this.decay) + instantScore;
    return this.accumulator;
  }
}