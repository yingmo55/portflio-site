import React from "react";
import './NavLinks.css';
import { NavLink } from "react-router-dom";

export default function NavLinks() {
    return (
        <ul id='nav-Links'>
          <li>
            <NavLink to="/#" 
                    className={({ isActive }) => isActive ? "navLink active-link" : "navLink"} >
            Home
            </NavLink>
          </li>
          <li><a className="navLink" href="/#projectShowcase">Projects</a></li>
          <li><a className="navLink" href="/#skills">Skills</a></li>
          <li>
            <NavLink to="/contact" 
                     className={({ isActive }) => isActive ? "navLink active-link" : "navLink"} >
              Contact
            </NavLink>
          </li>
        </ul>
    )
}
