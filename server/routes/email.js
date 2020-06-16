const nodemailer = require('nodemailer');
const pass = require('../emailCredentials');
const router = require('express').Router();

// setup email in a bit

router.post('/', async (req, res) => {
  console.log(pass.EMAILPASS, 'ul');
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'endepointe@gmail.com',
      pass: pass.EMAILPASS,
      subject: 'test'
    }
  })
  res.send('reached email')
});

module.exports = router;