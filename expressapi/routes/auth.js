const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../db/auth/github/findOrCreate');

const JWT_KEY = 'allyourbasearebelongtous';
const headers = [];

function clearHeaders() {
	console.log('clear headers')
	headers.forEach((header) => {
		header = '';
	})
	headers.length = 0;
}

passport.use(new GitHubStrategy({
		clientID: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		callbackURL: 'http://localhost:5551/auth/github/callback'
	},
	async function(accessToken, refreshToken, profile, done) {
		console.log('in new githubstrategy')
		// console.log('a: ', accessToken);
		// console.log('r: ', refreshToken);
		// console.log('p: ', profile);
		// console.log('d: ', done);
		const user = await User.findOrCreate({githubid: profile.id})
		console.log('github strat user: ', user)
		return done(null,user);
	}	
));

router.get('/github', (req, res, next) => {
	headers.push(req.get('Referrer'))
	console.log(headers, 'REQ')
	next();
}, passport.authenticate('github', { scope: ['notifications'] }));

router.get('/github/callback', 
	passport.authenticate('github', 
		{ 
			failureRedirect: 'http://localhost:5550' 
		}),
	function(req, res) {
		let redirectUrl = headers[1] + headers[0];
		console.log('headers:', headers);
		console.log(redirectUrl)
		clearHeaders();
		// Successful authentication, redirect to the original page.
		res.redirect(redirectUrl);
		// res.redirect('http://localhost:5550');
});
module.exports = router;

