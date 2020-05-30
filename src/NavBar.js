import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item is-expanded has-text-weight-semibold is-size-5" to="/">/home</Link>
                    <Link id="center-item" className="navbar-item is-expanded has-text-weight-semibold is-size-5" to="/visualizations">/visualizations</Link>
                    <Link className="navbar-item is-expanded has-text-weight-semibold is-size-5" to="/about_us">/about_us</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;