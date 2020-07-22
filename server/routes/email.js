const nodemailer = require('nodemailer');
const router = require('express').Router();

// setup email in a bit

router.post('/', async (req, res) => {

  let emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAILACCOUNT,
      pass: process.env.EMAILPASS,
    },
  });

  // https://github.com/nodemailer/nodemailer/issues/240
  // https://nodemailer.com/usage/using-gmail/
  let emailDetails = {
    from: req.body.email,
    to: process.env.EMAILACCOUNT,
    subject: req.body.subject,
    text: `\n\nFrom: ${req.body.name} <${req.body.email}>\n\nSubject: ${req.body.subject}\n\nMessage: ${req.body.message}\n\nData: ${req.body.data}`
  };

  emailTransporter.sendMail(emailDetails, (err, data) => {
    if (err) {
      // console.log(err, process.env.EMAILACCOUNT, process.env.EMAILPASS);
      res.status(500).send('Error sending email');
    } else {
      res.status(200).send('Email sent, thank you');
    }
  });
});

module.exports = router;