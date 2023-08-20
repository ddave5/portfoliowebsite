import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <section>
      <div className="footer__container">
        <div className='footer__nav'>
          <a href='#about'>About</a>
          <a href='#experience'>Experience</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#contact'>Contact</a>
        </div>
        <p className='footer__copyright'>©2022. Created by David Felegyhazi</p>
      </div>
    </section>
  )
}

export default footer