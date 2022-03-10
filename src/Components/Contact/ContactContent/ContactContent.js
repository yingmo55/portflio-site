import React from "react";
import './ContactContent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo } from '../../../Util/socialIcons';

export default function ContactContent () {
const [linkedInInfo, gitHubInfo, emailinfo] = contactInfo;
    return (
        <div className="contactInfo">
            <p>
            <FontAwesomeIcon icon={emailinfo.src} className='contactfaIcon' />
            <em>email:</em> <a href={emailinfo.link}>{emailinfo.details}</a> </p>
            <p>
            <FontAwesomeIcon icon={gitHubInfo.src} className='contactfaIcon' /> 
            <em>Github:</em> <a href={gitHubInfo.link}>{gitHubInfo.details}</a>
            </p>
            <p>
            <FontAwesomeIcon icon={linkedInInfo.src} className='contactfaIcon' />
            <em>LinkedIn:</em> <a href={linkedInInfo.link} >{linkedInInfo.details}</a>
            </p>
        </div>
    )
}