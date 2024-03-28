const express = require('express');
const { join } = require('path');

const app = express();

// app.get('/', (req, res) => {
//   res.sendFile('pic.bmp', {
//     root: join(__dirname, 'files'),
//   });
// });

app.get('/', (req, res) => {
  res
    .cookie('ciastko', 'czekoladowe')
    .send('Hello world!');
});

app.listen(3000);
