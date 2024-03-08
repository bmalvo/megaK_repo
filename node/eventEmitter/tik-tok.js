const { EventEmitter } = require('events');

function tickTock() {
  const ee = new EventEmitter();
  setInterval(() => {
    ee.emit('secondElapsed', 'test');
  }, 1000);
  setInterval(() => {
    ee.emit('fiveSecondsElapsed');
  }, 5000);
  return ee;
}

module.exports = {
  tickTock,
};
