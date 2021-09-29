import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Select from 'react-select'
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import logo from "../../assets/img/logo_white.svg";
import Modal from "../components/Modal"
// import {ReactComponent as WhiteLogo} from  '../assets/images/perxellogo_white.svg'

const Contact = () => {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyDBj1bngwDEgxXY1WhqervJ7KpgZhopnU9Z5a3WQtgG2A3r6YbtMSShma1IOSouVc/exec"

    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        where: ''
    })
    const updateFormData = (e, key, val) => {
        // e.preventDefault()
        const t = {...formData}
        t[key] = val
        setFormData(t)
    }

    const formRef = useRef(null)
    const errorMessage = "All form fields are required"
    const [isError, setIsError] = useState()

    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(formData)
            if(formData.name.length === 0 || formData.email.length === 0 || formData.phone.length === 0 || formData.where.length === 0){
                setIsError(true)
                window.scrollTo(0,0)
                return
            } else {
            setLoading(true)

            fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
            .then(res => {
                setLoading(false)
                setActive(true)
            })
            .catch(err => console.log(err))
        }
    }
        
    const options = [
        { value: 'facebook', label: 'Facebook' },
        { value: 'instagram', label: 'Instagram' },
        { value: 'whatsapp', label: 'WhatsApp' },
        { value: 'friend', label: 'A friend' },
        { value: 'twitter', label: 'Twitter' },
        { value: 'linkedin', label: 'Linkedin' },
    ]
    
    
    return (
        <>
            <Modal active={active} setActive={setActive} />

            <StyledContact>
                <div className="logo_container">
                    {/* <Link to="/"><WhiteLogo /></Link> */}
                </div>
                
                <EnrollFormContainer>
                    <h2>Book a space</h2>
                    
                    {isError && <p className="error">{errorMessage}</p>}
                    <form
                        ref={formRef}
                        // data-aos="fade-left" 
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="500" 
                        // data-aos-delay="1200"
                        onSubmit={handleSubmit}
                        name="forms"
                    >
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <CustomInput placeholder="Name" type="text" name="name" id="name" value={formData.name} onChange={(e) => updateFormData(e, 'name', e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <CustomInput placeholder="Phone Number" type="text" name="phone" id="phone" value={formData.phone} onChange={(e) => updateFormData(e, 'phone', e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <CustomInput placeholder="Email" type="email" name="email" id="email" value={formData.email} onChange={(e) => updateFormData(e, 'email', e.target.value)} />
                        </div>
                        
                        <div className="input-group select">
                            <label htmlFor="message">Where did you hear about the session or enoverlab?</label>
                            <Select placeholder="Where did you hear about the session or enoverlab?" options={options} isSearchable={false} name="where" id="where" onChange={(e) => updateFormData(e, 'where', e.value)} />
                        </div>

                        <div className="button-container">
                            <button type="submit">{loading ? "Loading..." : "Book"}</button>
                        </div>
                    </form>
                </EnrollFormContainer>
                
            </StyledContact>
        </>
    )
}

export default Contact

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* grid-template-columns: 2fr 5fr; */
    /* grid-gap: 2rem; */
    background: linear-gradient(238.7deg, #34296B 19.97%, #34296B 147.1%),
    linear-gradient(243.43deg, #FFA5A5 32.96%, rgba(255, 255, 255, 0) 82.03%),
    linear-gradient(0deg, #F39494, #F39494);

    max-width: 100vw;
    height: 100vh;
    overflow: hidden;
    .error {
        font-size: 1rem;
        color: red;
    }
    .logo_container {
        height: 100px;
        width: 100%;
        position: relative;

        svg {
            position: absolute;
            left: 8%;
        }
        /* background: yellow; */
    }

    @media (max-width: 768px) {
        
    }
`

const EnrollFormContainer = styled.div`
    /* box-sizing: border-box; */
    background: #FFFEFE;
    max-width: 583px;
    max-height: 573px;
    padding: 72px 104px;
    border-radius: 10px;
    h2 {
        text-align: center;
        font-size: 36px;
        margin: 0 0 70px 0;
        font-family: "Proxima Nova", sans-serif;
        color: #333333;
    }
    
    form {
        width: 100%;
        /* box-sizing: border-box; */

        label {
            display: none;
        }
        input {
            box-sizing: border-box;
            width: 100%;
            border-radius: 5px;
            height: 44px;
            background: #F5F5F5;
            border: none;
            margin-bottom: 22px;
        }
        button {
            border: none;
            padding: 1rem;
            background: #090C9B;
            color: #FFFFFF;
            width: 100%;
            font-size: 18px;
            margin-top: 2rem;
            border-radius: 5px;
            &:hover {
                background: #FCD900;
                color: #090C9B;
            }
        }
    }
    .select {
        width: 115%;
    }
    @media (max-width: 768px) {
        max-width: 90%;
        padding: 1rem;
        
        .select {
            width: 100%;
            font-size: .6rem;
        }
    }

    /* width: 582px;
    height: 573px;
    margin: 0 auto;
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
            height: 573px;
            background: red;
            margin-bottom: 2.5rem;

            @media (max-width: 768px) {
                margin-bottom: 1.5rem;
            }

            label {
                display: none;
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
                border: 1px solid #292929;
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
                margin-left: auto;
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
    } */
`;

const CustomInput = styled.input.attrs(props => ({
    type: 'text',
    size: props.small ? 5 : undefined,
  }))`
    border-radius: 3px;
    border: none;
    outline: none;
    display: block;
    margin: 0 0 1em;
    padding: 0 11px;
    font-size: 14px;
    color: #999999;
  
    ::placeholder {
      color: #999999;
      font-style: italic;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
        ::placeholder {
            /* font-size: 10px; */
        }
    }
  `