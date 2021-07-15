const styles = require( '../../styles/UserNavbar.module.css');
import {fetcher} from '../../lib/fetcher';
import useSWR from 'swr';

const UserNavbar = (props) => {
	const {data, error} = useSWR('/api/profile', fetcher);
	if (error) return <div>no profile</div>
	if (!data) return <div>loading profile...</div>
	const logout = () => {
		let res = fetcher('http://localhost:5551/profile/logout');
		console.log(res)
	}
	return (
		<nav>
			<div>
				<span><span></span>EndePointe</span>
				<p>Thoughts, lessons learned, and a place to share ideas.</p>
			</div>
			<h3>Welcome {data.name}</h3>
			<ul>
				<li>
					<button onClick={logout}>Log out</button>
				</li>
				<li>
					<a href="http://localhost:5551/profile/logout">logout</a>
				</li>
			</ul>
		</nav>
	);
}

export default UserNavbar;