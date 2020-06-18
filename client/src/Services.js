import './Services.css';
import React from 'react';
import AppsNav from './AppsNav';

const Services = () => {
  return (
    <div>
      <AppsNav />
      <main className="services">
        <ul>
          <li>Stripe Payments</li>
          <li>React SPAs</li>
          <li>Nginx Configuration</li>
        </ul>
      </main>
    </div>
  )
}
export default Services;