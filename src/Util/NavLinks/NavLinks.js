import React from "react";
import './NavLinks.css';

export default function NavLinks() {
    return (
        <ul id='nav-Links'>
          <li><a activeClassName='active-link' className="navLink" href="/#">Home</a></li>
          <li><a activeClassName='active-link' className="navLink" href="#projectShowcase">Projects</a></li>
          <li><a activeClassName='active-link' className="navLink" href="#skills">Skills</a></li>
          <li><a activeClassName='active-link' className="navLink" href="/contact">Contact</a></li>
        </ul>
    )
}
