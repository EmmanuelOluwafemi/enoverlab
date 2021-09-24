import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Select from 'react-select'

import Modal from '../components/Modal';
import HeroImg from '../../assets/img/heroImg.png';

const Contact = () => {
    

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
                <div className="hero-img">
                    <img src={HeroImg} alt="hero" />
                </div>
                <EnrollFormContainer>
                    <h2>JOIN THE WAITING LIST</h2>
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
                            {/* <select name="plan" id="plan">
                                <option value="basic">Basic - (₦30,000 for 4 weeks)</option>
                                <option value="premium">Premium - (₦100,000 for 10 weeks)</option>
                            </select> */}
                            <Select options={options} name="plan" id="plan" />
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
    div.hero-img {
        background: #090C9B;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
        }
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        div.hero-img {
            padding-top: 2rem;
            position: relative;
            display: flex;
            justify-content: center;
            img {
                margin-bottom: -7rem;
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
    }
    p {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 25px 0;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    form {
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
                margin-top: 2rem;
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
