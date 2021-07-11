import {useRouter} from 'next/router';

export default function Auth() {
	const router = useRouter();
	console.log(router.query);

	const auth = (provider) => {
		let url = `http://localhost:5551/auth/${provider}`
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.setRequestHeader('Referrer', `blogs/${router.query.id}/#reply`);
		xhr.onreadystatechange = function() {
			window.location = url;
		}
		xhr.send();
	}

	return (
		<div>
			<button onClick={()=>auth('github')}>GitHub Sign in</button>
			<button onClick={()=>auth('google')}>Google Sign in</button>
			<button onClick={()=>auth('twitter')}>Twitter Sign in</button>
		</div>
	)
}