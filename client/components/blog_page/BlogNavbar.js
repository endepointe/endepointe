import '../../styles/BlogNavbar.module.css';
import Link from 'next/link';

const BlogNavbar = () => {
	return (
		<nav className="flex">
			<div className="blogNavbarTitle">
				<span><span></span>EndePointe</span>
				<p className="block w-16">Thoughts, lessons learned, and a place to share ideas.</p>
			</div>
			<ul>
				<li>
					<Link href='/'><a>Home</a></Link>
				</li>
				<li>
					<Link href='/blogs'><a>Blogs</a></Link>
				</li>
			</ul>
		</nav>
	);
}

export default BlogNavbar;