import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

/**
 * when the user clicks on the blog link, retrieve the existing blogs.
 * consider prerendering this data for faster page loading, or find an
 * existing way that prerenders this data from a cra application.
 */

export default function Navbar() {
  const test = (e) => {
    return;
  }
  return (
    <nav>
      <div>
        <h3>ENDE</h3>
        <h3>POINTE</h3>
      </div>
      <ul className={styles.navLinks}>
        <li
          onClick={test}>
            <Link href="/">
              <a>Home</a> 
            </Link>
        </li>
        <li
          onClick={test}>
            <Link href="/blogs">
              <a>Blog</a>   
            </Link>
        </li>
      </ul>
    </nav>
  )
}