const express = require('express');
const cors = require('cors');

// const blogs = require('./middleware/get-blogs');
const fs = require('fs');
const path = require('path');
const dir = path.normalize(__dirname + "/");

const app = express();
app.use(cors());

// configure cors options for production
//https://github.com/expressjs/cors#configuration-options
// const allowList = ['http://localhost/'];

// const corsOptionsDelegate = function(req, cb) {
// 	let corsOptions;
// 	if (allowList.indexOf(req.header('Origin')) !== -1) {
// 		corsOptions = { origin: true }// enable the requested origin 
// 	} else {
// 		corsOptions = { origin: false } // disable cors for this request
// 	}
// 	cb(null, corsOptions); // cb expects two params: err and opt
// }


// WORKING ON THIS
// app.get('/blogs/all', function(req, res, next) {
// 	const readStream = fs.createReadStream(dir + "blogs.json");
// 	let content = '';
// 	readStream.on('data', data => {
// 		content += data.toString();
// 	});
// 	readStream.on('end', () => {
// 		res.json(JSON.stringify(content));
// 	});
// 	readStream.on('error', (err) => {
// 		console.error(err);
// 		res.status(400).send(err);
// 	});
// })

app.get('/blogs/all', function(req, res, next) {
	res.json({msg: 'probably need to setup the blog mngmnt app and db'})
})
// END WORKING IN THIS

app.listen(6661, function() {
	console.log('expressapi server listening on port 6661')
})