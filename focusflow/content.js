// content.js
let stress = 0;
let currentMode = "NEUTRAL";

// Create UI Elements (st-box and blackout)
const initUI = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        #st-box { position: fixed; top: 20px; right: 20px; width: 240px; background: #000; border: 1px solid #444; z-index: 2000000; padding: 10px; font-family: monospace; color: #fff; border-radius: 4px; }
        #st-bar { position: absolute; left: 0; top: 0; height: 100%; background: #e6c300; z-index: -1; transition: width 0.4s ease; }
        #blackout { position: fixed; inset: 0; z-index: 2147483647; display: none; justify-content: center; align-items: center; background: radial-gradient(circle, rgba(150,0,0,0.4) 0%, rgba(0,0,0,0.95) 100%); backdrop-filter: blur(50px); }
        #alert-content { padding: 40px; background: #ff0000; border: 15px solid #000; text-align: center; color: #fff; font-family: Impact; box-shadow: 0 0 100px #ff0000; }
        .nagavalli-vibration { animation: intense-shake 0.04s infinite; }
        @keyframes intense-shake { 0% { transform: translate(5px, 5px); } 50% { transform: translate(-5px, -5px); } }
    `;
    document.head.appendChild(style);

    const ui = document.createElement('div');
    ui.id = 'st-box';
    ui.innerHTML = `<div id="st-bar" style="width: 0%"></div><div id="st-mode">MODE: NEUTRAL</div><div>THREAT: <span id="st-num">0</span>%</div>`;
    document.body.appendChild(ui);

    const overlay = document.createElement('div');
    overlay.id = 'blackout';
    overlay.innerHTML = `<div id="alert-content"><h1>💀 AYOGYA NAYYE!!</h1><p>SYSTEM COMPROMISED</p></div>`;
    document.body.appendChild(overlay);
};

// Mode Detection Logic
const detectMode = () => {
    const url = window.location.href.toLowerCase();
    let mode = "NEUTRAL";
    if (url.includes("youtube.com")) mode = "CASUAL";
    else if (url.includes("github.com") || document.querySelector('code')) mode = "DEVELOPER";
    else if (document.querySelector('textarea, [contenteditable="true"]')) mode = "WRITER";
    
    if (currentMode !== mode) {
        currentMode = mode;
        document.getElementById('st-mode').innerText = "MODE: " + mode;
        chrome.runtime.sendMessage({type: "MODE_CHANGE", mode: mode});
    }
};

// Receive updates from Background script
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "UPDATE_STRESS") {
        stress = msg.score;
        document.getElementById('st-bar').style.width = stress + '%';
        document.getElementById('st-num').innerText = Math.floor(stress);
        
        // Visual distortion based on stress
        document.body.style.filter = `grayscale(${stress > 40 ? stress : 0}%) blur(${stress > 70 ? (stress-70)/2 : 0}px)`;

        if (stress >= 100) {
            const blackout = document.getElementById('blackout');
            blackout.style.display = 'flex';
            document.getElementById('alert-content').classList.add('nagavalli-vibration');
        }
    }
});

// Sensors
window.addEventListener('keydown', (e) => chrome.runtime.sendMessage({type: "SIGNAL", data: "key", repeat: e.repeat}));
window.addEventListener('wheel', () => chrome.runtime.sendMessage({type: "SIGNAL", data: "scroll"}));

initUI();
setInterval(detectMode, 2000);