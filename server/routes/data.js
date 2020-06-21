const router = require('express').Router();

router.post('/', (req, res) => {
  console.log(req.body.val);
  const dataArray =
    [
      process.env.DATA1,
      process.env.DATA2,
      process.env.DATA3,
      process.env.DATA4,
      process.env.DATA5,
      process.env.DATA6
    ];

  res.status(200).send(dataArray[req.body.val]);
});

module.exports = router;