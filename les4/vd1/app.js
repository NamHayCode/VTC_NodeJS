const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
}, (req, res) => {
  res.send('Secret section accessed');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/random.text', (req, res) => {
  res.send('random.text');
});

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd');
});

app.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
});

app.get('/ab*cd', (req, res) => {
  res.send('ab*cd');
});

app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e');
});

app.get(/a/, (req, res) => {
  res.send('/a/');
});

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});

app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
});

app.get('/plantae/:genus.:species', (req, res) => {
  res.send(req.params);
});

app.get('/user/:userId(\\d+)', (req, res) => {
  res.send(req.params);
});

// Define a route to handle patterns like /32+22
app.get('/:num1\\+:num2', (req, res) => {
  const { num1, num2 } = req.params;
  res.send(`Parameters: ${num1}, ${num2}`);
});

// Define the port number
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
