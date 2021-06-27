const getPreview = (text) => {
	let str = text;
	let preview = [];
	let i = 0;

	// consolidate into one regex line
	const linefeed = /\n/g;
	const parentheses = /\([^\)]*\)/g; 
	const brackets = /\[[^\]]*\]/g;
	const image = /\<[^\>]*\>/g;
	const cBracket = /\]/g;
	const comma = /,/g;

	str = str.replace(parentheses, '').replace(linefeed, '').replace(image, '').replace(brackets, '').replace(cBracket, '');

	while (preview.length < 400) {
		preview.push(str[i]);
		i++;
	}	
	preview = preview.toString().replace(comma, '');
	return preview;
}

module.exports = {getPreview: getPreview};