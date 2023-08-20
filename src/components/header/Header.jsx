import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/images/profile_picture_3000.png'

const Header = () => {
  return (
    <section className='container header__container'>
      <HeaderSocials/>
      <div className='header__img__container' data-aos="zoom-in">
        <img src={ME} alt="me"/>
      </div>
      <div className='header__text__container' data-aos="zoom-in">
        <h2 className='title'> Welcome to my website!</h2>
        <div className="content">
          <p>My name is <span className='name'>David Felegyhazi</span>,</p>
          <div className='properties__container'><span className='properties'>I am a </span>.</div>
        </div>
        <CTA/>
      </div>
    </section>
  )
}

export default Header