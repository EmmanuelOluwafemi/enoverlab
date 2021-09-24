import React from 'react'
import PricingCard from './PricingCard'

import styled from "styled-components";
import List from './List';
import jordy from '../../assets/img/jordy.jpg'
import christina from '../../assets/img/christina.jpg'

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
    return (
        <StyledPricingWrapper id="plans">
            <StyledPricing>
                <PricingCard 
                    title="BASIC" 
                    objective="Learn the foundation of Product Management"
                >
                    {basic.map((item, index) => (
                        <List key={index} text={item} className="list-item" />
                    ))}
                </PricingCard>
                <div className="cost-duration">
                    <span className="duration">Duration: <b>4 Weeks</b> </span>
                    <span className="cost">Tuition: <b>N30,000</b></span>
                </div>

                <a className="enroll-link"
                    href="https://wa.me/2349063124595?text='Hello%20EnoverLab%20%0AI%20will%20like%20to%20enrol%20for%20Product%20Management%20Course."
                > Enroll for this plan
                </a>
                

            </StyledPricing>
            <img src={jordy} alt="" />
            

            <StyledPricing className="reverse-1">
                
                <img src={christina} alt="" />
                <Tools>
                    <h3>Tools you would be learning how to use</h3>
                    <ul>
                        <li>Product plan for creating roadmaps</li>
                        <li>Figma for creating prototypes</li>
                        <li>Trello for prioritization</li>
                        <li>Jira for task management</li>
                        <li>Google Analytics for tracking web-based data</li>
                    </ul>
                </Tools>
                <div className="cost-duration">
                    <span className="duration">Duration: <b>10 Weeks</b> </span>
                    <span className="cost">Tuition: <b>N100,000</b></span>
                </div>

                <a className="enroll-link"
                    href="https://wa.me/2349063124595?text='Hello%20EnoverLab%20%0AI%20will%20like%20to%20enrol%20for%20Product%20Management%20Course."
                > Enroll for this plan
                </a>
            </StyledPricing>

            <StyledPricing className="reverse-2">
                <hr/>
                <PricingCard primary
                    title="ADVANCE"
                    objective="Learn the core skills, frameworks and tools needed to become a Product Manager"
                >
                    {advance.map((item, index) => (
                        <List key={index} text={item} className="list-item" />
                    ))}

                    
                </PricingCard>
            </StyledPricing>
        </StyledPricingWrapper>
    )
}

export default Pricing

const StyledPricingWrapper = styled.div`
    max-width: 100vw;
    background: rgba(82, 222, 229, 0.05);
    padding: 3rem 12%;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10%;
    img {
        margin: auto auto;
    }
    hr {
        visibility: hidden;
    }
    @media (max-width: 774px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0;
        max-width: 100%;
        img {
            max-width: 100%;
        }
        hr {
            visibility: visible;
        }
        .reverse-1 {
            grid-row: 4;
            margin-top: 3rem;
        }
        .reverse-2 {
            grid-row: 3;
            margin-top: 3rem;
        }
    }
`;

const StyledPricing = styled.section`
    margin: 0 0;
    /* overflow: hidden; */
    height: auto;
    padding-bottom: 3rem;

    .cost-duration {
        display: flex;
        align-items: center;
        color: #34296B;
        .duration, .cost {
            border-radius: 100px;
            background: rgba(29, 182, 188, 0.3);
            height: 50px;
            padding: 15px 45px;
            white-space: nowrap;
            margin: 1rem 0;
            /* font-size: 18px; */
            /* font-weight: 700; */
        }
        .cost {
            margin-left: 22px;
            background: rgba(252, 217, 0, 0.3);
        }
    }
    .enroll-link {
        font-size: 1rem;
        color: #fff;
        line-height: 104%;
        padding: 1rem 0;
        background: #090C9B;
        box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
        margin-top: 2rem;
        text-decoration: none;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 195px;
        border-radius: 8px;

        .icons {
            margin-left: .8rem;
            font-size: 1.5rem;
        }

        &:hover {
            background: #fff;
            color: #090C9B;
        }
    }
    .list-item {
        display: flex;
        align-items: center;
        background: yellow;
    }
    @media (max-width: 774px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 6%;
        .cost-duration {
            display: flex;
            flex-direction: column;
            .cost {
                margin-left: auto;
            }
        }
        .enroll-link {
            margin: 1rem auto 1rem auto;
        }
    }
`

const Tools = styled.div`
    margin-top: 2rem;
    width: 100%;

    h6 {
        font-size: .85rem;
        font-weight: 700;
        font-family: 'nexabold', sans-serif;
        color: #090C9B;
        margin-bottom: 1rem;
    }

    ul {
        margin-top: 1rem;
        width: 100%;
        margin-left: 1rem;
        list-style-type: '- ';

        li {
            font-size: 22px;
            color: #1A1A1A;
            margin-bottom: .5rem;
        }
    }
`