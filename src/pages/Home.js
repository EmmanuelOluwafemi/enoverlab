import React from 'react'
import About from '../components/About'
import Ads from '../components/Ads'
import Become from '../components/Become'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import What from '../components/What'

const Home = () => {
    return (
        <>
         <Ads />
         <Hero />
         <About />
         <Services />
         <Details />
         <What />
         <Become />
         <Testimonial />
         <Footer />   
        </>
    )
}

export default Home
