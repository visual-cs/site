import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Title from './common/Title';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Visual from './pages/Vis';
import './App.scss';

import epicycloid_html from './visual/epicycloid.js';
import tenprint_html from './visual/tenprint.js';

function App() {
  return (
    <Router>
      
      <Title />
      <NavBar />
      
      <div className="container">
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/about" render={About} />
          <Route exact path="/visual" render={Visual} />
          <Route exact path="/visual/epicycloid" render={epicycloid_html} />
          <Route exact path="/visual/tenprint" render={tenprint_html} />
          <Redirect to='/' />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;