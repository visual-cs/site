import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import NavBar from './common/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Visual from './pages/Vis';
import Title from './common/Title';
import Footer from './common/Footer';
import './App.scss';
import FirstVis from './visual/FirstVis';

function App() {
  return (
    <Router>

      <Title />
      <NavBar />

      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/about_us" render={About} />
        <Route exact path="/visualizations" render={Visual} />
        <Route exact path="/example_vis" render={FirstVis} />
        <Redirect to='/' />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;