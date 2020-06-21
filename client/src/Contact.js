import './Contact.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React,
{
  useState
} from 'react';
import AppsNav from './AppsNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

  const [status, setStatus] = useState(false);
  let history = useHistory();
  let timeoutId;

  const handleSuccess = (info) => {
    console.log(info.data);
    document.querySelector('.emailResponse').textContent = info.data;
    document.querySelector('.emailResponseOverlay').style.display = 'block';
    timeoutId = setInterval(showMessage, 750);
  }

  const showMessage = () => {
    clearInterval(timeoutId);
    history.push('/');
    window.location.reload();
  }

  const handleFailure = (info) => {
    document.querySelector('.emailResponse').textContent = info.data;
    document.querySelector('.emailResponseOverlay').style.display = 'block';
    timeoutId = setInterval(showMessage, 750);
  }

  // For added protection
  const getData = (e) => {
    e.preventDefault();
    let name = e.target.elements.name.value;
    let email = e.target.elements.email.value;
    let subject = e.target.elements.subject.value;
    let message = e.target.elements.message.value;
    let x = Math.floor(Math.random() * Math.floor(6));
    axios.post('/getData', {
      val: x
    }).then(response => {
      axios.get(`${response.data}`)
        .then(response => sendEmail(JSON.stringify(response.data), name, email, subject, message));
    });
    e.target.elements.name.value = null;
    e.target.elements.email.value = null;
    e.target.elements.subject.value = null;
    e.target.elements.message.value = null;
  }

  const sendEmail = (i, n, e, s, m) => {

    console.log(info);

    axios.post('/send-email', {
      name: n,
      email: e,
      subject: s,
      message: m,
      data: i
    })
      .then((response) => {
        setStatus(true);
        handleSuccess(response);
      })
      .catch((error) => {
        handleFailure(error.response);
      });
  }

  return (
    <div>
      <AppsNav />
      <header>
        <h3>For service inquiries, send me an email.</h3>
      </header>
      <form onSubmit={getData}>
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
      <div className="emailResponseOverlay">
        {status ?
          <FontAwesomeIcon className="iconSuccess"
            size="3x"
            icon={faCheckCircle} /> :
          <FontAwesomeIcon className="iconFailure"
            size="3x"
            icon={faTimesCircle} />}
        <h1 className="emailResponse">.</h1>
      </div>
    </div>
  )
}
export default Contact;