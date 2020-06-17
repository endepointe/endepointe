import './Demos.css';
import React,
{
  useEffect
} from 'react';
import AppsNav from './AppsNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  const closeApp = (id) => {
    const appId = document.getElementById(id);
    appId.style.display = 'none';
  }

  return (
    <main className="apps-main">
      <AppsNav />
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
          </article>
          <a href="https://vote.endepointe.com"
            rel="noopener noreferrer"
            content="endepointe"
            target="_blank">
            <div className="overlay">
              <div className="text">Voting Demo</div>
            </div>
          </a>
        </section>
        <section className="app">
          <article
            id="app1" className="app-modal">
            <button
              className="iconCloseButton"
              onClick={() => closeApp('app2')}>
              <FontAwesomeIcon
                icon={faTimesCircle} />
            </button>
          </article>
          <a href="https://vote.endepointe.com"
            rel="noopener noreferrer"
            content="endepointe"
            target="_blank"> <div className="overlay">
              <div className="text">Ethereum Demo in Progress</div>
            </div></a>
        </section>
        <section className="app">
          <article
            id="app1" className="app-modal">
            <button
              className="iconCloseButton"
              onClick={() => closeApp('app3')}>
              <FontAwesomeIcon
                icon={faTimesCircle} />
            </button>
          </article>
          <a href="https://vote.endepointe.com"
            rel="noopener noreferrer"
            content="endepointe"
            target="_blank"> <div className="overlay">
              <div className="text">Store Demo in Progress</div>
            </div></a>
        </section>
      </article>
    </main>
  )
}

export default Demos;