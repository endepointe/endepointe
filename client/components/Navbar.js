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
    <nav className={styles.nav}>
      <div
        id="logo"
        className={styles.logo}>
        <h3
          className={styles.ende}
          id="ende">ENDE</h3>
        <h3
          id="pointe"
          className={styles.pointe}>POINTE</h3>
      </div>
      <ul className={styles.navLinks}>
        <li
          className={styles.navLink}
          onClick={test}>
            <Link href="/">
              <a>Home</a> 
            </Link>
        </li>
        <li
          className={styles.navLink}
          onClick={test}>
            <Link href="/blogs">
              <a>Blog</a>   
            </Link>
        </li>
      </ul>
    </nav>
  )
}