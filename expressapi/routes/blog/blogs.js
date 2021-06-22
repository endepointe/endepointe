const express = require('express');
const read = require('../../db/crud_helpers/read')
const router = express.Router();

router.get('/all', async (req, res) => {
	let entries = await read.allEntries();
	res.json({entries});
});


router.get('/one', (req, res) => {
	res.json({msg: 'get one blog'});
});

module.exports = router;