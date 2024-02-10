const {
  basename, join, dirname, extname, normalize, resolve,
} = require('path');

console.log(__dirname);
console.log(basename(__filename));

const fullPath = join(__dirname, process.argv[2]);

console.log(fullPath);
console.log('dirname', dirname(__dirname));

const userPath = process.argv[2];

console.log('dirname: ', dirname(userPath));
console.log('basename: ', basename(userPath));
console.log('extname: ', extname(userPath));

// safe path

function safeJoin(base, target) {
  const targetPath = `.${normalize(`/${target}`)}`;
  return resolve(base, targetPath);
}
