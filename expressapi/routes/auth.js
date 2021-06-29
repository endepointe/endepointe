const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const user = require('../db/auth/github/findOrCreate');

const JWT_KEY = 'allyourbasearebelongtous';

passport.use(new GitHubStrategy({
		clientID: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		callbackURL: 'http://localhost:5551/auth/github/callback'
	},
	async function(accessToken, refreshToken, profile, done) {
		console.log('in new githubstrategy')
		// console.log('a: ', accessToken, '\nr: ', refreshToken, '\np: ', profile, '\nd: ', done);
		user.findOrCreate({githubId: profile.id}, function(err, u) {
			return done(err, u);
		})
	}	
));

router.get('/github', (req, res, next) => {
	console.log('redirect to: ', req.query);
	const {redirectTo} = req.query;
	const state = JSON.stringify({redirectTo});
	const authenticator = passport.authenticate('github', {scope: [], state, session: true});
	authenticator(req, res, next);
}, (req, res, next) => {
	next();
});

router.get('/github/callback', passport.authenticate('github', {
	failureRedirect: '/blogs'
}), (req, res, next) => {
	const token = jwt.sign({id: req.user.id}, JWT_KEY, {expiresIn: 60*60*24*1000});
	req.logIn(req.user, function(err) {
		if (err) return next(err);
		console.log('token: ',token)
		res.redirect(`http://localhost:5550/blogs/`)
	})
})

module.exports = router;