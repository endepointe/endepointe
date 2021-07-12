const styles = require( '../../styles/MessageBoard.module.css');
import Link from 'next/link';
import {useState} from 'react';
import CreateReply from './CreateReply';
import {getUser} from '../../lib/getUser';
import useSWR from 'swr';

function MessageBoard(props) {
	const [loggedIn, hasLoggedIn] = useState(false);

	console.log('mb props: ', props.id)

	return (
		<div>
			create the message board components here
			{/* {
				loggedIn 
				? 
				<CreateReply/> 
				: 
				<Link 
					href={{
						pathname: '/auth',
						query: {id: props.id}
					}}>
					<a>Choose a provider</a>
				</Link>
			} */}
			<Link 
				href={{
					pathname: '/auth',
					query: {id: props.id}
				}}>
				<a>Choose a provider</a>
			</Link>
			{/* <Profile/> */}
			<CreateReply/> 
		</div>
	);
}

// async function Profile() {
// 	const {data, error} = useSWR('/api/profile', fetch);
// 	console.log('profile data: ', data);
// 	if (error) return <div>failed to get profile</div>
// 	if (!data) return <div>loading...</div>
// 	return <div>have profile</div>
// }

export default MessageBoard;