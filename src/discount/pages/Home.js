import React from 'react'
import Become from '../components/Become'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import What from '../components/What'
import ClassStart from '../components/ClassStart'

const Home = () => {
    window.scrollTo(0, 0);
    return (
        <>
         <Hero />
         <Pricing />
         <What />
         <ClassStart />
         <Testimonial />
         <Become />
         <Footer />   
        </>
    )
}

export default Home
