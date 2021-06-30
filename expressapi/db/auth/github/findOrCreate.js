const db = require('../../init');

const findOrCreate = async (oauthdata) => {
	console.log('oauthdata: ', oauthdata)
	let id = oauthdata.githubId;
	try {
		const result = await db.any('select * from GithubUsers where oauthid = $1', [id]);
		console.log('result: ', result)
		const user = await result.json();
		console.log('fetched user: ', user);
		if (result === null) {
			const newUser = await db.one(`insert into GithubUsers(oauthid) values($1) returning oauthid`, [id])			
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