require('dotenv').config();
const express = require('express');
const session = require('express-session');
const blogRoute = require('./routes/blog/blogs');
const auth = require('./routes/auth');
const cors = require('cors');
const passport = require('passport');
const app = express();
const User = require('./db/auth/github/findOrCreate')

const corsOptions = {
	origin: 'http://localhost:5550',
};

app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: 'allyourbasearebelongtous'
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/blogs', blogRoute);
app.use('/auth', auth);
app.use('/profile', require('./routes/profile'))

passport.serializeUser(function(user, cb) {
	console.log("user within serialize: ", user);
	cb(null, user.id);
});

passport.deserializeUser(async function(id, done) {
	const user = await User.findById(id);
	console.log('user in deserialize: ', user);
	return done(null, user);
})

app.get('/', function(req, res, next) {
	res.json({msg: 'i am root'})
	next();
})

app.listen(5551, function() {
	console.log('expressapi server listening on port 5551')
})