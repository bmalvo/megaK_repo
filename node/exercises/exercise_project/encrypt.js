const { readFile, writeFile } = require('fs').promises;
const { encryptText, hash } = require('C:/Users/boydm/dev/megaK_repo/node/cipher/cipher');
const { SALT, HASH_SALT } = require('./constants');

// const SALT = 'abcABC123!@#';
const [, , fileName, pwd] = process.argv;

(async () => {
  const content = await readFile(fileName, 'utf8');
  const contentHash = hash(content, HASH_SALT);
  const encrypted = await encryptText(content, pwd, SALT);
  encrypted.hash = contentHash;
  await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
  console.log('Done');
})();
