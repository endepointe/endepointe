const express = require('express');
const GithubUser = require('../db/auth/github/findOrCreate');
const GoogleUser = require('../db/auth/google/findOrCreate');
const TwitterUser = require('../db/auth/twitter/findOrCreate');
const router = express.Router();
const jwt = require('jsonwebtoken')
const {getKey} = require('../globals');

router.use((req, res, next) => {
	const token = req.headers['authorization'];
	jwt.verify(token, getKey(), function(err, data) {
		if (err) {
			res.status(401).send({error: 'Not Authorized'});
		} else {
			req.user = data;
			next();
		}
	})
})

router.get('/', async (req, res) => {
		let user;
		switch (req.user.provider) {
			case 'github':
				user = await GithubUser.findById(req.user.id);
				res.status(200).send(user);
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
});

module.exports = router;