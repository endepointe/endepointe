const styles = require( '../../styles/MessageBoard.module.css');
import Link from 'next/link';
import {useState} from 'react';
import CreateReply from './CreateReply';
import {getUser} from '../../lib/getUser';
import useSWR from 'swr';

function MessageBoard(props) {
	const [loggedIn, hasLoggedIn] = useState(false);

	console.log('mb props: ', props)

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