const http = require('http');

const server = http.createServer((req, res) => {
    // Routing
  if (req.method === 'GET' && req.url === '/') { // GET Request
    res.end("GET Request");
  } else if (req.method === 'POST' && req.url === '/') { // POST Request
    res.end("POST Request");
  } else if (req.method === 'PATCH' && req.url === '/users') { // PATCH Request
    res.end("PATCH Request");
  } 
});

server.listen(3000, "127.0.0.1", (req, res) => {
    console.log('Server is running on port 3000: http://127.0.0.1:3000');
});