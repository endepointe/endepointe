const pgp = require('pg-promise')();

const cn = {
	host: process.env.EP_HOSTNAME,
	port: 5432,
	database: process.env.EP_DATABASE,
	user: process.env.EP_USERNAME,
	password: process.env.EP_PASSWORD,
	ssl: {rejectUnauthorized: false},
	max: 10
};

const db = pgp(cn);

module.exports = db;