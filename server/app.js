const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const email = require('./routes/email');
const port = process.env.port || 3001;
var corsOptions = {
  origin: 'http://localhost:4001/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());

// middelware
app.use('/send-email', email);

// PRODUCTION //
///*
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
//*/

app.listen(port, () => console.log('server running'));