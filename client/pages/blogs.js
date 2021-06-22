import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import {fetcher} from '../lib/fetcher';
// import useSwr from 'swr'; 


export default function Blog(props) {
	console.log(props);
	return (
		<Layout>
			<Head>
				<title>EP:Blog</title>	
			</Head>			

			<main>
				<h1>Blogs</h1>
				<p>list all blog links here</p>
			</main>
				
		</Layout>
	)
}

export async function getStaticProps(context) {
	const res = fetcher('http://localhost:5551/blogs/all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res;
	if (!data) {
		return {
			notFound: true
		}
	}
	return {
		props: data
	}
}