require('dotenv').config();
const express = require('express');
const session = require('express-session');
const blogRoute = require('./routes/blog/blogs');
const github = require('./routes/auth/github');
const google =  require('./routes/auth/google');
const twitter = require('./routes/auth/twitter');
const cors = require('cors');
const passport = require('passport');
const app = express();
const GithubUser = require('./db/auth/github/findOrCreate');
const GoogleUser = require('./db/auth/google/findOrCreate');
const TwitterUser = require('./db/auth/twitter/findOrCreate');
const { getKey } = require('./globals');

const corsOptions = {
	origin: 'http://localhost:5550',
};

app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: 'allyourbasearebelongtous',	
}))
app.use(passport.initialize());
// app.use(passport.session());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/blogs', blogRoute);
app.use('/auth/', github);
app.use('/auth/', google);
app.use('/auth/', twitter);
app.use('/profile', require('./routes/profile'))

passport.serializeUser(function(user, cb) {
	console.log("user within serialize: ", user);
	cb(null, user);
});

passport.deserializeUser(async function(user, done) {
	let profile; 
	switch (user.provider) {
		case 'github':
			profile = await GithubUser.findById(user.id)
		break;
		case 'google':
			profile = await GoogleUser.findById(user.id);
		break;
		case 'twitter':
			profile = await TwitterUser.findById(user.id);
		break;
		default:
			profile = null;
		break;
	}
	console.log('deserialized profile: ', profile);
	return done(null, profile);
});

app.get('/', function(req, res, next) {
	res.json({msg: 'i am root'})
	next();
})

app.listen(5551, function() {
	console.log('expressapi server listening on port 5551')
})