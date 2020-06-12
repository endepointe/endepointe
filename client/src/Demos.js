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
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
    appId.style.display = 'block';
  }

  const closeApp = (id) => {
    const appId = document.getElementById(id);
    appId.style.display = 'none';
  }

  return (
    <main className="projects-main">
      <nav className="projects-nav">
        <ul className="projects-nav-ul">
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
      <article className="project-list">
        <section className="project">
          <article
            id="app1" className="app-modal">
            <button onClick={() => closeApp('app1')}>
              <FontAwesomeIcon icon={faTimes} />
              Close
            </button>
            <iframe
              src="http://localhost:4001/"
              title="voting app"
              frameBorder="0"></iframe>
          </article>
          <button onClick={() => showApp('app1')}>View App</button>
        </section>
        <section className="project">
          <article
            id="app2" className="app-modal">
            <button onClick={() => closeApp('app2')}>
              <FontAwesomeIcon icon={faTimes} />
              Close
            </button>
            <iframe
              src="http://localhost:4001/"
              title="null"
              frameBorder="0"></iframe>
          </article>
          <button onClick={() => showApp('app2')}>View App</button>
        </section>
        <section className="project">
          <article
            id="app3" className="app-modal">
            <button onClick={() => closeApp('app3')}>
              <FontAwesomeIcon icon={faTimes} />
              Close
            </button>
            <iframe
              src="http://localhost:4001/"
              title="voting app"
              frameBorder="0"></iframe>
          </article>
          <button onClick={() => showApp('app3')}>View App</button>
        </section>
      </article>
    </main>
  )
}

export default Demos;