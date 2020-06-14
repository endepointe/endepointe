import './Demos.css';
import React,
{
  useEffect
} from 'react';
import {
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Demos = () => {

  const apps = [];

  useEffect(() => {
    loadApps();
  });

  const loadApps = () => {
    let appList = document.getElementsByClassName('app-modal');
    for (let i = 0; i < appList.length; ++i) {
      apps.push(appList[i]);
    }
  }

  const showApp = (id) => {
    console.log(id);
    const appId = document.getElementById(id);
    appId.style.display = 'flex';
  }

  const closeApp = (id) => {
    const appId = document.getElementById(id);
    appId.style.display = 'none';
  }

  return (
    <main className="apps-main">
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
      <header>
        <h1>Featured Apps</h1>
      </header>
      <article className="app-list">
        <section className="app">
          <article
            id="app1" className="app-modal">
            <button
              className="iconCloseButton"
              onClick={() => closeApp('app1')}>
              <FontAwesomeIcon
                icon={faTimesCircle} />
            </button>
            <iframe
              src="http://localhost:4001/"
              title="voting app"
              frameBorder="0"></iframe>
          </article>
          <button onClick={() => showApp('app1')}>
            <div className="overlay">
              <div className="text">Voting Demo</div>
            </div>
          </button>
        </section>
        <section className="app">
          <article
            id="app2" className="app-modal">
            <button
              className="iconCloseButton"
              onClick={() => closeApp('app2')}>
              <FontAwesomeIcon
                icon={faTimesCircle} />
            </button>
            <iframe
              src="http://localhost:4001/"
              title="null"
              frameBorder="0"></iframe>
          </article>
          <button onClick={() => showApp('app2')}>
            <div className="overlay">
              <div className="text">Ethereum Demo In progress</div>
            </div>
          </button>
        </section>
        <section className="app">
          <article
            id="app3" className="app-modal">
            <button
              className="iconCloseButton"
              onClick={() => closeApp('app3')}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <iframe
              src="http://localhost:4001/"
              title="voting app"
              frameBorder="0"></iframe>
          </article>
          <button onClick={() => showApp('app3')}>
            <div className="overlay">
              <div className="text">Store Demo In Progress</div>
            </div>
          </button>
        </section>
      </article>
    </main>
  )
}

export default Demos;