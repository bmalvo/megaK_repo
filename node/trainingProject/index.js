const { watch } = require('chokidar');
const { join } = require('path');
const { readFile } = require('fs').promises;

const userPath = join(__dirname, process.argv[2]);
const readUserFile = (async (path) => {
  try {
    const result = await readFile(path, 'utf8');
    console.log(result);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('file is not valid!');
    } else {
      console.log('unknown error!', err);
    }
  }
});

watch(userPath, {
  awaitWriteFinish: true,
})
  .on('unlink', (path) => console.log(`File ${path} has been removed`))
  .on('add', (path) => {
    console.log(`File ${path} has been added`);
    readUserFile(path);
  })
  .on('change', (path) => {
    console.log(`File ${path} has been changed`);
    readUserFile(path);
  });
