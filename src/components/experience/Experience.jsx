import React from 'react'
import './experience.css'
import {BsCheckSquare} from 'react-icons/bs';
import {FaHtml5, FaCss3, FaReact, FaAngular, FaJava, FaPython} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {DiPostgresql, DiMysql} from 'react-icons/di'

const frontendContainer = [
  {
    "icon": <FaHtml5/>,
    "name": "HTML",
    "skill": "Experienced"
  },
  {
    "icon": <FaCss3/>,
    "name": "CSS",
    "skill": "Experienced"
  },
  {
    "icon": <BsCheckSquare/>,
    "name": "Primefaces",
    "skill": "Experienced"
  },
  {
    "icon": <FaReact/>,
    "name": "React",
    "skill": "Experienced"
  },
  {
    "icon": <FaAngular/>,
    "name": "Angular",
    "skill": "Intermadiete"
  }];

const backendContainer = [
  {
    "icon": <FaJava/>,
    "name": "Java",
    "skill": "Experienced"
  },
  {
    "icon": <FaPython/>,
    "name": "Python",
    "skill": "Intermediate"
  },
  {
    "icon": <IoLogoJavascript/>,
    "name": "JavaScript",
    "skill": "Intermediate"
  },
  {
    "icon": <DiPostgresql/>,
    "name": "PostGreSQL",
    "skill": "Intermadiete"
  },
  {
    "icon": <DiMysql/>,
    "name": "MySQL",
    "skill": "Intermadiete"
  }];

const Experience = () => {
  return (
     <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className='container experience__container'>
            <div className='frontend__container' data-aos="zoom-in" data-aos-easing="ease-out-cubic">
              <h3>Frontend Development</h3>
              <div className='experience__content'>
                {frontendContainer.map( (tech) => { return(
                  <article className='experience__details'>
                    <span className='experience__details-icons'>{tech.icon}</span>
                    <div>
                      <h4>{tech.name}</h4>
                      <small className='text-light'>{tech.skill}</small>
                    </div>
                  </article>
                )})}
              </div>
            </div>
            <div className='backend__container' data-aos="zoom-in" data-aos-easing="ease-out-cubic">
              <h3>Backend Development</h3>
              <div className='experience__content'>
                {backendContainer.map( (tech) => { return(
                  <article className='experience__details'>
                  <span className='experience__details-icons'>{tech.icon}</span>
                    <div>
                      <h4>{tech.name}</h4>
                      <small className='text-light'>{tech.skill}</small>
                    </div>
                  </article>
                )})}
              </div>
            </div>
        </div>
     </section>
  )
}

export default Experience