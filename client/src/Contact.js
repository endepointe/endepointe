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
  let data;

  const handleSuccess = (info) => {
    console.log(info.data);
    document.querySelector('.emailResponse').textContent = info.data;
    document.querySelector('.emailResponseOverlay').style.display = 'block';
    timeoutId = setInterval(showMessage, 900);
  }

  const showMessage = () => {
    console.log('email message sent');
    clearInterval(timeoutId);
    history.push('/');
  }

  const handleFailure = (info) => {
    document.querySelector('.emailResponse').textContent = info.data;
    document.querySelector('.emailResponseOverlay').style.display = 'block';
    timeoutId = setInterval(showMessage, 750);
  }

  // For added protection
  const getData = () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.ipdata.co/?api-key=541cca1364eab8b712971f932164bc52bae6c1138bb703f1b41ffe2f');
    request.setRequestHeader('Accept', 'application/json');
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        data = this.responseText;
      }
    };
    request.send();
  }

  const sendEmail = (e) => {

    e.preventDefault();

    getData();

    let name = e.target.elements.name.value;
    let email = e.target.elements.email.value;
    let subject = e.target.elements.subject.value;
    let message = e.target.elements.message.value;

    axios.post('/send-email', {
      name: name,
      email: email,
      subject: subject,
      message: message,
      data: data
    })
      .then((response) => {
        setStatus(true);
        handleSuccess(response);
      })
      .catch((error) => {
        handleFailure(error.response);
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
        <h3>For service inquiries, send me an email.</h3>
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
        <h1 className="emailResponse"></h1>
      </div>
    </div>
  )
}
export default Contact;