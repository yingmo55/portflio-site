import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css';

export default function NavLinks() {
    return (
        <ul id='nav-Links'>
          <li><NavLink activeClassName='active-link' className="navLink" to="/#">Home</NavLink></li>
          <li><a activeClassName='active-link' className="navLink" href="#projectShowcase">Projects</a></li>
          <li><a activeClassName='active-link' className="navLink" href="#skills">Skills</a></li>
          <li><NavLink activeClassName='active-link' className="navLink" to="/contact">Contact</NavLink></li>
        </ul>
    )
}
