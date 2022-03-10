import React from "react";
import './HeroBackground.css';

export default function HeroBackground() {
    return (
        <div className='heroBG'>
            <div className='hero-deco' id='hero-background' role="presentation"></div>
            <div className='hero-deco' id='hero-background2' role="presentation"></div>
            <div className='hero-deco' id='hero-background3' role="presentation"></div>
            <div className='bg-with-filter' role="presentation"></div>
        </div>
    )
}