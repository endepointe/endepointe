const styles = require( '../../styles/UserNavbar.module.css');
import {parseCookie} from '../../lib/parseCookie';
import {getUser} from '../../lib/getUser';

// add an account href for the user to view what data is contained on this
// site after authenticating.
const UserNavbar = (props) => {

	const auth = (provider) => {
		let url = `http://localhost:5551/auth/${provider}`
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.setRequestHeader('Referrer', `blogs/${props.id}/#reply`);
		xhr.onreadystatechange = function() {
			window.location = url;
		}
		xhr.send();
	}

	return (
		<nav className="flex">
			<div className="blogNavbarTitle">
				<span><span></span>EndePointe</span>
				<p className="block w-16">Thoughts, lessons learned, and a place to share ideas.</p>
			</div>
			{/* place these auth options within a modal
				and then ask the user to auth if no cookie is
				present. if a cookie is present, get their
				profile data and allow them to post a reply */}
			<div className={styles.authProviders}>
				<button onClick={()=>auth('github')}>GitHub Sign in</button>
				<button onClick={()=>auth('google')}>Google Sign in</button>
				<button onClick={()=>auth('twitter')}>Twitter Sign in</button>
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