const express = require('express');

const app = express();
const port = 4000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Twitter route
app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom');
});
gi
// Login route
app.get('/login', (req, res) => {
  res.send('<h1>Please login at Chai and Code</h1>');
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
