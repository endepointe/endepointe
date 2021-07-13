const styles = require( '../../styles/MessageBoard.module.css');
import Link from 'next/link';
import {useState} from 'react';
import CreateReply from './CreateReply';
import {fetcher} from '../../lib/fetcher';
import useSWR from 'swr';

function MessageBoard(props) {
	const {data, error} = useSWR('/api/profile', fetcher);
	const [loggedIn, hasLoggedIn] = useState(false);

	if (error) return <div>failed to find profile</div>
	if (!data) return <div>loading...</div>

	console.log(data);

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

export default MessageBoard;