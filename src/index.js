export default class EventBus {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((callback) => {
      callback(...args);
    });
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      if (callback) {
        this.events[eventName] = this.events[eventName].filter(
          (callbackName) => callbackName !== callback
        );
      } else {
        delete this.events[eventName];
      }
    }
  }
}
