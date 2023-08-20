import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ScrollEffect = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);

  
  return (
    <React.Fragment/>
  )
}

export default ScrollEffect