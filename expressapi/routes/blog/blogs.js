const express = require('express');
const read = require('../../db/crud_helpers/read')
const router = express.Router();

// /blogs/all
router.get('/all', async (req, res) => {
	let entries = await read.allEntries();
	res.json({entries});
});

// /blogs/one
router.get('/one', (req, res) => {
	res.json({msg: 'get one blog'});
});

// /blogs/:id
router.get('/:id', async (req, res) => {
	console.log(req.params.id)
	let entry = await read.entry(req.params.id)
	res.status(200).json({entry});
});

module.exports = router;