const { EventEmitter } = require('events');

class TickTock extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('secondElapsed', 'test');
    }, 1000);
    setInterval(() => {
      this.emit('fiveSecondsElapsed');
    }, 5000);
  }
}

module.exports = {
  TickTock,
};
