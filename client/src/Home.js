import './Home.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';
// import { getConnectedDevices } from './media';

const Home = () => {

  // getConnectedDevices('videoinput', cameras => console.log(`Camera found`, cameras));

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
            <Link to="/templates"
              className="home-nav-ul-li-Link">
              Templates
              </Link>
          </li>
          <li className="home-nav-ul-li">
            <Link to="/contact"
              className="home-nav-ul-li-Link">
              Contact
              </Link>
          </li>
        </ul>
        {/* <div id="testing">In testing Mode</div> */}
      </nav>
    </main>
  )
}

export default Home;