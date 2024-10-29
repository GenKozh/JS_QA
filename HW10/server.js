const http = require('http');
const os = require('os');
const path = require('path');

// Server configuration
const PORT = 5000;

http.createServer((req, res) => {
  // Gather system information
  const userName = os.userInfo().username;
  const osType = os.type();
  const uptimeMinutes = (os.uptime() / 60).toFixed(2); // Convert seconds to minutes
  const currentDir = process.cwd();
  const serverFileName = path.basename(__filename);

  // Construct the HTML content
  const responseContent = `
    <html>
      <head>
        <title>System Information</title>
      </head>
      <body>
        <h1>System Information</h1>
        <p><strong>Current user name:</strong> ${userName}</p>
        <p><strong>OS type:</strong> ${osType}</p>
        <p><strong>System work time:</strong> ${uptimeMinutes} minutes</p>
        <p><strong>Current work directory:</strong> ${currentDir}</p>
        <p><strong>Server file name:</strong> ${serverFileName}</p>
      </body>
    </html>
  `;

  // Send response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(responseContent);
}).listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
