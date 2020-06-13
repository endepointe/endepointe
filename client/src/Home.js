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
            <Link to="/services"
              className="home-nav-ul-li-Link">
              Services
              </Link>
          </li>
          <li className="home-nav-ul-li">
            <Link to="/demos"
              className="home-nav-ul-li-Link">
              Demos
              </Link>
          </li>
          <li className="home-nav-ul-li">
            <Link to="/contact"
              className="home-nav-ul-li-Link">
              Contact
              </Link>
          </li>
        </ul>
        <div id="testing">In testing Mode</div>
      </nav>
    </main>
  )
}

export default Home;