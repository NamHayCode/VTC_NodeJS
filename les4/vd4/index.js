const express = require('express');
const app = express();
const port = 3000;

// Sử dụng app.route() để tạo các route handlers
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update the book');
  });

// Tải module router birds
const birds = require('./birds');

// Sử dụng router birds
app.use('/birds', birds);

// Bắt đầu máy chủ
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
