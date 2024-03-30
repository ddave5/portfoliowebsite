import React, { Suspense } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Opening from './components/opening/Opening'
import ScrollEffect from './components/scrolleffect/ScrollEffect';
import LoadingScreen from './components/loadingScreen/LoadingScreen'

const App = () => {

  return (
    <React.Fragment >
      <ScrollEffect/>
      <Nav/>
      <Suspense fallback={<LoadingScreen />} >
        <div id='home' className='home'>
          <Opening/>
          <Header/>
          <About/> 
          <Experience/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </div>
      </Suspense>
      <LoadingScreen />
    </React.Fragment>
  )
}

export default App