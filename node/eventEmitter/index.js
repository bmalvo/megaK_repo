const { tickTock } = require('./tik-tok');

const events = tickTock();

console.log(events);

events
  .on('secondElapsed', (data) => {
    console.log('1sec!', data);
  })
  .on('fiveSecondsElapsed', () => {
    console.log('5sec!');
  })
  .once('secondElapsed', (data) => {
    console.log('start!', data);
  });
