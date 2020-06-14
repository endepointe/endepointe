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

function App() {
  return (
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
  );
}

export default App;
