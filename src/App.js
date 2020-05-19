import React from 'react';
import NavBar from './NavBar';
import About from './About';

function App() {
  return (
    <div>
      <div id="Nav">
        <NavBar />
      </div>
      <div id="Body">
        <About />
      </div>
    </div>
  );
}

export default App;
