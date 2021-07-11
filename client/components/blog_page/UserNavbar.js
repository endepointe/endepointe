const styles = require( '../../styles/UserNavbar.module.css');
import {parseCookie} from '../../lib/parseCookie';
import {getUser} from '../../lib/getUser';

// add an account href for the user to view what data is contained on this
// site after authenticating.
const UserNavbar = (props) => {

	return (
		<nav>
			<div>
				<span><span></span>EndePointe</span>
				<p>Thoughts, lessons learned, and a place to share ideas.</p>
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