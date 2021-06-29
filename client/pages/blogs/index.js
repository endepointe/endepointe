import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layouts/Layout';
import {fetcher} from '../../lib/fetcher';
import {getPreview} from '../../lib/getPreview';
import ReactMarkdown from 'react-markdown';
import React, {
	useState,
	useEffect,
} from 'react';

export default function Blogs(props) {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		setBlogs(props.entries);
	},[props.entries])

	return (
		<Layout>
			<Head>
				<title>EP:Blogs</title>	
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
								<ReactMarkdown 
									linkTarget="_blank"	
									className="blogContent">
									{getPreview(blogs[blog].content)}
								</ReactMarkdown>
								<Link 
									href={`/blogs/${encodeURIComponent(blogs[blog].id)}`}>
										<a>read more</a>
								</Link>
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