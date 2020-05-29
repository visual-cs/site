import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/visualizations">Visualizations</Link>
                </li>
                <li>
                    <Link to="/about_us">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;