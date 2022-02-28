import React from 'react';
import './Navbar.css';

function Navbar () {
    return (
        <header id="header">
        <p id="siteLogo">yingyimo.dev</p>
        <nav>
          <button id="burgerNav"></button>
          <div id="navMenu">
            <ul>
              <li><a className="navLink" href="#">Home</a></li>
              <li><a className="navLink" href="#projectShowcase">Projects</a></li>
              <li><a className="navLink" href="#skills">Skills</a></li>
              <li><a className="navLink">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;