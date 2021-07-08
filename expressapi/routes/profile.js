const express = require('express');
const GithubUser = require('../db/auth/github/findOrCreate');
const GoogleUser = require('../db/auth/google/findOrCreate');
const router = express.Router();
const jwt = require('jsonwebtoken')
const {getKey} = require('../globals');

router.use((req, res, next) => {
	const token = req.headers['authorization'];
	console.log("jwt key in /profile", getKey());
	jwt.verify(token, getKey(), function(err, data) {
		if (err) {
			res.status(401).send({error: 'Not Authorized'});
		} else {
			console.log('jwt verified: ', data )
			req.user = data;
			next();
		}
	})
})

router.get('/', async (req, res) => {
		console.log('profile req.user: ', req.user)
		let user;
		switch (req.user.provider) {
			case 'github':
				user = await GithubUser.findById(req.user.id);
				console.log('/profile user: ', await user)
				res.status(200).send(user);
			break;
			case 'google':
				user = await GoogleUser.findById(req.user.id);
				console.log('/profile user: ', await user)
				res.status(200).send(user);
			break;
			default:
				res.status(401).send({msg: 'something went wrong with user'})
			break;
		}
});

module.exports = router;