const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleUser = require('../../db/auth/google/findOrCreate');
const {getKey, setKey} = require('../../globals');

passport.use(new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: 'http://localhost:5551/auth/google/callback'
	},
	async function(accessToken, refreshToken, profile, done) {
		console.log('in new googletrategy')
		// console.log('access: ', accessToken);
		// console.log('refresh: ', refreshToken);
		console.log('p: ', profile);
		// console.log('d: ', done);
		/*
		information stored
		{
			id integer,
			name string,
			avatar_url string,
			provider string,
		}
		*/
		console.log('provider: ', profile.provider)
		let user = null;
		switch (profile.provider) {
			case 'google':
				user = await GoogleUser.findOrCreate({
					id: profile._json.sub, 
					name: profile._json.name,
					avatar_url: profile._json.picture,
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

router.get('/google', (req, res, next) => {
	// headers.push(req.get('Referrer'))
	// console.log(headers, 'REQ')
	next();
}, passport.authenticate('google', { 
	scope: ['https://www.googleapis.com/auth/plus.login'] 
}));

router.get('/google/callback', 
	passport.authenticate('google', 
		// dont forget to make a fallback url for the user should anything
		// go wrong during auth request.
		{ 
			failureRedirect: 'http://localhost:5550' 
		}),
	// Successful authentication, redirect to the original page.
	function(req, res) {
		// console.log("req.query.code: ", req.query.code);
		// console.log('req.user: ', req.user);
		setKey(req.query.code);
		// console.log('google req in callback: ', req);
		console.log('set jwt key: ', getKey()); 

		const token = jwt.sign({
			id: req.user.id, 
			provider: req.user.provider
		}, getKey(), {expiresIn: 60*60*24*1000});

		res.status(201).cookie(
					'authorization', token, 
					{sameSite: 'Lax'},
					{expires: new Date(Date.now() + 90000)}
				)
				.redirect('http://localhost:5550/blogs/reply');
});

module.exports = router;

