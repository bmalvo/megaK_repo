const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createGunzip } = require('zlib');

(async () => {
  await pipeline(
    createReadStream('json2.json'),
    createGunzip(),
    createWriteStream('json3.json'),
  );
  console.log('Done! '); // eslint-disable-line no-console
})();
