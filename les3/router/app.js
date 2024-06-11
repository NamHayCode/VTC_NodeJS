const express = require('express');
const app = express();
const port = 3000;

// Respond to GET request at the root
app.get('/', (req, res) => {
  res.send('Hello World!( phan Router)');
});

// Respond to POST request at the root
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// Respond to PUT request at /user
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// Respond to DELETE request at /user
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
