import React from 'react'
import styled from 'styled-components'

import logoWhite from '../assets/img/logoWhite.svg';

import { AiOutlineLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Register = () => {

    const [sucess, setSucess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [where, setWhere] = React.useState('');
    const formRef = React.useRef(null);

    const scriptUrl = "https://script.google.com/macros/s/AKfycbxASGg2ISOrlSYzfhYF9soHwfO_ssE2Z2q75txa9oqVF8FtXP7KzPKK0cbIdgPSVO0coQ/exec";

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('where', where);
        
        setLoading(true)

        fetch(scriptUrl, { method: 'POST', body: formData })
        .then(res => {
            setLoading(false)
            setSucess(true)
            setName('')
            setPhone('')
            setEmail('')
            setWhere('')
        })
        .catch(err => console.log(err))
    }

    return (
        <StyledRegister>
            {
                sucess ?
                <div className="modal">
                    <div onClick={() => setSucess(false)} className="overflow" />
                    <div className="modalContent">
                        <AiOutlineLike className="like" />
                        <h4>Successful!!, you will receive a text message</h4>
                    </div>
                </div>:
                null
            }

            <Link to="/" className="header">
                <img src={logoWhite} alt="logo" />
            </Link>
            <div className="content">
                <form ref={formRef} onSubmit={handleSubmit} className="form">
                    <h3>Book a space</h3>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="text" value={where} onChange={(e) => setWhere(e.target.value)} placeholder="Where did you hear about the session or enoverlab? " />
                    <button type="submit">{loading ? "Loading..." : "Book"}</button>
                </form>
            </div>
        </StyledRegister>
    )
}

export default Register

const StyledRegister = styled.div`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background: linear-gradient(243.18deg, #12178F 25.45%, #52DEE5 100%), linear-gradient(243.43deg, #FFA5A5 32.96%, rgba(255, 255, 255, 0) 82.03%), #F39494;

    .header {
        padding: 3rem 6%;
        display: inline-block;
        
        img {
            height: 2.5rem;
            width: auto;

            @media (max-width: 768px) {
                height: 1.5rem;
            }
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        background: rgba(255, 255, 255, 0.72);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 6%;

        .overflow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
            cursor: pointer;
        }

        .modalContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 675px;
            background: #D3FDFF;
            padding: 4rem;

            .like {
                color: #131890;
                font-size: 2.5rem;
                margin-bottom: 2rem;
            }

            h4 {
                font-size: 3rem;
                color: #131890;
                line-height: 1.5;
                font-weight: 400;
                text-align: center;

                @media (max-width: 768px) {
                    font-size: 2rem;
                    text-align: center;
                }
            }
        }
    }

    .content {
        width: 100%;
        height: calc(100vh - 9rem);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 6%;

        .form {
            background: #fff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            padding: 4rem 5rem;
            width: 100%;
            max-width: 582px;

            @media (max-width: 768px) {
                padding: 3rem 2rem;
            }

            h3 {
                text-align: center;
                font-size: 2rem;
                font-weight: 700;
                color: #333;
                line-height: 1.5;
                margin-bottom: 2rem;
            }

            input {
                width: 100%;
                height: 2.5rem;
                background: #F5F5F5;
                border-radius: 5px;
                padding: .85rem .7rem;
                border: none;
                outline: none;
                margin-bottom: 1.4rem;
            }

            button {
                width: 100%;
                padding: .75rem;
                background: #090C9B;
                border-radius: 5px;
                color: #fff;
                font-size: 1.2rem;
                font-weight: 400;
                border: none;
                outline: none;
                transition: all .3s ease-in-out;

                &:hover {
                    background: #52DEE5;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
`;