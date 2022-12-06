/* The server function checks the request URL and serves the HTML for the website when the URL is /, and serves the image file when the URL is /logo-classicblue-800px.png. To serve the image file, the code uses the fs.createReadStream() method to create a readable stream for the image file, and then pipes the data from the stream to the response using the res.pipe() method.

To use this code, you will need to have an image file named logo-classicblue-800px.png in the same directory as the server.js file. You can then run the code using the node command and visit the website in your web browser, as before. The image from the local file should be displayed at the center of the page.

How to install node using NVM on Ubuntu 
https://github.com/nvm-sh/nvm#install--update-script

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
nvm list-remote
nvm install v14.10.0
nvm

Colors
#275bb0 Blue
#27badb light blue


*/

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Serve the HTML for the website
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!doctype html>
      <html>
        <head>
          <title>My Website</title>
          <style>
          body {
            background-color: white;
          }
          p {
            font-size: 32px;
            color: #275bb0;
            font-weight: bold;
          }
        </style>
        </head>
        <body>
          <div style="text-align: center">
            <img src="/logo-classicblue-800px.png" alt="My Image">
            <p>Welcome to the Intel Cloud Optimization Modules for Terraform demo</p>
          </div>
        </body>
      </html>
    `);
  }

  // Serve the image file
  if (req.url === '/logo-classicblue-800px.png') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    fs.createReadStream('logo-classicblue-800px.png').pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
