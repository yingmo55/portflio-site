import React from "react";
import './ContactBottom.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function ContactFooter() {
    return (
        <section className='footer-contact'>
            <div className="footer-contact-text">
            <h2>Interested in woring with me?</h2>
            <p>I am currently available for hire (full time/freelacne). Whether you have questions  Feel free to contact me if you have any questions!</p>
            </div>
            <button className="footer-contact-btn"> 
                <a href='/contact' className="footer-contact-link">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className='footer-contact-icon' />
                Contact me here
                </a>
                </button>

        </section>
    )
}