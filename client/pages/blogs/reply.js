import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import CreateReply from '../../components/blog_page/CreateReply';

function Reply({user}) {
	const [name, setName] = useState('')
	console.log("THE USER: ", user.name);

	useEffect(() => {
		setName(user.name)
	}, []);

	return (
		<div>
			<h1>Welcome {name}</h1>
			<Link href="/blogs">
				<a>blogs</a>
			</Link>
			<CreateReply/>
		</div>
	)
}

async function getUser(authorization) {
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

Reply.getInitialProps = async (ctx) => {
	if (ctx.err) {
		throw new Error(ctx.err);
	}
	// effectively the same thing as the nookie package.
	let cookieObj = ctx.req.headers.cookie.split(';');
	let cookies = [];
	let authorization = '';
	cookieObj.forEach(cookie => {
		cookies.push(cookie.split('='));
	})
	cookies.forEach(cookie => {
		let nc = cookie[0].trim();
		cookie[0] = nc;
		switch (cookie[0]) {
			case 'authorization':
				authorization = cookie[1];
			break;
			default:
				authorization = null;
				break;
		}
	})
	const props = await getUser(authorization);
	console.log('props: ', props)

	return {
		user: props.user 
	}
}

export default Reply;