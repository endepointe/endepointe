const express = require('express');
const GithubUser = require('../db/auth/github/findOrCreate');
const GoogleUser = require('../db/auth/google/findOrCreate');
const TwitterUser = require('../db/auth/twitter/findOrCreate');
const router = express.Router();
const jwt = require('jsonwebtoken')
const {getKey} = require('../globals');

// current issue is that there is no header on the first auth attempt
router.use((req, res, next) => {
	console.log('req.headers: ', req.headers);
	const token = req.headers['authorization'];
	console.log('token: ', token);
	console.log('jwt key: ', getKey());
	jwt.verify(token, getKey(), function(err, data) {
		console.error('token err: ', err);
		console.log('jwt data: ', data);
		if (err) {
			res.status(401).send({token: token});
		} else {
			req.user = data;
			next();
		}
	})
})

router.get('/', async (req, res) => {
	let user;
	try {
		switch (req.user.provider) {
			case 'github':
				user = await GithubUser.findById(req.user.id);
				res.status(200).json(user);
			break;
			case 'google':
				user = await GoogleUser.findById(req.user.id);
				res.status(200).send(user);
			break;
			case 'twitter':
				user = await TwitterUser.findById(req.user.id);
				res.status(200).send(user);
			break;
			default:
				res.status(401).send({msg: 'something went wrong with user'})
			break;
		}
	} catch(err) {
		console.error('/profile.error: ',err.name, err.message, err.lineNumber);
		res.status(501).send({msg: 'handling error'});
	}
});

module.exports = router;