const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.port || 4001;

app.use(cors());
app.use(express.json());

// middelware
// app.use('/api/user', auth);
// app.use('/api/vote', voteRoute);

// PRODUCTION //
///*
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
//*/

app.listen(port, () => console.log('server running'));