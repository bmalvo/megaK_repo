/* Przyjmuj w lini komend has, np:
node index.js mojeHaslo
Sprawdź, czy hasło to 'megakurs' i tylko jeżeli tak to wyświetl w konsoli 'Logged in'.
Zrób to ćwiczenie tak, aby osoba postronna przeglądająckod nie dowiedziała się jakie jest hasło. */
const { pbkdf2 } = require('crypto');

const SALT = '12seSE@#';
const GOOD_PASSWORD = 'c49ebaf9a2ea40863168f3bc574a871982364483e202623f11b39d4316ceae9ea100454897875a054100f43c7699c604276e4286ab84ef83bc4f92fe830ae99b';

const pwd = process.argv[2];

pbkdf2(pwd, SALT, 1000, 64, 'sha512', (err, hash) => {
  if (err) {
    console.log(err);
  } else if (hash.toString('hex') === GOOD_PASSWORD) {
    console.log('Logged in');
  }
});
