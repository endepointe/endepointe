const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const GithubUser = require('../../db/auth/github/findOrCreate');
const {getKey, setKey} = require('../../globals');
const {clearHeaders} = require('../../lib/clearHeaders')
const headers = [];

passport.use(new GitHubStrategy({
		clientID: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		callbackURL: 'http://localhost:5551/auth/github/callback'
	},
	async function(accessToken, refreshToken, profile, done) {
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
		let user = null;
		switch (profile.provider) {
			case 'github':
				user = await GithubUser.findOrCreate({
					id: profile._json.id, 
					name: profile._json.name,
					gravatar_id: profile._json.gravatar_id,
					avatar_url: profile._json.avatar_url,
					html_url: profile._json.html_url,
					provider: profile.provider
				});
			break;
			default:
				user = null;
			break;
		}

		// handle InternalOAuthError
		return done(null,user);
	}	
));

router.get('/github', (req, res, next) => {
	headers.push(req.get('Referrer'))
	next();
}, passport.authenticate('github', { scope: [] }));

router.get('/github/callback', 
	passport.authenticate('github', 
		{ 
			failureRedirect: 'http://localhost:5550' 
		}),
	// Successful authentication, redirect to the original page.
	function(req, res) {
		let redirectUrl = headers[1] + headers[0];
		clearHeaders(headers);
		
		setKey(req.query.code);

		// 12 hour expriation token and cookie
		const token = jwt.sign({
			id: req.user.id,
			provider: req.user.provider
		}, getKey(), {expiresIn: 43200000});

		res.status(201).cookie(
					'authorization', token, 
					{sameSite: 'Lax'},
					{expires: new Date(Date.now() + 43200000)}
				)
				.redirect(redirectUrl);
});
module.exports = router;

