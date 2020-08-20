import React, {FC} from "react";
import {NavLink} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-2 px1">
                <NavLink to="/" className="brand-logo">CatsList</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;