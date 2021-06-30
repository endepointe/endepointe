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
		// console.log('a: ', accessToken);
		// console.log('r: ', refreshToken);
		console.log('p: ', profile.id);
		// console.log('d: ', done);
		let response = await user.findOrCreate({githubid: profile.id})
		console.log('user: ', response)
		return done(null);
	}	
));

router.get('/github', 
	passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback', 
	passport.authenticate('github', 
		{ 
			failureRedirect: 'http://localhost:5550' 
		}),
	function(req, res) {
		console.log('cb req: ', req)
		// Successful authentication, redirect home.
		res.redirect('http://localhost:5550/blogs');
});
module.exports = router;