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
		console.log('a: ', accessToken);
		// console.log('r: ', refreshToken);
		// console.log('p: ', profile);
		// console.log('d: ', done);
		/*
		information stored
		{
			id integer,
			name string,
			gravatar_id string,
			avatar_url string,
			html_url string,
		}
		*/
		const user = await User.findOrCreate({
			id: profile._json.id, 
			name: profile._json.name,
			gravatar_id: profile._json.gravatar_id,
			avatar_url: profile._json.avatar_url,
			html_url: profile._json.html_url
		})
		console.log('github strat user: ', user)
		return done(null,user);
	}	
));

router.get('/github', (req, res, next) => {
	headers.push(req.get('Referrer'))
	console.log(headers, 'REQ')
	next();
}, passport.authenticate('github', { scope: ['(no scope)'] }));

router.get('/github/callback', 
	passport.authenticate('github', 
		{ 
			failureRedirect: 'http://localhost:5550' 
		}),
	// Successful authentication, redirect to the original page.
	function(req, res) {
		console.log('req.user: ', req)
		let redirectUrl = headers[1] + headers[0];
		// console.log('headers:', headers);
		// console.log(redirectUrl)
		clearHeaders();
		res.redirect(redirectUrl);
		// req.logIn(user, function(err) {
		// 	if (err) { return next(err); }
		// 	return res.redirect(redirectUrl)
		// })
});
module.exports = router;

