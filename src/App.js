import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/blog">
          <div>blog</div>
        </Route>
        <Route exact path="/">
          <div>home</div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;