import Navbar from './components/Navbar';
import Blog from './components/blog/Blog';
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
          <Blog />
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