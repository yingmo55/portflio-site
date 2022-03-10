import React from "react";
import './ContactForm.css';

export default function ContactForm () {

    return (
        <form className="contactForm">
            <div className="infoRow">
                <div className="infoCol">
                    <label htmlFor='contactName'>Name<span className="required-asterisk">*</span></label>
                    <input className='contactInput' type='text' id='contactName' name='name' placeholder="Name" required/>
                    <span className="focusBorder"></span>
                </div>
                <div className="infoCol">
                    <label htmlFor='contactEmail'>Email<span className="required-asterisk">*</span></label>
                    <input className='contactInput' type='text' id='contactEmail' name='email' placeholder="Email" required/>
                    <span className="focusBorder"></span>
                </div>
            </div>
            <label htmlFor='contactSubject'>
                Subject <span className="required-asterisk">*</span>
            </label>
            <input className='contactInput' type='text' id='contactSubject' name='subject' placeholder="Subject" required/>
            <span className="focusBorder"></span>
            <label htmlFor='contactMessage'>
                Message<span className="required-asterisk">*</span>
            </label>
            <textarea className='contactInput' id="contactMessage" name="message" rows="5" cols="33" placeholder="Your Message" required></textarea>
            <span className="focusBorder"></span>
            <input type='submit' />
        </form>
    )
}