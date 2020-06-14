const nodemailer = require('nodemailer');
const router = require('express').Router();

// setup email in a bit

router.post('/', async (req, res) => {
  console.log(nodemailer);
  res.send('reached email')
});

module.exports = router;