const styles = require( '../../styles/MessageBoard.module.css');
import Link from 'next/link';
import {useState} from 'react';
import CreateReply from './CreateReply';

function MessageBoard(props) {
	const [loggedIn, hasLoggedIn] = useState(false);

	return (
		<div>
			<div>
				<CreateReply />
			</div>
			<Link 
				href={{
				pathname: '/auth',
				query: {id: props.id}
			}}>
				<a>Choose a provider</a>
			</Link>
		</div>
	);
}

export default MessageBoard;