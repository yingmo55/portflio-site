import React from 'react';
import './Footer.css';

function Footer () {

    return (
        <footer id="footer">
        <div>
          <address>
            <p><img class="contact-icon" src="./resource/icons/contact/github.svg" alt="Link to my GitHub" />GitHub: <a href="https://github.com/yingmo55">yingmo55</a></p>
            <p><img class="contact-icon" src="./resource/icons/contact/linkedin.svg" alt="Link to my LinkedIn" />LinkedIn: <a>Yingyi Mo</a></p>
            <p><img class="contact-icon" src="./resource/icons/contact/envelope.svg" alt="Link to my Email" />email: hello@yingyimo.dev</p>
          </address>
        </div>
        <nav id="sitemap">
          <ul>
            <li><a class="navLink" href="#">Home</a></li>
            <li><a class="navLink" href="#projectShowcase">Projects</a></li>
            <li><a class="navLink" href="#skills">Skills</a></li>
            <li><a class="navLink">Contact</a></li>
          </ul>
        </nav>
      </footer>
    )
}

export default Footer;