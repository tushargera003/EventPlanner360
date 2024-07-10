import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Offer from '../../components/Offer/Offer'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Offer />
            <Contact />
            <Footer/>
        </>
    )
}

export default Home