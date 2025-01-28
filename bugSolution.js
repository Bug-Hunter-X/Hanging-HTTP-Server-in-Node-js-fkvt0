const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!'); // The solution is here: Added res.end() to properly close the response
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});