const http = require('http');

const PORT = 5000;

const authors = ["David Flanagan", "Kyle Simpson", "John Resig", "Jeremi Keith"];

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/authors') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(authors));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
