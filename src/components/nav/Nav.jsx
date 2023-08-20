import React, {useState,useEffect} from 'react'
import './nav.css'

const Nav = () => {

  let [isActive, setActive] = useState("false");

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      (prevScrollpos > currentScrollPos || (currentScrollPos == 0)) ? 
      document.getElementById("nav").style.top = "0" : 
      document.getElementById("nav").style.top = "-4rem";

      prevScrollpos = currentScrollPos < 0 ? 0 : currentScrollPos;
    }    
  }, [])

  useEffect(() => {
    let navigation = document.getElementById("nav");
    let menuButton = document.getElementById("menuButton");

    document.onclick = function(e){
      if(e.target !== navigation && e.target !== menuButton){
        navigation.classList.remove("active");
      }
    }
  },[]);

  return (
    <nav id="nav" className={isActive ? null : "active"}>
      <div className="navbar__name">
        <a href="#">David Felegyhazi</a>
      </div>
      <div className='hamburger__menu'>
        <span id='menuButton' onClick={() => setActive(!isActive)}>☰</span>
      </div>
      <div id='navbar__menu' className='navbar__menu'>
        <ul className='navbar__menu__container'>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav