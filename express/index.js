const express = require('express');

const app = express();

app.get('/', () => {
  console.log('Display books list');
});

app.post('/', () => {
  console.log('add book');
});

app.listen(3000);
