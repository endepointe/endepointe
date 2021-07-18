const styles = require( '../../styles/MessageBoard.module.css');
import Link from 'next/link';
import {useState,useEffect} from 'react';
import CreateReply from './CreateReply';

function MessageBoard(props) {
	console.log('messageboard: ', props.user.name);
	// const [authed, hasAuthed] = useState(Boolean);
	// useEffect(() => {
	// 	if (props.user.name) {
	// 		hasAuthed(true);
	// 	} else {hasAuthed(false);}
	// }, []);

	return (
		<div>
			{ 
				props.user.name
				? 
				<CreateReply />
				:
				<Link 
					href={{
					pathname: '/auth',
					query: {id: props.id}
				}}>
					<a>Choose a provider</a>
				</Link>
			}
		</div>
	);
}

export default MessageBoard;