import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            <Home></Home>
          } />
        <Route
          path="/projects"
          render={() =>
            <Projects />
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
