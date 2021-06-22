const db = require('../../db/init');

const allEntries = async () => {
	let response = await db.manyOrNone(`select * from blogpost`)
	console.log(response)
	return response;
}

module.exports = {
	allEntries: allEntries,
};