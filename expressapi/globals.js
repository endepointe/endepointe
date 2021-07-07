let JWT_KEY = '';
module.exports = {
	getKey: function(){
		return JWT_KEY;
	},
	setKey: function(str) {
		JWT_KEY = str;
	}
}