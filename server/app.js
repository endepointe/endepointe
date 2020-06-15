const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const email = require('./routes/email');
const port = process.env.port || 3001;

app.use(cors());
app.use(express.json());

// middelware
//app.use('/send-email', email);

// PRODUCTION //
///*
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
//*/

app.listen(port, () => console.log('server running'));