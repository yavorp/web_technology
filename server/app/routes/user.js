const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  console.log('user');
  res.send('User string');
});

module.exports.router = router;
