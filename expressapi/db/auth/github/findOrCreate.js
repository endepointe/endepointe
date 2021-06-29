const db = require('../../init');

const findOrCreate = async (oauthdata) => {
	console.log('oauthdata: ', oauthdata)
	let id = oauthdata.githubId;
	try {
		const user = await db.oneOrNone(`select * from GithubUsers where oauthid = ${id};`)
		if (!user) {
			const newUser = await db.one(`insert into GithubUsers(oauthid, oauthdata) values($1, $2) returning oauthid`, [id, oauthdata])			
			console.log('newUser: ', newUser);
			return newUser;
		}
		return user;
	} catch (err) {
		return Error('usernotfound')
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