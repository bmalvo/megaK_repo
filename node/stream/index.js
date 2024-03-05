const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;

(async () => {
  await pipeline(
    createReadStream('michal1.jpg'),
    createWriteStream('michal2.jpg'),
  );
  console.log('Done! ');
})();
