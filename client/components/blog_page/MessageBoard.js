const styles = require( '../../styles/MessageBoard.module.css');
import Link from 'next/link';
import {useState} from 'react';
import CreateReply from './CreateReply';
import {fetcher} from '../../lib/fetcher';
import useSWR from 'swr';

function MessageBoard(props) {
	const {data, error} = useSWR('/api/profile', fetcher);
	const [loggedIn, hasLoggedIn] = useState(false);
	console.log(data);
	if (error) {
		return (
			<div>
				<Link 
					href={{
					pathname: '/auth',
					query: {id: props.id}
				}}>
					<a>Choose a provider</a>
				</Link>
			</div>
		)
	}

	if (!data) return <div>loading...</div>

	return (
		<div>
			<div>
				<p>Welcome {data.name}</p>
				<img src={data.avatar_url} alt="profile image" />
				<CreateReply profile={data}/>
			</div>
		</div>
	);
}

export default MessageBoard;