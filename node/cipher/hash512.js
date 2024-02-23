const { createHmac } = require('crypto');

const salt = 'ADM@o2amdmdoiqiao dfa2d /... .';
const hash = createHmac('sha512', salt)
  .update('text to hash')
  .digest('hex');

console.log(hash);
