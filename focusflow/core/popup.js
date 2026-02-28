// popup.js
function updateStats() {
    // Request the current score and mode from background.js
    chrome.runtime.sendMessage({type: "GET_STATUS"}, (response) => {
        if (response) {
            document.getElementById('score-display').innerText = Math.floor(response.score) + "%";
            document.getElementById('current-mode').innerText = response.mode;
        }
    });
}

// Update every second when popup is open
setInterval(updateStats, 1000);
updateStats();
