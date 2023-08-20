import React from 'react'
import './portfolio.css';
import Electronetics from '../../assets/images/portfolio/ElectroNetics.png'
import Legenybucsu from '../../assets/images/portfolio/legenybucsu.png'
import RitaMotivator from '../../assets/images/portfolio/RitaMotivator.png'
import TaplaloTudas from '../../assets/images/portfolio/Taplalotudas.png'
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
      "name": "Digital Diary (WIP)",
      "image": DigitalDiary,
      "description": "React based web application with Spring boot backend to create a bullet journey website.",
      "github_url": "https://github.com/ddave5/digitaldiary",
    },
    {
      "id": 4,
      "name": "Tápláló tudás (WIP)",
      "image": TaplaloTudas,
      "description": "React based web application for a portfolio website.",
      "github_url": "https://github.com/ddave5/TaplaloTudas",
      "live_url": "https://taplalotudas.web.app/"
    },
    {
      "id": 5,
      "name": "Legénybúcsú",
      "image": Legenybucsu,
      "description": "React based web application for bachelor party. It alse has a bachelorette types.",
      "github_url": "https://github.com/ddave5/legenybucsu",
      "live_url": "https://legenybucsu-2022.web.app/"
    },
    {
      "id": 6,
      "name": "RitaMotivátor",
      "image": RitaMotivator,
      "description": "React based web application for my girlfriend to be motivated.",
      "github_url": "https://github.com/ddave5/ritamotivator",
      "live_url": "https://ritamotivator.web.app/"
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