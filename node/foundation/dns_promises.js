const { lookup } = require('dns').promises;

(async () => {
  try {
    const data = await lookup('google.com');
    console.log(data);// eslint-disable-line no-console
  } catch (err) {
    console.log('something goes wrong: ', err);// eslint-disable-line no-console
  }
})();
