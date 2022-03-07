import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css';

export default function NavLinks() {
    return (
        <ul>
          <li><NavLink activeClassName='active-link' className="navLink" to="/">Home</NavLink></li>
          <li><NavLink activeClassName='active-link' className="navLink" to="#projectShowcase">Projects</NavLink></li>
          <li><NavLink activeClassName='active-link' className="navLink" to="#skills">Skills</NavLink></li>
          <li><NavLink activeClassName='active-link' className="navLink" to="/contact">Contact</NavLink></li>
        </ul>
    )
}
