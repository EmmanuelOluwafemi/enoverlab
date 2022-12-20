import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
// import Ads from '../components/Ads'
// import Become from '../components/Become'
// import Details from '../components/Details'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
// import Tools from '../components/Tools'
import What from '../components/What'
import VideoSlider from '../components/VideoSlider'
import DiscountBanner from '../components/DiscountBannerNew'

const Home = () => {
    return (
        <>
         {/* <Ads /> */}
          {/* <Banner /> */}
         {/* <DiscountBanner/> */}
         <Hero />
         <About />
         
         <Services />
         {/* <Details /> */}
        <VideoSlider/>
        <Testimonial />
 
         <What />
         {/* <Become /> */}
         {/* <Tools /> */}
               <Footer />   
        </>
    )
}

export default Home
