import React from 'react';
import './about.css';
import {FaTrophy, FaRegBuilding} from 'react-icons/fa';
import {BsFolderCheck} from 'react-icons/bs';
import {IoSchoolOutline} from 'react-icons/io5';
import {IoLanguage} from 'react-icons/io5'
import {BiLaptop} from 'react-icons/bi'
import PhotoSlider from './PhotoSlider';
import Image1 from '../../assets/images/about_me/01.jpg'
import Image2 from '../../assets/images/about_me/02.JPG'
import Image3 from '../../assets/images/about_me/03.jpg'

const about_texts = [
  {
    'icon': <FaTrophy />,
    'title': 'Experience',
    'detail': '2+ year'
  },
  {
    'icon': <BsFolderCheck/>,
    'title': 'Projects',
    'detail': '8 homemade projects'
  },
  {
    'icon': <FaRegBuilding/>,
    'title': 'Workplace',
    'detail': 'Deutsche Telekom TSI Hungary Kft.'
  },
  {
    'icon': <IoSchoolOutline/>,
    'title': 'Schools',
    'detail': 'Mathematics and Programming Bsc.'
  },
  {
    'icon': <IoLanguage/>,
    'title': 'Languages',
    'detail': 'Hungary (native), English (advanced)'
  },
  {
    'icon': <BiLaptop/>,
    'title': 'Hobbies',
    'detail': 'Series, board games, coding'
  }
];


const slides = [
  {
    'url': Image1,
    'title': 'image1'
  },
  {
    'url': Image2,
    'title': 'image2'
  },
  {
    'url': Image3,
    'title': 'image1'
  },
];

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      
      <PhotoSlider slides={slides}/>
      <div className="chip__container">
        {about_texts.map( about => {
          return(
            <article className='chip__card' data-aos="zoom-in">
              <p className='chip__icons'> {about.icon} </p>
              <h5> {about.title} </h5>
              <small> {about.detail} </small>
            </article>
          );})}
        </div>
      </div>
    </section>
  )
}

export default About