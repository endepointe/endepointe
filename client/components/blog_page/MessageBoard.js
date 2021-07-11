const styles = require( '../../styles/MessageBoard.module.css');
import Link from 'next/link';
import {useState} from 'react';
import CreateReply from './CreateReply';

export default function MessageBoard(props) {
	const [loggedIn, hasLoggedIn] = useState(false);

	console.log('mb props: ', props.id)

	return (
		<div>
			create the message board components here
			{
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
			}
			<button>click</button>
		</div>
	);
}