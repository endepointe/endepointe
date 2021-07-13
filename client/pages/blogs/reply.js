import React, { useEffect,useState } from 'react';
import Layout from '../../components/layouts/Layout';
import UserNavbar from '../../components/blog_page/UserNavbar';
import {parseCookie} from '../../lib/parseCookie';
import {getUser} from '../../lib/getUser';

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
		<Layout>
			<UserNavbar/>
		</Layout>
	)
}

Reply.getInitialProps = async (ctx) => {
	if (ctx.err) {
		throw new Error(ctx.err);
	}

	const res = fetch('http://localhost:5550/api/profile');
	const data = await res;
	return {stuff: data}
}

export default Reply;