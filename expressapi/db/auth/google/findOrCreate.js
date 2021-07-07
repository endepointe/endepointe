const db = require('../../init');

const findOrCreate = async (data) => {
	try {
		const userres = await db.oneOrNone('select * from googleusers where id = $1', [data.id]);
		const user = await userres;
		console.log('findOrCreate user: ', user);
		if (user === null || !user) {
			const newuserres = await db.one('insert into googleusers(id,name,gravatar_id,avatar_url,html_url) values($1,$2,$3,$4,$5) returning id', [data.id, data.name, data.gravatar_id, data.avatar_url, data.html_url]);
			const newUser = await newuserres;
			console.log('findOrCreate newUser: ', newUser);
			return newUser;
		}
		return user;
	} catch (err) {
		console.error(err);
		return null; 
	}
}

const findById = async (id) => {
	console.log(id)
	const res = await db.oneOrNone('select * from googleusers where id = $1', [id]);
	const user = await res;
	console.log('findbyid: ', user)
	return user;
}

module.exports = {
	findOrCreate: findOrCreate,
	findById: findById
}