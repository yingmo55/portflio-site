import React, { useEffect, useRef, useState } from 'react';
import NavLinks from '../../Util/NavLinks/NavLinks';
import './Navbar.css';

function Navbar () {
  const ref = useRef(null);
  const [isResize, setIsResize] = useState(null);
  const [ navMenuStyle, setNavMenuStyle ] = useState(null);
  const [ burgerNavStyle, setBurgerNavStyle ] = useState(null);

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
          showNav()
        });
        }
      }, [isResize])

    return (
        <header id="header" ref={ref}>
        <p id="siteLogo">yingyimo.dev</p>
        <nav>
          <button id="burgerNav" onClick={mobileNavBar} style={{display: burgerNavStyle}}></button>
          <div id="navMenu" style={{display: navMenuStyle}}>
            <NavLinks />
          </div>
        </nav>
      </header>
    )
}

export default Navbar;