import '../../styles/BlogContent.module.css';
import { useStoreContext } from '../../store/context';
import BlogNavbar from '../../components/blog_page/BlogNavbar';
import {fetcher} from '../../lib/fetcher';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Blog() {
	const data = useStoreContext();
	console.log(data);
	const [id, setId] = useState('');
	const	[title, setTitle] = useState('');
	const [posted, setPosted] = useState('');
	const [modified, setModified] = useState('');
	const [content, setContent] = useState('');
	const [error, setError] = useState(false);
	const router = useRouter();
	const {blog} = router.query;
	useEffect(async () => {
		try {
			let r = fetcher(`http://localhost:5551/blogs/${blog}`);
			console.log(r)
			let d = await r;
			console.log(d)
			setId(d.entry.id);
			setTitle(d.entry.title);
			setPosted(d.entry.posted);
			setModified(d.entry.modified);
			setContent(d.entry.content);
			setError(false);
		} catch (err) {
			setError(true);
			console.error(err);
		} finally {
			console.log('maybe do some cleanup or checking here')
		}
	},[]);
	return (
		<div>  
			{error ? <h4>Uh oh... no data</h4> : 
			<>
				<BlogNavbar/>
				<h5>{posted}</h5>
				<h6>{modified}</h6>
				<h3>{title}</h3>
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