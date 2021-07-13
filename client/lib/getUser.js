const getUser = async (authorization) => {
	const res = await fetch('http://localhost:5551/profile', {
		headers: {
			authorization
		}
	});
	let data = await res.json();
	console.log('getUser returns: ', data)
	if (res.status === 200) return {authorization, user: data}
	else return {authorization}
}

module.exports = {getUser: getUser};