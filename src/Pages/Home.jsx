import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Perpose from '../Components/Perpose'
import Cards from '../Components/Cards'
import AboutDeveloper from '../Components/AboutDeveloper'


function Home() {
    return (
        <div>
            <Header />
            <About />
            <Perpose />
            <Cards />
            <AboutDeveloper />
        </div>
    )
}

export default Home