const { lookup } = require('dns');
const { promisify } = require('util');

const promisifyLookup = promisify(lookup);

promisifyLookup('google.com')
  .then((data) => {
    console.log(data);// eslint-disable-line no-console
  })
  .catch((err) => {
    console.log('something goes wrong: ', err);// eslint-disable-line no-console
  });
