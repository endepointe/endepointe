require('dotenv').config();
const express = require('express');
const session = require('express-session');
const blogRoute = require('./routes/blog/blogs');
const github = require('./routes/auth/github');
const google =  require('./routes/auth/google');
const cors = require('cors');
const passport = require('passport');
const app = express();
const GithubUser = require('./db/auth/github/findOrCreate');
const GoogleUser = require('./db/auth/google/findOrCreate');

const corsOptions = {
	origin: 'http://localhost:5550',
};

// app.use(session({
// 	resave: false,
// 	saveUninitialized: false,
	
// }))
app.use(passport.initialize());
// app.use(passport.session());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/blogs', blogRoute);
app.use('/auth/', github);
app.use('/auth/', google);
app.use('/profile', require('./routes/profile'))

passport.serializeUser(function(user, cb) {
	console.log("user within serialize: ", user);
	cb(null, user);
});

passport.deserializeUser(async function(user, done) {
	console.log('deserialize user: ', user);
	/*
	const user = await User.findById(id);
	console.log('user in deserialize: ', user);
	return done(null, user);
	*/
	return done(null);
})

app.get('/', function(req, res, next) {
	res.json({msg: 'i am root'})
	next();
})

app.listen(5551, function() {
	console.log('expressapi server listening on port 5551')
})