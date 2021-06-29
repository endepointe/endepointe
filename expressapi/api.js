require('dotenv').config();
const express = require('express');
const blogRoute = require('./routes/blog/blogs');
const auth = require('./routes/auth');
const cors = require('cors');
const passport = require('passport');
const app = express();

const corsOptions = {
	origin: 'http://localhost:5550',
};

app.use(passport.initialize());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/blogs', blogRoute);
app.use('/auth', auth);

passport.serializeUser(function(user, cb) {
	cb(null, user);
})

app.get('/', function(req, res, next) {
	res.json({msg: 'i am root'})
	next();
})

app.listen(5551, function() {
	console.log('expressapi server listening on port 5551')
})