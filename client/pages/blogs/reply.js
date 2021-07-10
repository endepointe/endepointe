import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import CreateReply from '../../components/blog_page/CreateReply';
import {parseCookie} from '../../lib/parseCookie';

function Reply({user}) {
	const [name, setName] = useState('')
	console.log("THE USER: ", user);

	useEffect(() => {
		try {
			setName(user.name);
		} catch(err) {
			console.error(err);
		}
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
	const props = await getUser(parseCookie(ctx.req.headers.cookie));

	console.log('props: ', props)

	return {
		user: props.user 
	}
}

export default Reply;