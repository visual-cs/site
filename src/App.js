import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Visual from './Vis';


function App() {
  return (
    <Router>

      <NavBar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about_us">
        <About />
      </Route>
      <Route exact path="/visualizations">
        <Visual />
      </Route>
  
    </Router>
  );
}

export default App;
