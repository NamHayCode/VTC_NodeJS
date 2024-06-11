const express = require('express');
const router = express.Router();

// Middleware chỉ dành cho router này
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Định nghĩa route cho trang chủ
router.get('/', (req, res) => {
  res.send('Birds home page');
});

// Định nghĩa route cho trang about
router.get('/about', (req, res) => {
  res.send('About birds');
});

module.exports = router;
