import './Services.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';
import AppsNav from './AppsNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
  return (
    <div>
      <AppsNav />
      <main className="services">
        <ul>
          <li>Stripe Payments</li>
          <li>React SPAs</li>
          <li>Nginx Configuration</li>
          <li>Postgres DBA</li>
          <li>Mongoose DBA</li>
        </ul>
        <Link
          className="servicesContact"
          to="/contact">
          <FontAwesomeIcon
            className="emailIcon"
            icon={faEnvelope} />
            Contact
        </Link>
      </main>
    </div>
  )
}
export default Services;