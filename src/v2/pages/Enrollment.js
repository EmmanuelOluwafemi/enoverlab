import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Select from 'react-select'
import { Link } from 'react-router-dom';

import logo from "../../assets/img/logo_white.svg";
import Modal from '../components/Modal';
import HeroImg from '../../assets/img/heroImg.png';

const Contact = () => {
    window.scrollTo(0, 0);

    const scriptUrl = "https://script.google.com/macros/s/AKfycbwTsbbU6MIOcdAWSgqjdYX9L76iI2BNXHKdzssWzezdyb7YdoWuKcekYdE6J96jZ4dx/exec";

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
        
    const options = [
        { value: 'basic', label: 'Basic - (₦30,000 for 4 weeks)' },
        { value: 'premium', label: 'Premium - (₦100,000 for 10 weeks)' },
    ]
    
    return (
        <>
            <Modal active={active} setActive={setActive} />

            <StyledContact>
                <div className="left-side">
                    <Link to="/v2">
                            <img className="logo" src={logo} alt="enoverlab logo" />
                    </Link>
                    <div className="hero-img">
                        <img 
                            src={HeroImg}
                            alt="hero" 
                            data-aos="fade-right" 
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500" 
                            data-aos-delay="1200"
                        />
                    </div>
                </div>
                <EnrollFormContainer>
                    <h2>JOIN THE <br /> WAITING LIST</h2>
                    <p>
                        Thank you for showing interest, you will be added to a waiting room for further communication
                    </p>
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
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">What plan do you want to go for?</label>
                            <Select options={options} isSearchable={false} name="plan" id="plan"git s />
                        </div>

                        <div className="button-container">
                            <button type="submit">{loading ? "Loading..." : "Submit"}</button>
                        </div>
                    </form>
                </EnrollFormContainer>
                
            </StyledContact>
        </>
    )
}

export default Contact

const StyledContact = styled.section`
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 2rem;
    max-width: 100vw;
    overflow-x: hidden;
    div.left-side {
        padding: 6rem 0;
        background: #090C9B;

        a {
            margin-left: 3rem;
        }
    }
    div.hero-img {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
        }
        .logo {
            background: white;
            @media (max-width: 768px) {
                width: 120px;
                height: auto;
            }
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        /* padding-top: 0; */
        div.left-side {
            /* background: white; */
            padding-top: 2rem;
            .logo {
                margin-bottom: 3rem;
            }
        }
        div.hero-img {
            padding-top: 1rem;
            position: relative;
            display: flex;
            justify-content: center;
            
            img {
                margin-bottom: -15rem;
            }
        }
    }
`

const EnrollFormContainer = styled.div`
    width: 100%;
    background: #F6FDFE;
    border-radius: 0px 100px 0px 0px;
    padding: 6rem 6%;

    
    h2 {
        color: #34296B;
        font-size: 2.5rem;
        margin: 2rem 0;
        font-weight: 700;
        br {
            display: none;
        }
    }
    p {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 25px 0;
        max-width: 615px;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        h2 {
            margin-top: 5rem;
            font-size: 2.2rem;
            br {
                display: block;
            }
        }
    }

    form {
        .input-group {
            width: 100%;
            max-width: 535px;
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
                background: #fff;
                /* border: 1px solid #292929; */
                border: none;
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
            justify-content: flex-start;
            max-width: 535px;
            
            

            button {
                margin-top: 2rem;
                /* margin-left: auto; */
                margin-right: auto;
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
`;
