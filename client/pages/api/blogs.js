import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST'],
  })
)


export default async function handler(req, res) {
	await cors(req, res);

	// api logic
	let r = await fetch("http://localhost:6661/blogs/all");
	let data = await r.json();
	res.json(data);
}