/* In this updated version, the mysql module is imported at the top of the file using the require function, and a connection to the MySQL server is created using the mysql.createConnection() method. The user, password, and database options should be replaced with the appropriate values for your MySQL server.

To use this code, you will need to have the mysql module installed, as well as the image file image.jpg in the same directory as the server.js file. You can install the mysql module using the following command
npm install mysql

Once the mysql module is installed and the server.js file is in the correct location, you can run the code using the node command and visit the website in your web browser. The website should function the same as before, but now it is also connected to a MySQL database.

*/
const http = require('http');
const fs = require('fs');
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3000;

// Set up the MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database'
});

// Connect to the MySQL server
connection.connect();

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
        </head>
        <body>
          <div style="text-align: center">
            <img src="/image.jpg" alt="My Image">
          </div>
        </body>
      </html>
    `);
  }

  // Serve the image file
  if (req.url === '/image.jpg') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    fs.createReadStream('image.jpg').pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
