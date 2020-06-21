const nodemailer = require('nodemailer');
const router = require('express').Router();

// setup email in a bit

router.post('/', async (req, res) => {

  let emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAILACCOUNT,
      pass: process.env.EMAILPASS,
    }
  });

  // https://github.com/nodemailer/nodemailer/issues/240
  // https://nodemailer.com/usage/using-gmail/
  let emailDetails = {
    from: req.body.e,
    to: process.env.EMAILACCOUNT,
    subject: req.body.s,
    text: `\n\nFrom: ${req.body.n} <${req.body.e}>\n\nSubject: ${req.body.s}\n\nMessage: ${req.body.m}\n\nData: ${req.body.d}`
  };

  emailTransporter.sendMail(emailDetails, (err, data) => {
    if (err) {
      res.status(500).send('Error sending email')
    } else {
      res.status(200).send('Email sent, thank you');
    }
  });
});

module.exports = router;