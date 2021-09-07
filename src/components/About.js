import React from 'react'
import styled from 'styled-components'

import aboutImg from '../assets/img/aboutImae.jpg'

const About = () => {
    return (
        <StyledAbout id="about">
            <img 
                data-aos="fade-right" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                src={aboutImg} 
                alt="about section" 
            />
            <div className="content">
                <h6
                    data-aos="fade-left" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500" 
                    data-aos-delay="300"
                >About Us</h6>
                <h1
                    data-aos="fade-left" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500" 
                    data-aos-delay="600"
                >Become A Highly-Skilled Product Manager</h1>
                <p
                    data-aos="fade-left" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500" 
                    data-aos-delay="900"
                >
                    Grooming talents with the product management skill set to build thriving products.
                    Enoverlab is building product managers who will innovate products to deliver increasing 
                    value to users and drive business growth for organisations.
                    Our mission is to groom talents with the skill set to build products 
                    that will thrive into the future.
                    <br />
                    <br />
                    Join us as we influence the future today.
                </p>
            </div>
        </StyledAbout>
    )
}

export default About

const StyledAbout = styled.section`
    max-width: 100vw;
    padding: 0 6%;
    display: grid;
    grid-template-columns: 45% 50%;
    grid-gap: 2rem;
    padding-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }

    img {
        width: 100%;
        height: auto;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h6 {
            font-size: 1.5rem;
            font-weight: 400;
            color: #52DEE5;
            margin-bottom: 2.5rem;

            @media (max-width: 768px) {
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }
        }

        h1 {
            color: #090C9B;
            font-size: 2.7rem;
            font-family: 'nexablack', sans-serif;
            font-weight: 900;
            line-height: 1.4;

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        p {
            font-size: 1.25rem;
            font-weight: 400;
            color: #414957;
            line-height: 1.5;
            margin-top: 2rem;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }
    }
`;