const { mkdir, rename } = require('fs').promises;

(async () => {
  await mkdir('./data/mega/submega', {
    recursive: true,
  });
})();

(async () => {
  try {
    await rename('./raname.txt', './ranamed.txt');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist.');
    } else {
      console.log('operation failed: ', err.code);
    }
  }
})();

(async () => {
  try {
    await rename('./ranamed.txt', './data/mega/submega/ranamed.txt');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist.');
    } else {
      console.log('operation failed: ', err.code);
    }
  }
})();
