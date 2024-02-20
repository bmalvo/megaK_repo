const { stdout } = require('process');
const { promisify } = require('util');

const exec = promisify(require('child_process').exec);

// exec('dir')
//   .then(({ stdout, stderr }) => {
//     console.log(stderr);
//     console.log('---');
//     console.log(stdout);
//   });

(async () => {
  try {
    const ip = process.argv[2].replace(/[^0-9.]+/g, '');
    const data = await exec(`ping ${ip}`);
    console.log(data.stdout);
  } catch (er) {
    console.error('error ocured: ', er);
  }
})();
