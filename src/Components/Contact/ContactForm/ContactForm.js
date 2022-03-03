import React from "react";
import './ContactForm.css';

export default function ContactForm () {

    return (
        <form className="contactForm">
            <label htmlFor='contactName'>Name<span className="required-asterisk">*</span></label>
            <input type='text' id='contactName' name='name' placeholder="Name" required/>
            <label htmlFor='contactEmail'>Email<span className="required-asterisk">*</span></label>
            <input type='text' id='contactEmail' name='email' placeholder="Email" />
            <label htmlFor='contactMessage'>Message<span className="required-asterisk">*</span></label>
            <textarea id="contactMessage" name="message" rows="5" cols="33" placeholder="Your Message" required>
            </textarea>
            <input type='submit' />
        </form>
    )
}