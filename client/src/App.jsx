import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceTrailerOffer from './components/ExperienceTrailerOffer'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <Hero/>
        <ExperienceTrailerOffer/>
        <Footer/>
      </div>
  )
}

export default App
