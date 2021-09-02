import React, { useEffect } from 'react'

import AOS from 'aos';
import "aos/dist/aos.css";
import styled from "styled-components";

import logo from "../assets/img/logo.svg";
import banji from "../assets/img/banji.svg";
import heroImg from "../assets/img/heroImg.png";

const Hero = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <StyledHero>
            <img className="logo" src={logo} alt="enoverlab logo" />

            <div className="content-section">
                <div className="content">
                    <button 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                    >FREE AMA SESSION</button>
                    <h1
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >How to transition <br />into Product Management</h1>
                    <p
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >What you need to know to start building a career as a Product Manager</p>

                    <div 
                        className="speaker"
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="600"
                    >
                        <img src={banji} alt="banji's face" />
                        <div className="speakers-details">
                            <div className="title">Speaker</div>
                            <div className="name">EWENLA OLABANJI</div>
                            <div className="position">Snr Product Manager, Perxels</div>
                        </div>
                    </div>

                    <a href="https://forms.gle/gGfWTd9bQvP9SGZz8"
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="800"
                    >REGISTER HERE</a>
                </div>
                <img
                    data-aos="fade-left" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="1000"
                    className="hero" 
                    src={heroImg} 
                    alt="hero" 
                />
            </div>
        </StyledHero>
    )
}

export default Hero

const StyledHero = styled.section`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    max-width: 100vw;
    background: #fff;
    padding: 3rem 6%;

    @media (max-width: 768px) {
        max-height: auto;
    }

    .logo {

        @media (max-width: 768px) {
            width: 160px;
            height: auto;
        }
    }

    .content-section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 4rem;
        position: relative;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        img.hero {
            position: absolute;
            right: -6.8%;

            @media (max-width: 768px) {
                position: static;
                width: 100%;
                heigt: auto;
            }
        }

        .content {
            button {
                padding: .85rem 2.2rem;
                border: none;
                border-radius: 100px;
                background: rgba(9, 12, 155, 0.1);
                color: #12169B;
                font-size: 1rem;
                font-weight: 600;

                @media (max-width: 768px) {
                    font-size: .8rem;
                }
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 800;
                color: #090C9B;
                max-width: 574px;
                margin-top: 2.5rem;
                line-height: 1.3;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                    line-height: 1.1;
                    margin-top: 1.5rem;
                }
            }
            
            p {
                font-size: 1.25rem;
                font-weight: 400;
                color: #090C9B;
                margin-top: 1.5rem;
                max-width: 473px;
                line-height: 1.5;

                @media (max-width: 768px) {
                    font-size: .9rem;
                    line-height: 1.4;
                }
            }

            .speaker {
                display: flex;
                align-items: center;
                margin-top: 1.4rem;

                .speakers-details {
                    margin-left: 1rem;

                    .title {
                        font-size: .6rem;
                        font-weight: 400;
                        color: #575757;
                    }

                    .name {
                        font-size: 1rem;
                        font-weight: 700;
                        color: #272727;
                        letter-spacing: 0.05em;
                    }

                    .position {
                        font-size: .7rem;
                        font-weight: 400;
                        color: #090C9B;
                    }
                }
            }

            a {
                font-size: 1.125rem;
                color: #090C9B;
                line-height: 104%;
                letter-spacing: 0.02em;
                padding: 1.2rem 2.2rem;
                background: #52DEE5;
                box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
                display: inline-block;
                margin-top: 2rem;
                text-decoration: none;
                font-weight: 700;

                &:hover {
                    background: rgba(9, 12, 155, 0.1);
                }
            }
        }
    }
`;