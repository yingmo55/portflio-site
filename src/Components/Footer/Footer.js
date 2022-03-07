import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
import './Footer.css';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer () {

  const contactInfo = [{
    src: faLinkedin,
    desc: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yingyimo/'
  },
  {
    src: faGithub,
    desc: 'GitHub',
    link: 'https://github.com/yingmo55'
  },
  {
    src: faEnvelope,
    desc: 'Email',
    link: 'mailto:hello@yingyimo.dev'
  }]


    return (
        <footer id="footer">
          <h2>Stay in touch:</h2>
          <div className='contact-icon-set'>
            <SocialButton contactInfo={contactInfo} />
          </div>
      </footer>
    )
}

export default Footer;