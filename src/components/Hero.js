import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import "aos/dist/aos.css";
import styled from "styled-components";

import logo from "../assets/img/logo.svg";
import banji from "../assets/img/banji.svg";
import heroImg from "../assets/img/heroImg.png";

import { HiMenuAlt4 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';

const Hero = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <StyledHero>
            <div className="header">
                <img className="logo" src={logo} alt="enoverlab logo" />
                <HiMenuAlt4 className="first-icon" onClick={() => setActive(!active)} />

                <div className={active ? "contact active" : "contact"}>
                    <div className="title">Contact Us</div>
                    <a href="tel:08135369680">08135369680</a>
                    <GrFormClose onClick={() => setActive(!active)} className="icon" />
                </div>
            </div>

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
    background: rgba(82, 222, 229, 0.05);
    padding: 3rem 0;

    @media (max-width: 768px) {
        max-height: auto;
        overflow-x: hidden;
    }

    .header {
        padding: 0 9%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .first-icon {
            font-size: 1.8rem;
            color: #000;
            cursor: pointer;
        }
    
        .logo {
    
            @media (max-width: 768px) {
                width: 120px;
                height: auto;
            }
        }

        .contact {
            position: absolute;
            top: 0;
            right: -15%;
            padding: 1.5rem 2rem;
            padding-right: 3.5rem;
            background: #fff;
            display: none;

            &.active {
                right: 7%;
                display: block;

                @media (max-width: 768px) {
                    right: -1rem;
                    padding-right: 1.5rem;
                    top: -1rem;
                }
            }

            .icon {
                position: relative;
                top: -2rem;
                right: -12%;
                cursor: pointer;
                font-size: 1.5rem;

                @media (max-width: 768px) {
                    top: -3rem;
                    right: 2rem;
                }
            }

            .title {
                font-size: 1rem;
                font-weight: 400;
                color: #000;
            }

            a {
                font-size: 1.25rem;
                font-weight: 700;
                color: #090C9B;
                text-decoration: none;
            }
        }
    }

    .content-section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 4rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        img.hero {
            width: 100%;
            heigt: auto;
        }

        .content {
            padding-left: 18%;

            @media (max-width: 768px) {
                padding: 0 6%;
            }

            button {
                padding: .85rem 2.2rem;
                border: none;
                border-radius: 100px;
                background: rgba(9, 12, 155, 0.1);
                color: #12169B;
                font-size: 1rem;
                font-weight: 600;
                margin-top: 2rem;
                font-family: 'nexaregular';

                @media (max-width: 768px) {
                    margin-top: 0;
                    font-size: .8rem;
                }
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 800;
                color: #090C9B;
                max-width: 574px;
                margin-top: 2.5rem;
                line-height: 1.1;
                font-family: 'nexaHeavy';

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                    line-height: 1.3;
                    margin-top: 1.5rem;
                }
            }
            
            p {
                font-size: 1.25rem;
                font-weight: 300;
                color: #090C9B;
                margin-top: 1.3rem;
                max-width: 423px;
                line-height: 1.5;
                font-family: 'nexalight';

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