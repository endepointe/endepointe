import './Home.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';

const Home = () => {
  return (
    <main className="home-main">
      <nav className="home-nav">
        <ul className="home-nav-ul">
          <li className="home-nav-ul-li">
            <Link to="/projects"
              className="home-nav-ul-li-Link">
              Projects
              </Link>
          </li>
          <li className="home-nav-ul-li">
            <Link to="/contact"
              className="home-nav-ul-li-Link">
              Contact
              </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default Home;