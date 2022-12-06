/* The res.end() method is called with a string containing the HTML for the website. This HTML includes an img element that displays the image at the center of the page using the div element's text-align: center style.


https://github.com/nvm-sh/nvm#install--update-script

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
nvm list-remote
nvm install v14.10.0
nvm list

*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!doctype html>
    <html>
      <head>
        <title>My Website</title>
      </head>
      <body>
        <div style="text-align: center">
          <img src="https://i.imgur.com/dJH0jgr.jpg" alt="My Image">
        </div>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
