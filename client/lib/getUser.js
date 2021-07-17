const getUser = async (authorization) => {
	try {
		const res = await fetch('http://localhost:5551/profile', {
			headers: {
				authorization
			}
		});
		let data = await res.json();
		return {authorization, user: data}
	} catch(err) {
		console.error('getUser.error: ', err.name, err.message, err.lineNumber);
		return null;
	}
}

module.exports = {getUser: getUser};