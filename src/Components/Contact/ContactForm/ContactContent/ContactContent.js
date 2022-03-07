import React from "react";
import './ContactContent.css';

export default function ContactContent () {
const contactMessage = "I am available for hire currently!\n Alternatively, you can find me here:"
    return (
        <div className="contactInfo">
            <h2>
                Contact
            </h2>
            <p>{contactMessage}</p>
        </div>
    )
}