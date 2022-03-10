import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
import './Footer.css';
import { contactInfo } from '../../Util/socialIcons';

function Footer () {

    return (
        <footer id="footer">
          <div className='contact-icon-set'>
            <SocialButton contactInfo={contactInfo} />
          </div>
          <p>Made with <span role="img" aria-label='green tea'>🍵</span> by Ying</p>
      </footer>
    )
}

export default Footer;