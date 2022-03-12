import React from 'react';
import Hero from '../../Components/Hero/Hero';
import ProjectShowcase from '../../Components/ProjectShowcase/ProjectShowcase';
import About from '../../Components/About/About';
import ContactFooter from '../../Components/ContactBottom/ContactBottom';

function LandingPage() {
    return (
        <>
        <Hero />
        <About />
        <ProjectShowcase />
        <ContactFooter />
    </>
    );
  }
  
  export default LandingPage;
  