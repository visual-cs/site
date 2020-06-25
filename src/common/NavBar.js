import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="container has-text-centered ">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item is-expanded has-text-weight-semibold is-size-5" to="/">/home</Link>
          <Link id="center-item" className="navbar-item is-expanded has-text-weight-semibold is-size-5" to="/visual">/visual</Link>
          <Link className="navbar-item is-expanded has-text-weight-semibold is-size-5" to="/about">/about</Link>
        </div>
      </div></div>
    </nav>
  );
}

export default NavBar;