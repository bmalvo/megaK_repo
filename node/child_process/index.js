const { exec } = require('child_process');
// const { stdout } = require('process');

exec('node test.js', (err, stdout, stderr) => {
  if (err) {
    console.log('Error ocured: ', err);
  } else if (stderr) {
    console.log('Error in app!', stderr);
  } else {
    console.log('program has finished!', stdout);
  }
});
