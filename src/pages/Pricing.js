import React from 'react'
import PricingCard from '../components/PricingCard'
import VideoSlider from '../components/VideoSlider';
import styled from "styled-components";
import List from '../components/List';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            <Header />
            <StyledPricing>
                <PricingCard 
                    title="BASIC PROGRAM (4 WEEKS)" 
                    price="₦30,000"
                    subtitle="Learn the foundation of Product Management"
                >
                    {basic.map((item, index) => (
                        <List key={index} text={item} />
                    ))}
                </PricingCard>

                <PricingCard primary
                    title="ADVANCE PROGRAM (10 WEEKS)"
                    price="₦100,000"
                    subtitle="Learn the core skills, frameworks and tools needed to become a Product Manager"
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
            <VideoSlider/>
            <Footer pricing />
        </StyledPricingWrapper>
    )
}

export default Pricing

const StyledPricingWrapper = styled.div`
    width: 100%;
    padding: 2rem 0;
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