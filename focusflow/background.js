import { SignalCollector } from './core/signalCollector.js';
import { OverloadEngine } from './core/overloadEngine.js';
import { ModeProfiles } from './core/modeProfiles.js';
import { WebcamValidator } from './core/webcamValidator.js';

const collector = new SignalCollector();
const engine = new OverloadEngine();

// The Heartbeat: Runs every 2 seconds
setInterval(async () => {
  const snapshot = collector.getSnapshot();
  
  // 1. Detect Mode (Simplified logic for now)
  const currentMode = "CASUAL_VIDEO"; // This would normally be dynamic
  const profile = ModeProfiles[currentMode];

  // 2. Calculate Overload Score
  const score = engine.calculate(snapshot, profile);
  console.log(`Current Overload Score: ${score.toFixed(2)}`);

  // 3. Threshold Logic
  if (score > profile.thresholds.T3) {
    console.warn("⚠️ T3 REACHED: Validation Required.");
    const isChaotic = await WebcamValidator.validate();
    
    if (isChaotic) {
      console.error("🚨 STATE: CHAOTIC. Initiating Hard Intervention.");
      // Trigger UI lockout or notification here
    }
  } else if (score > profile.thresholds.T1) {
    console.log("🟡 T1 REACHED: Soft Calming active.");
  }
}, 2000);