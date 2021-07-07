const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const GithubUser = require('../../db/auth/github/findOrCreate');
const headers = [];
const {getKey, setKey} = require('../../globals');

function clearHeaders() {
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
		console.log('p: ', profile);
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
		console.log('provider: ', profile.provider)
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
		
		setKey(req.query.code);

		console.log('set jwt key: ', getKey()); 
		const token = jwt.sign({id: req.user.id}, getKey(), {expiresIn: 60*60*24*1000});

		res.status(201).cookie(
					'authorization', token, 
					{sameSite: 'Lax'},
					{expires: new Date(Date.now() + 90000)}
				)
				// .redirect(redirectUrl);
				.redirect('http://localhost:5550/blogs/reply');
});
module.exports = router;

