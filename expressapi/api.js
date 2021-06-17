const express = require('express');
const cors = require('cors');
const app = express();

// configure cors options for production
//https://github.com/expressjs/cors#configuration-options
const allowList = ['http://localhost/'];

const corsOptionsDelegate = function(req, cb) {
	let corsOptions;
	if (allowList.indexOf(req.header('Origin')) !== -1) {
		corsOptions = { origin: true }// enable the requested origin 
	} else {
		corsOptions = { origin: false } // disable cors for this request
	}
	cb(null, corsOptions); // cb expects two params: err and opt
}

// middleware still works for unqualified origins. need to learn why
// it still does that and how to fix it. For now, get the blogs
// and continue on.
app.get('/blogs/all', cors(corsOptionsDelegate), function(req, res, next) {
	res.json({msg: 'this is a cors anable for an allow domain'});
})

app.listen(6661, function() {
	console.log('expressapi server listening on port 6661')
})