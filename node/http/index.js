const { createServer } = require('http');

// createServer((req, res) => {
//   console.log(req, res);
//   res.writeHead(200, {
//     'Content-type': 'text/html',
//   });
//   res.end('<h1>Hello from MegaK</h1>');
// }).listen(3000, '127.0.0.1');

const server = createServer();

server.on('request', (req, res) => {
  if (req.url === '/' && req.method === 'GET ') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Hello from MegaK</h1>');
  } else {
    res.writeHead(404, {
      'Content-tpe': 'text/html',
    });
    res.end('<h1>Not Found</h1>');
  }
});
server.listen(3000, 'localhost');
