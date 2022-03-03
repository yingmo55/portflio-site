import React from 'react';

import NavLinks from '../../Util/NavLinks/NavLinks';

import './Footer.css';
import linkedinLogo from '../../assets/icons/contact/linkedin.svg';
import githubLogo from '../../assets/icons/contact/github.svg';
import emailLogo from '../../assets/icons/contact/envelope.svg';

function Footer () {

    return (
        <footer id="footer">
        <div>
          <address>
            <p><img className="contact-icon" src={githubLogo} alt="GitHub Logo" />GitHub: <a href="https://github.com/yingmo55">yingmo55</a></p>
            <p><img className="contact-icon" src={linkedinLogo} alt="LinkedIn Logo" />LinkedIn: <a href="https://www.linkedin.com/in/yingyimo/" >Yingyi Mo</a></p>
            <p><img className="contact-icon" src={emailLogo} alt="Email Logo" />email: hello@yingyimo.dev</p>
          </address>
        </div>
        <nav id="sitemap">
          <NavLinks />
        </nav>
      </footer>
    )
}

export default Footer;