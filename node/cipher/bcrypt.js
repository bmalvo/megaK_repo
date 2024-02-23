const { hash } = require('bcrypt');

hash('text to hash', 10, (err, hash) => {
  if (err) {
    console.log(err);
  } else {
    console.log(hash);
  }
});
