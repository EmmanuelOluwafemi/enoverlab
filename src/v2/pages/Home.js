import React from 'react'
import Become from '../components/Become'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import What from '../components/What'

const Home = () => {
    return (
        <>
         <Hero />
         <Pricing />
         <What />
         <Testimonial />
         <Become />
         <Footer />   
        </>
    )
}

export default Home
