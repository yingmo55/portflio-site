import React from 'react';
import './Hero.css';

function Hero () {

    const name1 = "Ying";
    const name2 = 'yi Mo';

    return (
        <section id="hero">
            <div id="hero-deco"></div>
                <div id="hero-text">
                <h1>Hi, I am <br/>{name1}<p id='typingEffect'>{name2}</p><span id='underscore'>_</span>:<br/>
                A Front-end developer.
                </h1>
                <p id="heroDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget. Bibendum est ultricies integer quis. Id donec ultrices tincidunt arcu non sodales.</p>
            </div>
        </section>
    )
}

export default Hero;