import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components";

import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = ({ pricing }) => {
    return (
        <StyledFooter>
            <div className="cta">
                <div className="text-content">
                    <h3>Important Info</h3>
                    <ul>
                        <li>All classes are held online via Google Meet.</li>    
                        <li>Class holds twice a week at selected days.</li>    
                        <li>Each class runs for 2 hrs between 8 - 10pm.</li>    
                    </ul>
                    
                    <h4
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                    >Installment Payment is also Available</h4>
                    {
                        !pricing ? (
                            <Link 
                                data-aos="fade-left" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500" 
                                data-aos-delay="300"
                            to="/pricing">
                                Enrol Now
                            </Link>): (
                            <a 
                                data-aos="fade-left" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500" 
                                data-aos-delay="300"
                                href="https://chat.whatsapp.com/D4zeW75paNi4I3dxFXOgRp"
                            >
                                Enrol Now
                            </a>
                            )
                    }
                </div>
            </div>

            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://instagram.com/enoverlab?utm_medium=copy_link">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://twitter.com/enoverlab?s=08">
                        <FaTwitter className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/enoverlab">
                        <FaLinkedinIn className="icon" />
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
        margin-top: 5rem;
    }
    
    .cta {
        width: 100%;
        padding: 0 10%;
        background: #090C9B;
        min-height: 381px;
        margin-bottom: 4rem;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            min-height: 500px;
            padding: 0 6%;
        }
        
        .text-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h3 {
                font-size: 1.5rem;
                font-weight: 400;
                color: #f2f2f2;
                text-align: center;
                margin-bottom: 1rem;
            }

            ul {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: 1.5rem;

                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 2rem;
                }

                
                li {
                    margin-left: 2rem;
                    font-size: 1rem;
                    color: #c2c2c2;

                    @media (max-width: 768px) {
                        margin-left: 0;
                        margin-bottom: 1rem;
                        font-size: 0.9rem;
                    }

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }

            h4 {
                font-size: 2.5rem;
                font-weight: 400;
                color: #fff;
                max-width: 670px;
                text-align: center;
                text-transform: capitalize;
                line-height: 1.7;

                @media (max-width: 768px) {
                    font-size: 1.75rem;
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