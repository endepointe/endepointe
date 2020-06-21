const router = require('express').Router();

router.post('/', async (req, res) => {
  const dataArray =
    [
      process.env.DATA1,
      process.env.DATA2,
      process.env.DATA3,
      process.env.DATA4,
    ];

  // res.status(200).send('something');
  res.status(200).send(dataArray[req.body.val]);
});

module.exports = router;