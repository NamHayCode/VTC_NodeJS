const express = require('express');
const app = express();
const port = 3000;

// Route với route parameters cơ bản
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});

// Route với hyphen và dot
app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
});

app.get('/plantae/:genus.:species', (req, res) => {
  res.send(req.params);
});

// Route với regular expression
app.get('/user/:userId(\\d+)', (req, res) => {
  res.send(req.params);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
