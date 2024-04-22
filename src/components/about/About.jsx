import React from 'react';
import './about.css';
import {FaTrophy, FaRegBuilding} from 'react-icons/fa';
import {BsFolderCheck} from 'react-icons/bs';
import {IoSchoolOutline} from 'react-icons/io5';
import {IoLanguage} from 'react-icons/io5'
import {BiLaptop} from 'react-icons/bi'

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
    'title': 'Current Workplace',
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

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="chip__container">
          {about_texts.map( about => {
            return(
              <article className='chip__card' data-aos="zoom-in">
                <p className='chip__icons'> {about.icon} </p>
                <h5> {about.title} </h5>
                <p> {about.detail} </p>
              </article>
            );})}
          </div>
      </div>
    </section>
  )
}

export default About