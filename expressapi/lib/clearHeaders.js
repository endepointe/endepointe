module.exports = {
	clearHeaders: function(headers) {
		headers.forEach((header) => {
			header = '';
		})
		headers.length = 0;
	}
}