import React from 'react';
import './Hero.css';

function Hero () {

    const name1 = "Ying";
    const name2 = 'yi Mo'; //for the typing animation
    const title = "A Front-end developer";
    const shortbio = 'I mainly work with React.js, and I like making minimalistic websites with cool effects using CSS.';

    return (
        <section id="hero">
            <div class='hero-content'>
                <div id="hero-deco"></div>
                <div id="hero-text">
                    <h1>Hi, I am <br/>{name1}<p id='typingEffect'>{name2}</p><span id='underscore'>_</span>:<br/>
                    {title}.
                    </h1>
                    <p id="heroDescription">{shortbio}</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;