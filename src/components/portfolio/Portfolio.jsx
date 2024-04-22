import React from 'react'
import './portfolio.css';
import Electronetics from '../../assets/images/portfolio/ElectroNetics.png'
import DigitalDiary from '../../assets/images/portfolio/DigitalDiary.png'

const Portfolio = () => {

  const portfolios = [
    {
      "id": 1,
      "name": "Electro Netics Kft.",
      "image": Electronetics,
      "description": "HTML/CSS/JS based single page portfolio website.",
      "github_url": "https://github.com/ddave5/ElectroNetics",
      "live_url": "https://electronetics.hu/"
    },
    {
      "id": 2,
      "name": "Electro Netics Kft. V2",
      "image": Electronetics,
      "description": "React based web application for Electro Netics Kft. It is reshaped and restuctured.",
      "github_url": "https://github.com/ddave5/electroneticsv2",
      "live_url": "https://electroneticsv2.web.app/"
    },
    {
      "id": 3,
      "name": "Electro Netics Kft. Next.JS",
      "image": Electronetics,
      "description": "Next JS based web application for Electro Netics Kft. It is ported from the React project.",
      "github_url": "https://github.com/ddave5/electroneticsnext",
      "live_url": "https://electroneticsnext.web.app/"
    },
    {
      "id": 4,
      "name": "Digital Diary (WIP)",
      "image": DigitalDiary,
      "description": "React based web application with Spring boot backend to create a bullet journey website.",
      "github_url": "https://github.com/ddave5/digitaldiary",
    }
  ];


  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {portfolios.map( (portfolio) => {
          return(
                <article className='portfolio__item' data-aos="zoom-in">
                  <div className='portfolio__item-image'>
                    <img src={portfolio.image} alt="Electronetics" />
                  </div>
                  <h3>{portfolio.name}</h3>
                  <p className='portfolio__item-description'>{portfolio.description}</p>
                  <div className="portfolio__item-cta">
                    <a href={portfolio.github_url} className='btn' target='_blank' rel="noreferrer"> Github </a>
                    {portfolio.name !== "Digital Diary (WIP)" && (<a 
                      href={portfolio.live_url} 
                      className='btn btn-primary' 
                      target='_blank' 
                      rel="noreferrer"> Live Demo </a>)}
                  </div>
                </article>
          )})}
      </div>
    </section>
  )
}

export default Portfolio