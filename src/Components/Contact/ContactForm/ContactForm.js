import React from "react";
import './ContactForm.css';

export default function ContactForm () {

    return (
        <form className="contactForm" name='contactForm' method='POST' >
            <input type="hidden" name="form-name" value="contactForm" />
            <div className="infoRow">
                <div className="infoCol">
                    <label htmlFor='name'>Name<span className="required-asterisk">*</span></label>
                    <input className='contactInput' type='text' id='name' name='name' placeholder="Name" required/>
                    <span className="focusBorder"></span>
                </div>
                <div className="infoCol">
                    <label htmlFor='email'>Email<span className="required-asterisk">*</span></label>
                    <input className='contactInput' type='email' id='email' name='email' placeholder="Email" required/>
                    <span className="focusBorder"></span>
                </div>
            </div>
            <label htmlFor='subject'>
                Subject <span className="required-asterisk">*</span>
            </label>
            <input className='contactInput' type='text' id='subject' name='subject' placeholder="Subject" required/>
            <span className="focusBorder"></span>
            <label htmlFor='message'>
                Message<span className="required-asterisk">*</span>
            </label>
            <textarea className='contactInput' id="message" name="message" rows="5" cols="33" placeholder="Your Message" required></textarea>
            <span className="focusBorder"></span>
            <input type='submit' />
        </form>
    )
}
