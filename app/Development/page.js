import React from 'react'

import Hero from './web/hero/hero'
import Services from './web/services/services'
import About from './web/about/about'
import Team from './web/team/team'
import Techno from './web/techno/techno'
import Contact from './web/contact/contact'

import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'

import "./development.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Development() {
  return (
    <>
      <div className='development'>
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Team />
        <Techno />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
