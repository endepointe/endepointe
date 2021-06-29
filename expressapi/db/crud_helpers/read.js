const db = require('../../db/init');

const allEntries = async () => {
	let response = await db.manyOrNone(`select * from blogpost`)
	return response;
}

const allIds = async () => {
	let response = await  db.manyOrNone('select id from blogpost where id > 0')
	return response;
}

const entry = async (id) => {
	let response = await db.oneOrNone(`select * from blogpost where id = ${id}`);
	return response;
}

module.exports = {
	allEntries: allEntries,
	allIds: allIds,
	entry: entry,
};