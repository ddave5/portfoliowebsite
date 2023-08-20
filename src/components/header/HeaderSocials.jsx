import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials" data-aos="fade-up">
        <a href="https://www.linkedin.com/in/david-felegyhazi/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ddave5" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/david.felegyhazi/" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials