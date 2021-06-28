import '../../styles/BlogNavbar.module.css';
import Image from 'next/image';

function Gear() {
	return <Image className="gear" src="" width="64" height="64"/>
}

const BlogNavbar = () => {
	return (
		<nav className="flex">
			<div className="blogNavbarTitle">
				<span><span></span>EndePointe</span>
				<p className="block w-16">Thoughts, lessons learned, and a place to share ideas.</p>
			</div>
		</nav>
	);
}

export default BlogNavbar;