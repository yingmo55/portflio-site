import React from 'react';
import './Hero.css';
import NavButton from '../NavButton/NavButton';

function Hero () {
    const name1 = "Ying";
    const name2 = 'yi Mo'; //for the typing animation
    const title = "A Front-end developer";
    const shortbio = 'I mainly work with React.js, and I like making minimalistic websites with cool effects using CSS. '

    const heroNavs = [
        {
            link: '/#skills',
            desc: 'about me'
    }, 
        {
            link: '/#projectShowcase',
            desc: 'my works'
    }, 
        {
        link: '/contact',
        desc: 'how to reach me'
}, 
]

    return (
        <section id="hero">
            <div className='hero-content'>
                <div id="hero-text">
                    <h1>Hi, I am <br/>{name1}<p id='typingEffect'>{name2}</p><span id='underscore'>_</span>:<br/>
                    {title}.
                    </h1>
                    <hr id='heroHr' />
                    <p id="heroDescription">{shortbio}</p>
                </div>
                <div id='hero-buttons'>
                    {heroNavs.map(element => 
                        <NavButton className='heroNavButtons' key={element.desc} link={element.link} desc={element.desc}/> )
                    }
                </div>
            </div>
            <div className='heroBG'>
                <div className='hero-deco' id='hero-background' role="presentation"></div>
                <div className='hero-deco' id='hero-background2' role="presentation"></div>
                <div className='hero-deco' id='hero-background3' role="presentation"></div>
                <div className='bg-with-filter' role="presentation"></div>
            </div>
        </section>
    )
}

export default Hero;