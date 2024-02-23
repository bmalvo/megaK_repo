const { pbkdf2 } = require('crypto');

const textToHash = 'password';
const salt = 'asdf#$%^ssanFFD';

pbkdf2(textToHash, salt, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));
});
