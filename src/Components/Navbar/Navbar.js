import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

function Navbar () {
  const ref = useRef(null);
  const [isResize, setIsResize] = useState(null);
  const navMenu =document.getElementById('navMenu');
  const burgerNav = document.getElementById('burgerNav');
  const mobileNavBar = () => {
      navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
  }

  const showNav = () => {
    const width = ref.current.offsetWidth;
    if (navMenu){
      if(width > 800) {
        burgerNav.style.display = 'none';
        navMenu.style.display = 'flex'
      } else {
        navMenu.style.display = 'none';
        burgerNav.style.display = 'block';
      }
    } }

    // updates if the screen resizes
    useEffect(() => {
        window.addEventListener('resize', ()=>{
          setIsResize(ref.current.offsetWidth)
          showNav()
        });
        
        return () => {
            window.removeEventListener('resize',  ()=>{
              setIsResize(ref.current.offsetWidth)
              showNav()
            });
        }
      }, [isResize, showNav])

    return (
        <header id="header" ref={ref}>
        <p id="siteLogo">yingyimo.dev</p>
        <nav>
          <button id="burgerNav" onClick={mobileNavBar}></button>
          <div id="navMenu">
            <ul id='navUl'>
              <li><a className="navLink" href="/#">Home</a></li>
              <li><a className="navLink" href="#projectShowcase">Projects</a></li>
              <li><a className="navLink" href="#skills">Skills</a></li>
              <li><a className="navLink" href="/#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;