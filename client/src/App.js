import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
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
