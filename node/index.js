// Wersja z .promises i async/await

const { readFile } = require('fs').promises;

(async () => {
  try {
    const data = await readFile('./index.js', 'utf8');
    console.log(data);// eslint-disable-line no-console
  } catch (err) {
    console.log('Oh no', err);// eslint-disable-line no-console
  }
})();

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
