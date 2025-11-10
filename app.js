const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const podName = os.hostname();
  res.send(`
    <html>
      <head>
        <title>Simple Node App</title>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
        <p>This is served by pod: <strong>${podName}</strong></p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
