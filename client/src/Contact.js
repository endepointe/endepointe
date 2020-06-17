import './Contact.css';
import axios from 'axios';
import React from 'react';
import AppsNav from './AppsNav';

const Contact = () => {

  const sendEmail = (e) => {

    e.preventDefault();

    let name = e.target.elements.name.value;
    let email = e.target.elements.email.value;
    let subject = e.target.elements.subject.value;
    let message = e.target.elements.message.value;

    axios.post('/send-email', {
      name: name,
      email: email,
      subject: subject,
      message: message
    })
      .then((response) => {
        console.log(response)
      });

    console.log(name, email, subject, message);

    e.target.elements.name.value = null;
    e.target.elements.email.value = null;
    e.target.elements.subject.value = null;
    e.target.elements.message.value = null;
  }

  return (
    <div>
      <AppsNav />
      <header>
        <h3>Send me an email</h3>
      </header>
      <form onSubmit={sendEmail}>
        <label htmlFor="name"></label>
        <input
          required
          className="name"
          placeholder="Your name"
          name="name" type="text" />
        <label htmlFor="email"></label>
        <input
          required
          className="email"
          placeholder="Your email"
          name="email" type="email" />
        <label htmlFor="message"></label>
        <label htmlFor="subject"></label>
        <input
          required
          className="subject"
          placeholder="Subject"
          name="subject" type="text" />
        <label htmlFor="message"></label>
        <textarea
          required
          className="message"
          name="message" id="message" placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}
export default Contact;