const {
  basename, extname, join, resolve, normalize,
} = require('path');

const userPath = process.argv[2];
const fullPath = join(__dirname, userPath);

console.log(`full path -> ${fullPath}`);
console.log(`directory -> ${__dirname}`);
console.log(`file name -> ${basename(userPath)}`);
console.log(`file extension -> ${extname(userPath)}`);
console.log('---');

function safeJoin(base, target) {
  const targetPath = `.${normalize(`/${target}`)}`;
  return resolve(base, targetPath);
}

console.log(safeJoin(userPath, '../../../../../../../../Windows/System32/Drivers/etc/hosts'));
console.log(safeJoin(userPath, '~/Me.jpg'));
console.log(safeJoin(userPath, 'C:\\systeminfo'));
console.log(safeJoin(userPath, 'LPT1'));
