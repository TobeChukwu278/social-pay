import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import Objectives from '../components/Objectives'
import ToolSlider from '../components/ToolSlider'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const LandPage = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Objectives />
            <ToolSlider />
            <Faq />
            <Footer />
        </div>
    )
}

export default LandPage