import React from 'react';
import ContactContent from "../../Components/Contact/ContactContent/ContactContent";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import './Contact.css';

function ContactPage() {
    const contactMessage = "I am available for hire currently!\n Alternatively, you can find my socials to the right (or above):"

    return (
    <section id='contactPage'>
        <ContactContent />
        <div className='contactMain'>
            <h2>Contact</h2>
            <p>{contactMessage}</p>
            <ContactForm />
        </div>
    </section>
    );
  }
  
  export default ContactPage;
  