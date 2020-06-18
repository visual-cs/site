import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
        <Route exact path="/" render={Home} />
        <Route exact path="/about_us" render={About} />
        <Route exact path="/visualizations" render={Visual} />
        <Redirect to='/' />
      </Switch>

    </Router>
  );
}

export default App;
