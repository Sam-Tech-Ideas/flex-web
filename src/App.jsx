import React from 'react'
import About from './About'
import Developers from './Developers'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Subscribe from './Subscribe'

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Developers/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default App