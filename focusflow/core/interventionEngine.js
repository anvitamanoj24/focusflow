// core/interventionEngine.js
const handleIntervention = (score, profile) => {
  if (score >= profile.thresholds.T3) {
    // Trigger the Gated Webcam Validation
    WebcamValidator.validate().then(isChaotic => {
      if (isChaotic) triggerHardLock();
    });
  } else if (score >= profile.thresholds.T2) {
    uiFeedback.hideDistractions(); // T2: Soft intervention
  } else if (score >= profile.thresholds.T1) {
    uiFeedback.applyVisualCalm(); // T1: Visual cue
  } else {
    uiFeedback.reset(); // Recovery
  }
};