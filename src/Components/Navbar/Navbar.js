import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

function Navbar () {
  const ref = useRef(null);
  const [isResize, setIsResize] = useState(null);
  const [ navMenuStyle, setNavMenuStyle ] = useState(null);
  const [ burgerNavStyle, setBurgerNavStyle ] =useState(null);

  const mobileNavBar = () => {
    if (navMenuStyle === 'none') {
      setNavMenuStyle('flex')
    } else {
      setNavMenuStyle ('none')
    }
  }

  const showNav = () => {
    const width = ref.current.offsetWidth;
      if(width > 800) {
        setBurgerNavStyle ('none')
        setNavMenuStyle('flex')
      } else {
        setBurgerNavStyle ('block')
        setNavMenuStyle('none')
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
          <button id="burgerNav" onClick={mobileNavBar} style={{display: burgerNavStyle}}></button>
          <div id="navMenu" style={{display: navMenuStyle}}>
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