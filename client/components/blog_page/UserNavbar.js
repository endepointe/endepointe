const styles = require( '../../styles/UserNavbar.module.css');

// add an account href for the user to view what data is contained on this
// site after authenticating.
const UserNavbar = () => {
	return (
		<nav className="flex">
			<div className="blogNavbarTitle">
				<span><span></span>EndePointe</span>
				<p className="block w-16">Thoughts, lessons learned, and a place to share ideas.</p>
			</div>
			<div className={styles.authProviders}>
				<a href="http://localhost:5551/auth/github">github Signin</a>
				<a href="http://localhost:5551/auth/google">google signin</a>
				<a href="http://localhost:5551/auth/twitter">twitter signin</a>
			</div>
			<h3>Welcome User</h3>
			<ul>
				<li>
					<button>Log out</button>
				</li>
			</ul>
		</nav>
	);
}

export default UserNavbar;