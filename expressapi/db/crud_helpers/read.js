const db = require('../../db/init');

const allEntries = async () => {
	let response = await db.manyOrNone(`select * from blogpost`)
	return response;
}

const entry = async (id) => {
	let response = await db.oneOrNone(`select * from blogpost where id = ${id}`);
	return response;
}

module.exports = {
	allEntries: allEntries,
	entry: entry,
};