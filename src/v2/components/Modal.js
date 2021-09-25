import { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import {ReactComponent as Smiley} from '../../assets/img/smiley.svg'

const Modal = ({ text, active, setActive }) => {
    const [redirect, setRedirect] = useState(false)
    const btnClick = () => {
        setActive(!active)
        setRedirect(true)
    }
    return (
        <StyledModal className={ !active ? "active" : "" }>
            {redirect ? <Redirect to="/v2" /> : ""}
            <div className="overlay" />
            <div className="content">
                <h3>Thank you for showing interest<span><Smiley /></span></h3>
                <p>You will be contacted by our Product Lead for further communication</p>
                <button onClick={() => btnClick()}>Okay</button>
            </div>
        </StyledModal>
    )
}

export default Modal

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;

    &.active {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
    }

    .content{
        position: relative;
        z-index: 2;
        width: 90%;
        max-width: 700px;
        min-height: 250px;
        background: #E5E5E5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        font-family: 'nexaregular';
        color: #090C9B;
        text-align: center;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        h3 {
            font-size: 2.2rem;
            font-weight: 700;
            font-family: 'nexabold';
            margin: 2rem 2rem;
            span {
                margin-left: 15px;
            }
        }
        p {
            font-size: 1.7rem;
            font-weight: 400;
            font-family: 'nexaregular';
        }
        @media(max-width: 765px) {
            h3 {
                font-size: 1.5rem;
                font-weight: 700;
                font-family: 'nexaregular';
                margin: 2rem 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                margin-left: -15px;
            }
        }
            
            
            p {
                font-size: 1.3rem;
                font-weight: 400;
                font-family: 'nexaregular';
            }
        }
    }
    button {
        color: #090C9B;
        font-size: 24px;
        font-style: normal;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        padding: 0.7rem 2rem;
        outline: none;
        border: none;
        background: #52DEE5;
    }
`