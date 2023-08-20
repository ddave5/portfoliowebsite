import React from 'react'
import './opening.css'
import LetterBlack from '../../assets/images/letterblack.svg'
import LetterWhite from '../../assets/images/letterwhite.svg'
import Sea from '../../assets/images/sea.mp4';
import Wave from '../../assets/images/wave.jpg'

const Opening = () => {

  return (
    <div id='#' className='opening__container'>
        <div className='top__letter'  data-aos="zoom-in">
          <img src={LetterWhite} alt='letter' className='letter__top__svg'/>
        </div>
        <div className="mid__letter" data-aos="zoom-in">
          <img src={LetterBlack} alt='letter' className='letter__mid__svg'/>
          <div className="video" data-aos="zoom-in">
            {window.innerWidth > 1024 ? 
            <video src={Sea} muted="{true}" loop="{true}" disablePictureInPicture="{true}" autoPlay="{true}" className='sea__video'/> :
            <img src={Wave} className='sea__video' alt='wave' />}
            
          </div> 
        </div>
    </div>
  )
}

export default Opening