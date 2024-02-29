const { encryptText, decryptText } = require('./cipher');

const SALT = 'abcABC123!@#';

(async () => {
  const encrypted = await encryptText('Zażółć gęślą jaźń', 'haslo', SALT);

  console.log(encrypted);

  const decrypted = await decryptText(encrypted.encrypted, 'haslo', SALT, encrypted.iv);

  console.log(decrypted);
})();
