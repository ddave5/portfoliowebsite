import React, { useState } from 'react'
import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';

const PhotoSlider = ( {slides} ) => {

  let [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '10%',
    backgroundImage: `url(${slides[currentIndex].url})`
  }

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='photos__container' data-aos="zoom-in">
      <div>
        <AiOutlineLeft className='left__arrow' onClick={goToPrev}/>
      </div>
      <div style={slideStyles}></div>
      <div>
        <AiOutlineRight className='right__arrow' onClick={goToNext}/>
      </div>
      <div className='dots__container'>
        {slides.map( (slide, index) => {
          return(
            <div
              key={index} 
              onClick={() => setCurrentIndex(index)}
              className={index === currentIndex ? "active__dot" : "dot"}>
                •
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PhotoSlider