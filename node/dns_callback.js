const { lookup } = require('dns');

lookup('google.com', (err, data) => {
  if (err === null) {
    console.log(data);// eslint-disable-line no-console
  } else {
    console.log('something goes wrong: ', err);// eslint-disable-line no-console
  }
});
