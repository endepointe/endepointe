import fs from 'fs';
import path from 'path';
const normalPath = path.normalize(__dirname + "/1.txt");

export const blogs = [
	{
		id: 1,
		title: "first blog post",
		date: 'June 17, 2021',
		getContent: function(id) {
			return fs.readFileSync(normalPath);
		} 
	},
]