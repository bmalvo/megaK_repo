// Wersja z .promises i async/await

// const { readFile } = require('fs').promises;

// (async () => {
//   try {
//     const data = await readFile('./index.js', 'utf8');
//     console.log(data);// eslint-disable-line no-console
//   } catch (err) {
//     console.log('Oh no', err);// eslint-disable-line no-console
//   }
// })();

/**
 * Wersja z util.promisify
 *
 * const {readFile} = require('fs');
const {promisify} = require('util');

const readFilePromised = promisify(readFile);

readFilePromised('./index.js', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Oh no', error);
  });

 */

/**
 * Wersja z callback
 *
 * const {readFile} = require('fs');

readFile('./index.js', 'utf8', (error, data) => {
  if (error === null) {
    console.log(data);
  } else {
    console.log('On no!', error);
  }
});

 */

const { writeFile, readFile, appendFile } = require('fs').promises;

const message = 'Hello, World!\n';
const FILE_NAME = './data/hello.txt';

// (async () => {
//   try {
//     await writeFile('./data//hello.txt', message, { flag: 'a' });
//     console.log('file is saved'); // eslint-disable-line no-console
//   } catch (err) {
//     console.log('Operation failed: ', err); // eslint-disable-line no-console
//   }
// })();

(async () => {
  try {
    const numberFile = await readFile(FILE_NAME, 'utf8');
    console.log(numberFile);
    const arrayNumber = numberFile.toString().split('\n');
    console.log(arrayNumber);
    const lastNumber = arrayNumber[arrayNumber.length - 1];
    console.log(lastNumber);
    // const newNumber = (numberFile * 2).toString();
    await appendFile(FILE_NAME, `\n${lastNumber * 2}`, 'utf8');
    console.log('file is saved');
  } catch (err) {
    console.log('Operation failed: ', err); // eslint-disable-line no-console
  }
})();
