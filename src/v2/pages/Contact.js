import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';

import { IoCall } from 'react-icons/io5';
import { RiWhatsappFill } from 'react-icons/ri';
import { IoMail } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Modal from '../components/Modal';

const Contact = () => {

        const scriptUrl = "https://script.google.com/macros/s/AKfycbxSXjrzw_lMCpy7x0zj-t-Of0lf5rqQ0CNrsmXElBxvqQ8Sp2Hu41AB4EF_g38A_s7Hmg/exec";

        const [loading, setLoading] = useState(false)
        const [active, setActive] = useState(false);

        const formRef = useRef(null)

        const handleSubmit = (e) => {
                e.preventDefault()
                setLoading(true)

                fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
                .then(res => {
                    setLoading(false)
                    setActive(true)
                })
                .catch(err => console.log(err))
        }

    return (
        <StyledContact>
            <Modal active={active} setActive={setActive} />
            <Header />
            <StyledHeader>
                <div className="title-container">
                    <div 
                        data-aos="fade-left" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                    className="title">Contact Us</div>
                </div>
            </StyledHeader>
            <ContactFormContainer>
                <div className="text-content">
                    <div 
                        className="quote"
                        data-aos="fade-left" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500" 
                        data-aos-delay="300"
                    >
                        Do you have any questions, Would you like 
                        to learn more? We are just a message away
                    </div>

                    <div className="contact"
                        data-aos="fade-left" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500" 
                        data-aos-delay="600"
                    >
                        <div className="contact-list">
                            <IoCall className="icon" />
                            <div className="contact-content">+234 90 63124595</div>
                        </div>
                        <div className="contact-list">
                            <RiWhatsappFill className="icon" />
                            <div className="contact-content">+234 90 63124595</div>
                        </div>
                        <div className="contact-list">
                            <IoMail className="icon" />
                            <div className="contact-content">enoverlab@gmail.com</div>
                        </div>
                    </div>

                    <a 
                        className="social" href="instagram.com"
                        data-aos="fade-left" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500" 
                        data-aos-delay="900"
                    >
                        <FaInstagram className="icon" />
                    </a>
                </div>

                <form
                    ref={formRef}
                    data-aos="fade-left" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500" 
                    data-aos-delay="1200"
                    onSubmit={handleSubmit}
                    name="forms"
                >
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Phone Number</label>
                        <input type="text" name="number" id="number" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" id="message" placeholder="I am interested in joining Enoverlab..." />
                    </div>

                    <div className="button-container">
                        <button type="submit">{loading ? "Loading..." : "SEND MESSAGE"}</button>
                    </div>
                </form>
            </ContactFormContainer>
            <Footer>
                {/* <div className="social-icons">
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
                </div> */}
            </Footer>
        </StyledContact>
    )
}

export default Contact

const StyledContact = styled.section`
    padding-top: 3rem;
`

const StyledHeader = styled.header`
    width: 100;

    .title-container {
        width: 100%;
        padding: 3rem 6%;
        display: flex;
        align-items: center;

        .title {
            font-size: 3.1rem;
            font-weight: 700;
            color: #090C9B;
            position: relative;
            font-family: 'nexabold', sans-serif;

            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                width: 194px;
                height: 6px;
                background: #FEDA00;
            }
        }
    }
`;

const ContactFormContainer = styled.div`
    width: 100%;
    background: #F6FDFE;
    border-radius: 0px 100px 0px 0px;
    padding: 6rem 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    form {
        background: #fff;
        padding: 4rem 5rem;
        box-shadow: 0px 4px 10px -2px rgba(179, 179, 179, 0.2);
        border-radius: 10px;

        @media (max-width: 768px) {
            padding: 3rem 1.5rem;
        }

        .input-group {
            width: 100%;
            margin-bottom: 2.5rem;

            @media (max-width: 768px) {
                margin-bottom: 1.5rem;
            }

            label {
                font-size: 1.25rem;
                font-weight: 600;
                font-family: 'nexabook', sans-serif;
                color: #000;
                margin-bottom: 10px;
                display: block;

                @media (max-width: 768px) {
                    font-size: 1rem;
                }
            }

            input, textarea {
                width: 100%;
                height: 3.8rem;
                background: none;
                border: 1px solid #292929;
                border-radius: 10px;
                outline: none;
                padding: 0 1rem;
            }

            textarea {
                height: 129px;
                padding: 1rem;
            }
        }

        .button-container {
            display: flex;
            align-items: center;
            justify-content: center;

            button {
                width: 100%;
                max-width: 295px;
                height: 60px;
                border: none;
                outline: none;
                background: #090C9B;
                border-radius: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.1rem;
                color: #fff;
                cursor: pointer;
                text-transform: uppercase;
                font-family: 'nexabold', sans-serif;
            }
        }
    }

    .text-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .quote {
            border-left: 12px solid #FCDB04;
            border-radius: 12px 0px 0px 12px;
            padding: 1rem;
            padding-left: 1.4rem;
            font-size: 1.5rem;
            line-height: 1.5;
            color: #313131;
            max-width: 410px;

            @media (max-width: 768px) {
                font-size: 1rem;
                margin-bottom: 2rem;
            }
        }

        .contact {
            .contact-list {
                display: flex;
                align-items: center;
                margin-bottom: 3rem;

                @media (max-width: 768px) {
                    margin-bottom: 1.5rem;
                }

                &:last-child {
                    margin-bottom: 0;
                }

                .icon {
                    font-size: 2.5rem;
                    color: #090C9B;

                    @media (max-width: 768px) {
                        font-size: 1.5rem;
                    }
                }

                .contact-content {
                    flex-grow: 1;
                    font-size: 1.4rem;
                    font-weight: 400;
                    font-family: 'nexabold', sans-serif;
                    color: #313131;
                    margin-left: 1.5rem;

                    @media (max-width: 768px) {
                        font-size: 1.25rem;
                        margin-left: 1rem;
                    }
                }
            }
        }

        .social {
            width: 2.7rem;
            height: 2.7rem;
            border-radius: 50%;
            border: 3px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
                display: none;
            }

            .icon {
                font-size: 1.6rem;
                color: #000;
            }
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #090C9B;
    height: 243px;

    .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background: #fff;
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
                color: #090C9B;
            }
        }
    }

    .footer-note {
        margin-top: 2rem;
        font-size: 1rem;
        color: #fff;
        text-align: center;
    }
`;