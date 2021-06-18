import Head from 'next/head';
import Layout from '../components/layouts/Layout';
// import MessageBoard from '../components/message_board/MessageBoard';

export default function Blog(props) {
	console.log(props.blogData);
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
	const res = await fetch('http://localhost:6660/api/blogs');
	const blogData = await res.json();

	if(!blogData) {
		return {
			notFound: true,
		}
	}

	return {
		props: {blogData},
	}
}