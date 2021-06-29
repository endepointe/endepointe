import '../../styles/BlogContent.module.css';
import BlogNavbar from '../../components/blog_page/BlogNavbar';
import {fetcher} from '../../lib/fetcher';
import { 
	useEffect, useState 
} from 'react';
import ReactMarkdown from 'react-markdown';

export default function Blog({entry}) {
	console.log(entry)
	const [id, setId] = useState('');
	const	[title, setTitle] = useState('');
	const [posted, setPosted] = useState('');
	const [modified, setModified] = useState('');
	const [content, setContent] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
			setId(entry.id);
			setTitle(entry.title);
			setPosted(entry.posted);
			setModified(entry.modified);
			setContent(entry.content);
			setError(false);
	}, []);
	return (
		<div>  
			{error ? 'there is no state' : null}
			<BlogNavbar/>
			{error ? <h4>Uh oh... no data</h4> : 
			<>
				<h5 className="text-xl">{posted}</h5>
				<h6 className="text-xl">{modified}</h6>
				<h3 className="text-5xl">{title}</h3>
				<section>
					<ReactMarkdown>
						{content}
					</ReactMarkdown>
				</section>
			</>
			}
		</div>
	)
}

export async function getStaticPaths() {


	return {
		paths: [
			{params: {blog: '10'}},
			{params: {blog: '11'}}
		],
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const res = await fetcher(`http://localhost:5551/blogs/${params.blog}`, {
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