const styles = require( '../../styles/UserNavbar.module.css');

const UserNavbar = (props) => {
	const logout = () => {
		console.log('logout');
	}
	return (
		<nav>
			<div>
				<span><span></span>EndePointe</span>
				<p>Thoughts, lessons learned, and a place to share ideas.</p>
			</div>
			<h3>Welcome user</h3>
			<ul>
				<li>
					<button onClick={logout}>Log out</button>
				</li>
			</ul>
		</nav>
	);
}

export default UserNavbar;