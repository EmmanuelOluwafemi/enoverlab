import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
// import Ads from '../components/Ads'
import Become from '../components/Become'
// import Details from '../components/Details'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Tools from '../components/Tools'
import What from '../components/What'
import VideoSlider from '../components/VideoSlider'

const Home = () => {
    return (
        <>
         {/* <Ads /> */}
         <Banner />
         <Hero />
         <About />
         
         <Services />
         {/* <Details /> */}
        <VideoSlider/>
         <What />
         <Become />
         <Tools />
         <Testimonial />
         <Footer />   
        </>
    )
}

export default Home
