const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const TwitterUser = require('../../db/auth/twitter/findOrCreate');
const {getKey, setKey} = require('../../globals');
const {clearHeaders} = require('../../lib/clearHeaders');
const headers = [];

passport.use(new TwitterStrategy({
		consumerKey: process.env.TWITTER_CLIENT_ID,
		consumerSecret: process.env.TWITTER_CLIENT_SECRET,
		callbackURL: 'http://localhost:5551/auth/twitter/callback'
	},
	async function(token, tokenSecret, profile, done) {
		/*
		information stored
		{
			id string,
			username string,
			avatar_url string,
			provider string,
		}
		*/
		let user = null;
		switch (profile.provider) {
			case 'twitter':
				user = await TwitterUser.findOrCreate({
					id: profile._json.id_str, 
					name: profile._json.screen_name,
					avatar_url: profile._json.profile_image_url,
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

router.get('/twitter', (req, res, next) => {
	headers.push(req.get('Referrer'))
	next();
}, passport.authenticate('twitter'));

router.get('/twitter/callback', 
	passport.authenticate('twitter', 
		// dont forget to make a fallback url for the user should anything
		// go wrong during auth request.
		{ 
			failureRedirect: 'http://localhost:5550' 
		}),
	// Successful authentication, redirect to the original page.
	function(req, res) {
		let redirectUrl = headers[1] + headers[0];
		clearHeaders(headers);
		setKey(req.query.oauth_token);
		const token = jwt.sign({
			id: req.user.id, 
			provider: req.user.provider
		}, getKey(), {expiresIn: 60*60*24*1000});
		res.status(201).cookie(
					'authorization', token, 
					{sameSite: 'Lax'},
					{expires: new Date(Date.now() + 90000)}
				)
				.redirect(redirectUrl);
				// .redirect('http://localhost:5550/blogs/reply');
});

module.exports = router;

