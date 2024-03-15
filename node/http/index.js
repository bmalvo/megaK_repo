const { createServer } = require('http');
const { readFile } = require('fs').promises;

// createServer((req, res) => {
//   console.log(req, res);
//   res.writeHead(200, {
//     'Content-type': 'text/html',
//   });
//   res.end('<h1>Hello from MegaK</h1>');
// }).listen(3000, '127.0.0.1');

const server = createServer();

server.on('request', async (req, res) => {
  const html = await readFile('./index.html', 'utf8');
  res.writeHead(200, {
    'Content-type': 'text/html',
  });
  res.end(html);
});
server.listen(3000, 'localhost');
