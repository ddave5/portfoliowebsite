import React from 'react'
import { ClockLoader  } from 'react-spinners'
import './loadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className='loading__container '>
      <div className='loading__spinner'>
        <ClockLoader size={200} color='#008db0' cssOverride={{boxShadow: 'rgb(0, 141, 176) 0px 0px 0px 3px inset'}}/>
        <p className='loading__text'>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen