import React from 'react'
import Cta from '../components/Cta';
import List from '../components/List';
import styled from "styled-components";
import Footer from '../components/Footer';
import Header from '../components/Header';
import PricingCard from '../components/PricingCard'
import VideoSlider from '../components/VideoSlider';
import triangle from '../assets/img/triangle.svg'
import triangleMobile from "../assets/img/triangleMobile.png"
import analyticsLogo from '../assets/img/logos/analytics-logo.png'
import figmaLogo from '../assets/img/logos/Figma-logo.png'
import hotjar from '../assets/img/logos/hotjar.svg'
import jiraLogo from '../assets/img/logos/jira.png'
import trelloLogo from '../assets/img/logos/trello-logo.png'
import productPlan from '../assets/img/logos/productplan-logo.svg'

import TestimVid from '../components/TestimVid';


const basic = [
    "Introduction to Product Management" ,
    "Product thinking" ,
    "Understanding Product Lifecycle" ,
    "Conducting user research" ,
    "Creating user personas" ,
    "Writing user stories" ,
    "Competitive Market Analysis" ,
    "Mock Interviews: showcasing your skills" ,
    "Positioning yourself for Internships and APM roles" ,
    "Certificate of Completion" ,
]

const advance = [
  
    "Introduction to product management, product thinking, and understanding product life-cycle" ,
    "Customer development: understanding users, conducting user research; creating user personas, writing user stories and user segmentation" ,
    "Competitive Market Analysis",
    "Minimum Viable Product (MVP)" ,
    "Product Metrics: define, track, analyse and measure success" ,
    "Product Strategy: increasing the business viability of the product" ,
    "Product Prioritization" ,
    "Product Roadmap: connect the product vision, strategy, and development process in line with metrics" ,
    "Basics of UIUX Design: design thinking process, using Figma and creating prototypes" ,
   
    "Product Launch: strategically releasing the product to the marketplace" ,
    "Product Growth: systems to drive growth for the product " ,
    "Stakeholder Management: working effectively with multiple teams" ,
    "Prepare for the PM role workplace" ,
    "Certificate of completion" ,
]

const blitz = [
    "Learn the most important aspect of product management based on your need",
    "One-on-one training and mentorship",
    "Personalized classes",
    "Access to exclusive product management resources",
    " Work on real-life case study",
    "After training support and guidance"
]


const Pricing = () => {
    window.scrollTo(0, 0);
    return (
        <StyledPricingWrapper>
             <div className="adbox">
                <div className="text-box-1">
                    <h3 className='web-text'>In-depth training and mentorship for aspiring product managers<br/></h3>
                  
                    <h3 className='mobile-text'>In-depth training and mentorship for aspiring product managers<br/><span></span></h3>
                </div>
                <div className="text-box-2">
                    <img className="triangleWeb" src={triangle} alt="" />
                    <img src={triangleMobile} className="triangleMobile" alt="" />
                </div>
                <div className="text-box-3">
                    <p className='web-text'>Learn everything you need to launch your career in product management<br/>  <span>Enroll below</span></p>
                    <p className='mobile-text'>Learn everything you need to launch your career in product management<br/><span>Enroll below</span></p>
                </div>
            </div>
            <Header />
            <StyledPricing>
                <PricingCard 
                    title="BASIC PROGRAM" 
                    price="???40,000"
                    weeks="(4 weeks)"
                    subtitle="For those who want to understand the fundamentals of product management"
                    enrolText="Enrol Now"
                >
                    {basic.map((item, index) => (
                        <List key={index} text={item} />
                    ))}
                </PricingCard>

                <PricingCard primary
                    title="ADVANCE PROGRAM"
                    weeks="(10 weeks)"
                    price="???120,000"
                    // discount="???120,000"
                    subtitle="For those who want to learn all the required product management skills to launch their product manager career"
                    enrolText="Enrol Now"
                >
                    {advance.map((item, index) => (
                        <List key={index} text={item} />
                    ))}

                    <Tools>
                        <h6>Tools you would be learning how to use</h6>
                        <div className="tools-container">
                        <div className="tools-list">
                            <div className="tools">
                                <img src={analyticsLogo} alt="analytics" />
                            </div>
                            <div className="tools">
                                <img src={figmaLogo} alt="figma" />
                            </div>
                            <div className="tools">
                                <img src={hotjar} alt="hotjar" />
                            </div>
                        </div>
                        <div className="tools-list">
                            <div className="tools">
                                <img src={jiraLogo} alt="jira" />
                            </div>
                            <div className="tools">
                                <img src={trelloLogo} alt="trello" />
                            </div>
                            <div className="tools">
                                <img src={productPlan} alt="trello" />
                            </div>
                        
                        </div>
                        </div>
                        {/* <ul>
                            <li>Productplan for creating roadmaps</li>
                            <li>Figma for creating prototypes</li>
                            <li>Trello for prioritization</li>
                            <li>Jira for task management</li>
                            <li>Google Analytics for tracking web-based data</li>
                        </ul> */}
                    </Tools>
                </PricingCard>

                {/* <PricingCard 
                    title="BLITZ PROGRAM" 
                    price="???200,000"
                    weeks="(4-6 weeks)"
                    subtitle="For experienced professionals who want personalized product management training"
                    enrolText="Enrol Now"
                >
                    {blitz.map((item, index) => (
                        <List key={index} text={item} />
                    ))}
                </PricingCard> */}
            </StyledPricing>
            <Cta />
            <VideoSlider/>
            {/* <TestimVid/> */}
            <Footer/>
        </StyledPricingWrapper>
    )
}

export default Pricing

const StyledPricingWrapper = styled.div`
    width: 100%;
    padding: 0rem 0 3rem 0;

    .adbox {
        /* padding: 3.3rem 12rem 4.4rem 5rem; */
        /* min-height: 183px; */
        box-sizing: border-box;
        display: flex;
        width: 100%;
        margin-bottom: 3rem;
        @media(max-width: 768px) {
            flex-direction: column;
            height: 75vh;
            margin-bottom: 0rem;
        }
        .text-box-1{
            background-color: #1DB6BC;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0rem 1.2rem 0rem 1.5rem;

         @media(max-width: 768px) {
            width: 100%;
            height: 30vh;
            padding: 0rem 0.9rem;    
        }
            .web-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                font-size: 2rem;
                padding-top: .5rem;
                
                @media(max-width: 768px) {
                    font-size: 2.0rem;
                    display: none;
             } 

             .span{
                font-weight: 600;
             }
            }
            .mobile-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                display: none;
                line-height: 2rem;
                font-size: 1.5rem;
                span{
                    font-weight: 600;
                }
                @media(max-width: 768px) {
                    display: block;
                    text-align: center;
                }   
            }
        } 


        .text-box-2{
          background-color: #1DB6BC;
          height: auto;
          width: auto;
        .triangleWeb{
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (max-width:768px) {
                display: none;
                /* transform: rotate(90deg); */
            }
        }
        .triangleMobile{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: none;
            @media (max-width:768px) {
                display: block;
                /* display: none; */
            }
        }  

        }
        
        
        .text-box-3{
            background: #0E1098;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            @media(max-width: 768px) {
            width: 100%;
            height: 30vh;
            padding: 1.2rem;
             }
            .web-text{
                font-family: 'Montserrat', 'sans-serif';
                font-size: 1.7rem;
                color: #fff;
                line-height: 2.5rem;
                span{
                    background-color: #1DB6BC;
                    color: #0E1098;
                    padding: 0.2rem;
                    font-weight: 800;
                    line-height: 3rem;
                }
                @media(max-width: 768px) {
                    font-size: 1.5rem;
                   
                    display: none;
             }
            }
            .mobile-text{
                font-family: 'Montserrat', 'sans-serif';
                font-size: 1.3rem;
                color: #fff;
                line-height: 2rem;
                display: none;
                text-align: left;
                text-align: center;
                span{
                    background-color: #1DB6BC;
                    color: #0E1098;
                    padding: 0.2rem;
                    font-weight: 800;
                    line-height: 6rem;
                    text-align: center;
                   
                }
                @media(max-width: 768px) {
                        display: block;
                }
            }
        }
    }
`;

const StyledPricing = styled.section`
    width: 100%;
    max-width: 790px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    margin: 0 auto;
    margin-top: 4rem;

    @media (max-width: 774px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 6%;
    }
`

const Tools = styled.div`
    width: 100%;

    .tools-container{
        display: flex;
        column-gap: 3rem;
        justify-content: center;
    }

    h6 {
        font-size: 1rem;
        font-weight: 800;
        font-family: 'nexabold', sans-serif;
        color: #090C9B;
        margin-bottom: .5rem;
    }

    .tools-list {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        .tools{
            display: flex;
            column-gap: .5rem;
            font-size: 0.875rem;
            font-weight: normal;
            width: 5rem;
            height: 5rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    ul {
        width: 100%;
        margin-left: 1rem;

        li {
            font-size: .75rem;
            color: #090C9B;
            margin-bottom: .5rem;
        }
    }
`