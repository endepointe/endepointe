const express = require('express');
const User = require('../db/auth/github/findOrCreate');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.use((req, res, next) => {
	const token = req.headers['authorization'];
	console.log("jwt key in /profile", process.env.JWT_KEY);
	jwt.verify(token, process.env.JWT_KEY, function(err, data) {
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
		// console.log('profile req: ', req)
	let user = await User.findById(req.user.id);
	console.log('/profile user: ', await user)
	res.status(200).send(user);
	// res.status(200).send({msg: 'hello'})
})

module.exports = router;