const { readdir, readFile, stat } = require('fs').promises;

const FILE_NAME = './task_modul_dns.txt';

(async () => {
  try {
    const result = await readFile(FILE_NAME, 'utf8');
    console.log(result);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('file is not valid!');
    } else {
      console.log('unknown error!', err);
    }
  }
})();
