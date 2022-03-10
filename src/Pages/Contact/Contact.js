import React from 'react';
import ContactContent from "../../Components/Contact/ContactContent/ContactContent";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import './Contact.css';

function ContactPage() {
    return (
    <section id='contactPage'>
        <ContactContent />
        <ContactForm />
    </section>
    );
  }
  
  export default ContactPage;
  