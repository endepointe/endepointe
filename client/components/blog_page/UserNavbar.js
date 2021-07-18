const styles = require( '../../styles/UserNavbar.module.css');
import {useEffect,useState} from 'react';

const UserNavbar = (props) => {
	// const [authed, hasAuthed] = useState(Boolean);
	// useEffect(() => {
	// 	if (props.user.name) {
	// 		hasAuthed(true);
	// 	} else {hasAuthed(false);}
	// },[]);
	console.log('usernavbar: ', props.user.name);

	const logout = () => {
		fetch('http://localhost:5551/profile/logout')
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.error(err));
	}

	return (
		<nav>
			<div>
				<span><span></span>EndePointe</span>
				<p>Thoughts, lessons learned, and a place to share ideas.</p>
			</div>

			{
				props.user.name
				?
				<div>
					<h3>Welcome {props.user.name}</h3>
					<button onClick={logout}>logout</button>	
				</div>
				:	
				<div>
					<h3>Display something unique.</h3>
					<h3>dont know what yet</h3>
					<h3>we'll figure it out</h3>
				</div>
			}
		</nav>
	);
}

export default UserNavbar;