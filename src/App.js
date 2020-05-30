import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Visual from './Vis';
import Title from './Title';
import './App.scss';


function App() {
  return (
    <Router>

      <Title />
      
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about_us">
          <About />
        </Route>
        <Route exact path="/visualizations">
          <Visual />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
