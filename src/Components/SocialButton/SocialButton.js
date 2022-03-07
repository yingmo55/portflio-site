import React from 'react';

import './SocialButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SocialButton (props) {

    const contactInfo = props.contactInfo;

    return contactInfo.map(contact => 
    <a className='contact-icons' href={contact.link} key={contact.desc}>
        <FontAwesomeIcon icon={contact.src} size="2x" color="white" className='faIcons' />
    </a>)
}

export default SocialButton;