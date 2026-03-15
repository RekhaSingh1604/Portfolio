import React from 'react'
import Hero from './Hero.jsx'
import About from './About'
import Skills from './Skills'
import Resume from './Resume'
import ContactInfo from './Contact'
import Project from './Project.jsx'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Project/>
    <Skills/>
    <Resume/>
    <ContactInfo/>
    </>
  )
}

export default Home
