import React, { useEffect,useState } from 'react';
import Layout from '../../components/layouts/Layout';
import UserNavbar from '../../components/blog_page/UserNavbar';
import CreateReply from '../../components/blog_page/CreateReply';
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
			<CreateReply/>
		</Layout>
	)
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