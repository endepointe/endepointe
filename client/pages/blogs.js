import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import {fetcher} from '../lib/fetcher';
import ReactMarkdown from 'react-markdown';
import React, {
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
								<ReactMarkdown 
									linkTarget="_blank"	
									className="blogContent">
									{getPreview(blogs[blog].content)}
								</ReactMarkdown>
							</section>
						)
					})}
				</article>
			</main>
		</Layout>
	)
}

function getPreview(text) {
	let str = text;
	let preview = [];
	let i = 0;

	const linefeed = /\n/g;
	const parentheses = /\([^\)]*\)/g; 
	const brackets = /\[[^\]]*\]/g;
	const image = /\<[^\>]*\>/g;
	const cBracket = /\]/g;
	const comma = /,/g;

	str = str.replace(parentheses, '').replace(linefeed, '').replace(image, '').replace(brackets, '').replace(cBracket, '');
	// console.log(str);

	while (preview.length < 400) {
		preview.push(str[i]);
		i++;
	}	
	preview = preview.toString().replace(comma, '');
	console.log(preview);
	return preview;
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