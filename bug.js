const http = require('http');

const server = http.createServer((req, res) => {
  // The error is here: Missing a call to res.end()
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // The response is never ended, leading to a hanging connection
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});