const { readFile, writeFile } = require('fs').promises;
const { decryptText, hash } = require('../C:/Users/boydm/dev/megaK_repo/node/cipher/cipher');
const { SALT, HASH_SALT } = require('./constants');

const [, , fileName, pwd] = process.argv;

(async () => {
  const json = await readFile(fileName, 'utf8');
  const encrypted = JSON.parse(json);
  const decrypted = await decryptText(encrypted.encrypted, pwd, SALT, encrypted.iv);
  const decryptedHash = hash(decrypted, HASH_SALT);

  if (decryptedHash === encrypted.hash) {
    await writeFile(fileName, decrypted, 'utf8');
  } else {
    console.error('File is not original');
  }
})();
