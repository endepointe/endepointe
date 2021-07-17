const parseCookie = (str) => {

	let cookieObj = str.split(';');
	let cookies = [];
	let authorization = '';

	cookieObj.forEach(cookie => {
		cookies.push(cookie.split('='));
	});

	cookies.forEach(cookie => {
		let tempcookie = cookie[0].trim();
		cookie[0] = tempcookie;

		switch (cookie[0]) {
			case 'authorization':
				authorization = cookie[1];
			break;
			default:
				authorization = null;
				break;
		}
	})
	return authorization;
}

module.exports = {parseCookie: parseCookie};