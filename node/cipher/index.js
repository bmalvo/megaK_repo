const { promisify } = require('util');

const scrypt = promisify;
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

(async () => {
  const key = await scrypt(password, 'salt', 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update('some clear texxt data', 'utf8', 'hex');
  encrypted += cipher.final('hex');

  console.log({
    encrypted,
    iv: iv.toString('hex'),
  });
})();
