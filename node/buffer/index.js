const buff = Buffer.alloc(20);

buff.write('Patryk', 'utf8');

console.log(buff);
console.log(buff.toString('hex'));
console.log(buff.toString('utf8'));

console.log(Buffer.byteLength('ś', 'utf8'));
console.log(Buffer.byteLength('💪', 'utf8'));

const buff2 = Buffer.from('testing text ąść');
console.log(buff2.toString('utf8'));
console.log(buff2.length);
