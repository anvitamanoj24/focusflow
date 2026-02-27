// core/signalCollector.js
class SignalCollector {
  constructor() {
    this.buffer = {
      scrolls: [],
      clicks: [],
      keys: [],
      tabs: []
    };
    this.windowSize = 5000; // 5 second window
  }

  init() {
    window.addEventListener('scroll', () => this.record('scrolls'));
    window.addEventListener('click', () => this.record('clicks'));
    window.addEventListener('keydown', () => this.record('keys'));
    chrome.tabs.onActivated.addListener(() => this.record('tabs'));
  }

  record(type) {
    const now = Date.now();
    this.buffer[type].push(now);
    // Clean old data
    this.buffer[type] = this.buffer[type].filter(t => now - t < this.windowSize);
  }

  getSnapshot() {
    return {
      scrollCount: this.buffer.scrolls.length,
      clickCount: this.buffer.clicks.length,
      keyCount: this.buffer.keys.length,
      tabSwitchCount: this.buffer.tabs.length
    };
  }
}