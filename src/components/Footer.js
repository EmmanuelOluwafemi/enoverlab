import React from 'react'

import styled from "styled-components";

import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const  Footer = ({ pricing }) => {
    return (
        <StyledFooter>
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