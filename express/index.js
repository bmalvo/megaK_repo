const express = require('express');
const { URLSearchParams } = require('url');

function generateQueryString(params) {
  const qs = new URLSearchParams(params);
  return `${qs}`.replace(/\+/g, '%20');
}

console.log(`http://localhost:3000/?${generateQueryString({
  name: 'Bartek & Kuba',
})}`);

const app = express();

app.get('/', (req) => {
  console.log(req.hostname);
  console.log(req.ip);
  console.log(req.method);
  console.log(req.url);
  console.log(req.originalUrl);
  console.log(req.path);
  console.log(req.protocol);
  console.log(req.secure);
  console.log('Display books list');
});

app.post('/', () => {
  console.log('add book');
});

app.listen(3000);
