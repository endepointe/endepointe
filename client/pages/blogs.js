import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import {fetcher} from '../lib/fetcher';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import ReactMarkdown from 'react-markdown';
import React, {
	useState,
	useEffect
} from 'react';

function findVideoLinks(text) {
	let md = unified().use(parse).use(remark2react).processSync(text).result; 
	let mdChild = md.props.children;
	mdChild.forEach(child => {
		if (typeof child === 'object') {
			if (child.props.children.length === 1) {
				child.props.children.forEach(obj => {
					if (obj.props?.href) {
						console.log(obj.props)
						return obj.props.href;
					}	
				})
			}
		}
	})
	return md;
}
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
								<ReactMarkdown 
									linkTarget="_blank"	
									className="blogContent">
									{blogs[blog].content}
								</ReactMarkdown>
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