const http = require('http');

const PORT = 5000;

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/vote') {
    const dateStamp = new Date().toString();
    const responseMessage = `Your vote is accepted: ${dateStamp}`;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(responseMessage);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
