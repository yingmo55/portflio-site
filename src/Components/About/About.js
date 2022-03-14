import React from 'react';
import './About.css';
import Skills from '../Skills/Skills';

export default function About () {

    return (
        <section id="about">
            <h2 tabindex="0">About</h2>
        <div className='aboutText'>
        <p>Nice to meet you! I'm Ying. </p>
        <p>I am a self-taught front-end developer located in the United States. I work with React.js primarily, and I like making cool effects with CSS. While my focus is on the technical side, my experience as an art major helps with UI and color.</p>
        <p>Coding is one of my newfound passions because it requires constant problem-solving and learning new concepts, which I find rewarding. I always look forward to expanding my knowledge and getting new tools under my belt. You might see a new language/software/framework added to my skills from time to time!</p>
        </div>
            <Skills />
        </section>
    )
}