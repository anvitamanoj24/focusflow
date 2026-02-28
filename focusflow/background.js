// background.js
import { ModeProfiles } from './core/modeProfiles.js';

let score = 0;
let currentMode = "NEUTRAL";

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "MODE_CHANGE") currentMode = msg.mode;
    
    if (msg.type === "SIGNAL") {
        const profile = ModeProfiles[currentMode];
        let gain = 0;

        if (msg.data === "key") gain = msg.repeat ? 2.5 : 1;
        if (msg.data === "scroll") gain = 5;

        // Apply mode weights
        score = Math.min(100, score + (gain * profile.weights.interaction));
    }
});

// Cooldown and Heartbeat
setInterval(() => {
    score = Math.max(0, score - 0.5); // Natural decay
    
    // Broadcast score to content script to update UI
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, {type: "UPDATE_STRESS", score: score});
        }
    });
}, 200);