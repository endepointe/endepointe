import {parseCookie} from '../../lib/parseCookie';
import {getUser} from '../../lib/getUser';

export default async function handler(req, res) {
	console.log('auth cookie from header: ', req.headers.cookie);
	let profile; 
	try {
		const profile = await getUser(parseCookie(req.headers.cookie));
		console.log('/api/profile', profile);
		res.status(200).json(profile.user);
	}	catch (err) {
		console.error('profile error: ', err.name, err.message, err.lineNumber);
		if (err.name === 'TypeError') {
			res.status(200).json({msg: 'no profile yet'});
		} else {
			res.status(401).send({msg: 'profile error'});
		}
	}
}