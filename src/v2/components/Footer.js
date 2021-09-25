import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components";

// import { FaLinkedinIn } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';

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
                    to="/pmcourse/enrol">
                        Enrol Now
                    </Link>
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
        margin-bottom: 4rem;
        display: flex;
        align-items: center;
        
        .text-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h4 {
                font-size: 2.2rem;
                font-weight: 400;
                color: #fff;
                max-width: 670px;
                text-align: center;
                text-transform: capitalize;
                line-height: 1.7;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                }
            }

            a {
                font-size: 1rem;
                color: #090C9B;
                line-height: 104%;
                letter-spacing: 0.02em;
                padding: 1rem 0;
                background: #52DEE5;
                box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
                display: inline-block;
                margin-top: 2rem;
                text-decoration: none;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                max-width: 195px;

                .icons {
                    margin-left: .8rem;
                    font-size: 1.5rem;
                }

                &:hover {
                    background: rgba(9, 12, 155, 0.1);
                    color: #fff;
                }
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