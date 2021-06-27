import {fetcher} from '../../lib/fetcher';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';

function closure() {
	let inside = 5;
	function handleInside() {
		console.log('inside is: ', inside)
	}
	handleInside()
}
export default function Blog() {
	const [data, setData] = useState({});
	const router = useRouter();
	const {blog} = router.query;
	useEffect(async () => {
		closure();
		setData(await fetcher(`http://localhost:5551/blogs/${blog}`));
		console.log(data)
	},[]);
	return (
		<div>Blog ID: {blog} 
		</div>
	)

}