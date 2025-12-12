import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Pillar from './components/PillarSection'
import Schedule from './components/ScheduleSection'
import Showcase from './components/ShowcaseSection'
import Testimoni from './components/Testimoni'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Pillar />
      <Schedule />
      <Showcase />
      <Testimoni />
      <Footer />
    </div>
  )
}

export default App
