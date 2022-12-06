/* In this updated version, the server function uses the pg.Pool class to create a connection pool for the database. The server function then connects to the database using the pool.connect() method and queries the users table using the client.query() method. The query result is used to build the HTML for the website, which includes a table displaying the data from the users table.

*/

const http = require('http');
const fs = require('fs');
const pg = require('pg');

const hostname = '127.0.0.1';
const port = 3000;

const dbConfig = {
  user: 'myuser',
  password: 'mypassword',
  host: 'localhost',
  port: 5432,
  database: 'mydatabase'
};

const pool = new pg.Pool(dbConfig);

const server = http.createServer(async (req, res) => {
  // Serve the HTML for the website
  if (req.url === '/') {
    // Connect to the database
    const client = await pool.connect();

    try {
      // Query the database
      const result = await client.query('SELECT * FROM users');

      // Build the HTML for the website
      let html = `
        <!doctype html>
        <html>
          <head>
            <title>My Website</title>
          </head>
          <body>
            <div style="text-align: center">
              <img src="/image.jpg" alt="My Image">
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
      `;

      // Add the query result to the HTML
      for (let row of result.rows) {
        html += `
          <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.email}</td>
          </tr>
        `;
      }

      html += `
              </tbody>
            </table>
          </body>
        </html>
      `;

      // Send the HTML to the client
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    } finally {
      // Close the database connection
      client.release();
    }
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
