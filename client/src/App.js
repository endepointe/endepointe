import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Demos from './Demos';
import Contact from './Contact';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <Home />
            } />
          <Route
            path="/services"
            render={() =>
              <Services />
            } />
          <Route
            path="/demos"
            render={() =>
              <Demos />
            } />
          <Route
            path="/contact"
            render={() =>
              <Contact />
            } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
