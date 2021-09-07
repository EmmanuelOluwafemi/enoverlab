import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components";

import joyce from "../assets/img/joyce.jpg";

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <StyledFooter>
            <div className="cta">
                <div className="text-content">
                    <h4
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                    >Learn the skills to build products that will thrive into the future</h4>
                    <Link 
                        data-aos="fade-left" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500" 
                        data-aos-delay="300"
                    to="/contact">
                        Join Us
                    </Link>
                </div>
                <img 
                    data-aos="fade-right" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500" 
                    data-aos-delay="600"
                src={joyce} alt="joyce" />
            </div>

            <div className="footer-content">
                <div className="social-icons">
                    <a href="facebook.com">
                        <FaFacebookF className="icon" />
                    </a>
                    <a href="facebook.com">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="facebook.com">
                        <FaTwitter className="icon" />
                    </a>
                </div>
                <div className="footer-note">
                    Copyright@enoverlab
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    margin-top: 8rem;
    overflow-x: hidden;
    max-width: 100vw;

    @media (max-width: 768px) {
        margin-top: 3rem;
    }
    
    .cta {
        width: 100%;
        padding: 0 10%;
        background: #090C9B;
        min-height: 381px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        margin-bottom: 8rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 2rem;
            padding: 3rem 10%;
            margin-bottom: 3rem;
        }
        
        .text-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h4 {
                font-size: 2.2rem;
                font-weight: 400;
                color: #fff;
                max-width: 448.38px;
                text-transform: capitalize;
                line-height: 1.7;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                }
            }

            a {
                margin-top: 2.2rem;
                color: #090C9B;
                text-decoration: none;
                background: #52DEE5;
                max-width: 193px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'nexabold';
            }
        }

        img {
            position: absolute;
            right: 20%;
            top: -38px;
            width: 100%;
            height: auto;
            max-width: 399px;

            @media (max-width: 768px) {
                position: static;
            }
        }
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .social-icons {
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background: #090C9B;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                
                &:last-child {
                    margin-right: 0;
                }

                &:hover {
                    background: #52DEE5;
                }

                .icon {
                    font-size: 1rem;
                    color: #fff;
                }
            }
        }

        .footer-note {
            margin-top: 2rem;
            font-size: 1rem;
            color: #090C9B;
            text-align: center;
        }
    }
`