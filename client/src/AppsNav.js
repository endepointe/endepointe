import './AppsNav.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AppsNav = () => {
  return (
    <nav className="apps-nav">
      <ul className="apps-nav-ul">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="homeLink">Home</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppsNav;