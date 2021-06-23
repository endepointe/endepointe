import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import {fetcher} from '../lib/fetcher';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import {
	useState,
	useEffect
} from 'react';

export default function Blog(props) {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		setBlogs(props.entries);
	})
	return (
		<Layout>
			<Head>
				<title>EP:Blog</title>	
			</Head>			
			<main>
				<h1>Blogs</h1>
				<article>
					{Object.keys(blogs).map((blog, i) => {
						return (
							<section key={i}>
								<h3>{blogs[blog].title}</h3>
								<h4>{blogs[blog].posted}</h4>
								<h4>{blogs[blog].modified}</h4>
								<div className="blogContent">
									{
										unified()
											.use(parse)
											.use(remark2react)
											.processSync(blogs[blog].content).result
									}
								</div>
							</section>
						)
					})}
				</article>
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