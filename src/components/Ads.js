import React from 'react'

import styled from "styled-components";

import ama from "../assets/img/ama.png";
import character from "../assets/img/ama-face.jpg";

const Ads = () => {
    return (
        <StyledAds>
            <img className="ama" src={ama} alt="ama" />

            <div className="content">
                <div className="title">Topic:</div>
                <h4>Why are Product Managers important to any organisation? </h4>
            </div>

            <img className="user" src={character} alt="character" />

            <a href="https://forms.gle/gGfWTd9bQvP9SGZz8">Register here</a>
        </StyledAds>
    )
}

export default Ads

const StyledAds = styled.section`
    width: 100%;
    padding: 2rem 6%;
    background: #52DEE5;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }

    .ama {
        width: 7rem;
        height: auto;

        @media (max-width: 768px) {
            width: 3rem;
            margin-bottom: 2rem;
        }
    }

    .content {
        width: 100%;
        max-width: 488px;

        .title {
            font-size: 1.4rem;
            font-weight: 400;
            color: #090C9B;
            margin-bottom: 1rem;

            @media (max-width: 768px) {
                margin-bottom: .3rem;
            }
        }

        h4 {
            font-size: 2.4rem;
            font-weight: 700;
            font-family: 'nexabold', sans-serif;
            line-height: 1.2;
            color: #090C9B;

            @media (max-width: 768px) {
                font-size: 1.7rem;
            }
        }
    }

    .user {
        width: 8.5rem;
        height: auto;

        @media (max-width: 768px) {
            order: 4;
        }
    }

    a {
        padding: 1rem 3rem;
        background: #090C9B;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: 'nexabold', sans-serif;

        @media (max-width: 768px) {
            order: 3;
            font-size: .9rem;
            padding: .7rem 2rem;
            margin-bottom: 1.5rem;
            margin-top: 1rem;
        }

        &:hover {
            background: #F4F4F6;
            color: #090C9B;
        }
    }
`;
