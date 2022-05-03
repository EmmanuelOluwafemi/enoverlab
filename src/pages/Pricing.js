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
    "Competitive Market Analysis" ,
    "Understanding Agile and Scrum processes" ,
    "Product Vision" ,
    "Product Metrics: define, track, analyse and measure success" ,
    "Product Strategy: increasing the business viability of the product" ,
    "Product Prioritization" ,
    "Product Roadmap: connect the product vision, strategy, and development process in line with metrics" ,
    "Basics of UIUX Design: design thinking process, using Figma and creating prototypes" ,
    "Minimum Viable Product (MVP)" ,
    "Product Launch: strategically releasing the product to the marketplace" ,
    "Product Growth: systems to drive growth for the product " ,
    "Stakeholder Management: working effectively with multiple teams" ,
    "Prepare for the PM role workplace" ,
    "Certificate of completion" ,
]

const Pricing = () => {
    window.scrollTo(0, 0);
    return (
        <StyledPricingWrapper>
             <div className="adbox">
                <div className="text-box-1">
                    <h3 className='web-text'>Admission closing soon; <br/> Classes start on the <br/> 9th of May</h3>
                    <h3 className='mobile-text'>Admission closing soon; Classes start on the  9th of May</h3>
                </div>
                <div className="text-box-2">
                    <img className="triangleWeb" src={triangle} alt="" />
                    <img src={triangleMobile} className="triangleMobile" alt="" />
                </div>
                <div className="text-box-3">
                    <p className='web-text'>Installment payment option available<br/> <span>Enroll below</span></p>
                    <p className='mobile-text'>Installment payment option available <br/> <span>Enroll below</span></p>
                </div>
            </div>
            <Header />
            <StyledPricing>
                <PricingCard 
                    title="BASIC PROGRAM (4 WEEKS)" 
                    price="₦30,000"
                    subtitle="Learn the foundation of Product Management"
                    enrolText="Enrol Now"
                >
                    {basic.map((item, index) => (
                        <List key={index} text={item} />
                    ))}
                </PricingCard>

                <PricingCard primary
                    title="ADVANCE PROGRAM (10 WEEKS)"
                    price="₦100,000"
                    subtitle="Learn the core skills, frameworks and tools needed to become a Product Manager"
                    enrolText="Enrol Now"
                >
                    {advance.map((item, index) => (
                        <List key={index} text={item} />
                    ))}

                    <Tools>
                        <h6>Tools you would be learning how to use</h6>
                        <ul>
                            <li>Productplan for creating roadmaps</li>
                            <li>Figma for creating prototypes</li>
                            <li>Trello for prioritization</li>
                            <li>Jira for task management</li>
                            <li>Google Analytics for tracking web-based data</li>
                        </ul>
                    </Tools>
                </PricingCard>
            </StyledPricing>
            <Cta />
            <VideoSlider/>
            <Footer/>
        </StyledPricingWrapper>
    )
}

export default Pricing

const StyledPricingWrapper = styled.div`
    width: 100%;
    padding: 3  rem 0;

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
        }
        .text-box-1{
            background-color: #1DB6BC;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            
         @media(max-width: 768px) {
            width: 100%;
            height: 30vh;
            padding: 0rem 0.5rem;    
        }
            .web-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                font-size: 2rem;
                @media(max-width: 768px) {
                    font-size: 2.0rem;
                    display: none;
             } 
            }
            .mobile-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                display: none;
                font-size: 1.5rem;
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
            width: 60%;
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
                line-height: 1.7rem;
                display: none;
                text-align: center;
                span{
                    background-color: #1DB6BC;
                    color: #0E1098;
                    padding: 0.2rem;
                    font-weight: 800;
                    line-height: 6rem;
                 
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
    max-width: 774px;
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

    h6 {
        font-size: .85rem;
        font-weight: 700;
        font-family: 'nexabold', sans-serif;
        color: #090C9B;
        margin-bottom: .5rem;
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