import '../index.css';
import '../styles/navbar.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';

/**
 * when the user clicks on the blog link, retrieve the existing blogs.
 * consider prerendering this data for faster page loading, or find an
 * existing way that prerenders this data from a cra application.
 */

export default function Navbar() {
  const test = (e) => {
    e.preventDefault();
    console.log(window.location);
    return;
  }
  return (
    <nav className="nav">
      <div
        id="logo"
        className="logo">
        <h3
          className="ende"
          id="ende">ENDE</h3>
        <h3
          id="pointe"
          className="pointe">POINTE</h3>
      </div>
      <ul>
        <li>
          <Link 
            to="/">home</Link>
        </li>
        <li>
          <Link 
            to="/blog">blog</Link>
        </li>
      </ul>
    </nav>
  )
}