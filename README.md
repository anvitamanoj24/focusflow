DOPADRIFT 🎯
Basic Details
Team Name: MAGNITE
Team Members
Member 1: ANVITA M.K - COLLEGE OF ENGINEERING CHENGANNUR
Member 2: HRUDYA MOHAN - COLLEGE OF ENGINEERING CHENGANNUR
Hosted Project Link
(https://github.com/anvitamanoj24/focusflow.git)Project Description
"This is a chrome extension.so there no link"
DopaDrift is a high-end Chrome Extension designed for the ADHD brain that monitors "fidgety" digital behaviors in real-time. It uses biometric browsing patterns to detect dopamine-seeking loops and provides adaptive visual feedback to pull the user back into focus.
The Problem statement
Individuals with ADHD often fall into "dopamine loops"—unconscious patterns of rapid tab-switching, infinite scrolling, and frantic clicking. Standard site blockers are too rigid, while having no intervention leads to hours of lost productivity due to "digital drifting."
The Solution
DopaDrift acts as a "digital nervous system." It tracks scroll velocity, click frequency, and tab-hopping. As the user's behavior becomes more volatile, the UI subtly blurs or loses color; if a "drift threshold" is hit, a high-intensity Malayalam meme intervention forces a 5-second psychological reset.

Technical Details
Technologies/Components Used
For Software:
Languages used: JavaScript(ES6+), CSS3, HTML5
Frameworks used: Chrome Extension API (Manifest V3)
Tools used: VS Code, Chrome DevTools, Git


Features
List the key features of your project:
Biometric Drift Tracking: Analyzes scroll speed and "fidget scrolling" (rapid direction changes) to measure agitation.
Context-Aware Modes: Automatically switches between "Deep Work" (low tolerance) and "Casual" (high tolerance) based on the active website (e.g., GitHub vs. Instagram).
Glassmorphism HUD: A premium, semi-transparent heads-up display that shows your current "Drift Percentage" without being intrusive


Implementation
For Software:
Installation
  Clone this repository or download the source code.
  Open Google Chrome and navigate to chrome://extensions/.
  Enable Developer Mode using the toggle in the top-right corner.
  Click Load Unpacked and select the project folder (DopaDrift).
Run
The extension runs automatically on all websites once enabled. You can monitor your drift level via the HUD in the top-right corner of your browser.For Hardware:

Project Documentation
For Software:
Screenshots (Add at least 3)
(https://drive.google.com/file/d/10M2tiUEk2Qtn0IznxaUBDgQCOgA5ZnAa/view?usp=sharing,
https://drive.google.com/file/d/11XP0YKH-VpaG2G4Jtsbp1ynkS7Ai4-iD/view?usp=sharing, 
https://drive.google.com/file/d/1IamewB9hLrTwwnRLHL-LnMCcEWeczJrt/view?usp=sharing, 
https://drive.google.com/file/d/1Qmnnj2ca_0khbJ-LhvtJpEtPfXxN-OMt/view?usp=sharing)
Diagrams
System Architecture:
The architecture consists of Content Scripts acting as sensors. These listeners (Scroll, Keyboard, Visibility) feed data into a Central State Manager which calculates the "Drift Score." This score then drives the UI Engine to update the CSS filters (blur/grayscale) and the HUD.Application Workflow:
Rapid-Scroll Detection → 2.8x "Casual Mode" Multiplier Analysis → Visual Feedback (Red HUD + Page Blur) → Threshold Intervention (Pop up Card Lockout) → Focused Cooldown (12% State Reset)


Project Demo
Video
https://drive.google.com/file/d/1J7QdRrLhBQmNV3oNfwb2nFpD3jCnqFTb/view?usp=drive_link
The video demonstrates the "DopaDrift" effect in its most common use case: YouTube Infinite Scroll. It shows the HUD state transitioning from green to a pulsing red as the user rapidly scrolls through videos, eventually triggering the full-screen lockout.
Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

AI Tools Used (Optional - For Transparency Bonus)
If you used AI tools during development, document them here for transparency:
Tool Used: Gemini ,ChatGPT, GitHub 
Purpose: Refinement of the Volatility Engine logic and CSS Glassmorphism styling.
Example: Generated the core structure for scroll, visibilitychange, and mousedown listeners to track user behavior.
Example: Derived the calculation logic to differentiate between "Normal Reading" and "ADHD Fidget Scrolling."
Example: Code review and optimization suggestions
Key Prompts Used:
"Create a JavaScript sensor to detect rapid scroll direction changes for ADHD."
"Design a modern glassmorphism HUD using CSS backdrop-filters."

Percentage of AI-generated code: [Approximately 75%]
Human Contributions:
Architecture design and Malayalam cultural integration.
Custom business logic for "Mode Switching" based on DOM elements.
Integration and testing
Fine-tuning sensor sensitivity thresholds for real-world usage.
Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!

Team Contributions
HRUDYA MOHAN: The Backend (The "Brain"): This involves the mathematical decay logic in overloadEngine.js and the heartbeat cycle in background.js that determines when a user has reached a "chaotic" state.
ANVITA M.K: The Frontend (The "Sensors & UI"): This involves the event listeners in signalCollector.js and the CSS/DOM manipulation in content.js that triggers the "Ayogya Nayye" alert and visual blurring.

License
This project is licensed under the [LICENSE_NAME] License - see the LICENSE file for details.
Common License Options:
MIT License (Permissive, widely used)
Apache 2.0 (Permissive with patent grant)
GPL v3 (Copyleft, requires derivative works to be open source)

Made with ❤️ at TinkerHub
