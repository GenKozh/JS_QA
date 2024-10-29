const http = require('http');
const os = require('os');
const personalModule = require('./personalmodule');

const PORT = 5000;

http.createServer((req, res) => {
  const userName = os.userInfo().username;
  const currentDate = new Date();
  const greetingMessage = personalModule.getGreetingMessage(userName);

  // Construct the HTML response content
  const responseContent = `
    <html>
      <head>
        <title>Greeting Page</title>
      </head>
      <body>
        <p><strong>Date of request:</strong> ${currentDate}</p>
        <p>${greetingMessage}</p>
      </body>
    </html>
  `;

  // Send the response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(responseContent);
}).listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
