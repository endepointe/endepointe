import {parseCookie} from '../../lib/parseCookie';

export default async function handler(req, res) {
	// console.log('headers from /api/profile: ', req.headers.cookie);
	console.log('auth cookie from header: ', parseCookie(req.headers.cookie));
	let profile; 
	try {
		const res = await getUser(parseCookie(req.headers.cookie));
		profile = await res;
		console.log('/api/profile', profile);
	}	catch (err) {
		console.error(err);
		res.status(401).send({msg: 'profile error'});
	}
	console.log('profile.user: ', profile.user);
	res.json({data: profile.user});
}

async function getUser(authorization) {
	const res = await fetch('http://localhost:5551/profile', {
		headers: {
			authorization
		}
	});
	let data = await res.json();
	console.log('/api/profile getUser returns: ', data)

	if (res.status === 200) return {authorization, user: data}

	else return {authorization}
}