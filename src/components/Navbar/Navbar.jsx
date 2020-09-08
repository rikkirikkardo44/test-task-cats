import React from "react";
import {NavLink} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div id="navbar" className="nav-wrapper blue darken-3">
                    <NavLink to="/" className="brand-logo center">Catsagram</NavLink>
                    <ul className="right">
                        <li><NavLink to="/create">Create</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;