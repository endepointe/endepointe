const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../db/auth/github/findOrCreate');

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
		console.log('access: ', accessToken);
		console.log('refresh: ', refreshToken);
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
		// handle InternalOAuthError
		return done(null,user);
	}	
));

router.get('/github', (req, res, next) => {
	headers.push(req.get('Referrer'))
	// console.log(headers, 'REQ')
	next();
}, passport.authenticate('github', { scope: [] }));

router.get('/github/callback', 
	passport.authenticate('github', 
		// dont forget to make a fallback url for the user should anything
		// go wrong during auth request.
		{ 
			failureRedirect: 'http://localhost:5550' 
		}),
	// Successful authentication, redirect to the original page.
	function(req, res) {
		let redirectUrl = headers[1] + headers[0];
		clearHeaders();
		console.log("req.query.code: ", req.query.code);
		console.log('req.user: ', req.user);
		// console.log("res: ", res);
		process.env.JWT_KEY = req.query.code;
		console.log('set jwt key: ', process.env.JWT_KEY);
		const token = jwt.sign({id: req.user.id}, process.env.JWT_KEY, {expiresIn: 60*60*24*1000});
		res.status(201).cookie(
					'gat', token, 
					{sameSite: 'Lax'},
					{expires: new Date(Date.now() + 90000)}
				)
				// .redirect(redirectUrl);
				.redirect('http://localhost:5550/blogs/reply');
});
module.exports = router;

