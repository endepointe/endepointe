const db = require('../../init');

const findOrCreate = async (oauthdata) => {
	console.log('oauthdata: ', oauthdata)
	let id = oauthdata.githubid;
	try {
		const userres = await db.oneOrNone('select * from GithubUsers where oauthid = $1', [id]);
		const user = await userres;
		console.log('findOrCreate user: ', user);
		if (user === null || !user) {
			const newuserres = await db.one('insert into githubusers(oauthid) values($1) returning oauthid', [id])			
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
	const user = await db.oneOrNone(`select * from GithubUsers where oauthid = ${id};`)
	return user;
}

module.exports = {
	findOrCreate: findOrCreate,
	findById: findById
}