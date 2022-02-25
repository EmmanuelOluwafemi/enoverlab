import React from 'react'

import styled from 'styled-components'

// images
import banner from '../assets/img/bannerBackground.jpg';
import ama from '../assets/img/ama.svg';
import character from '../assets/img/bannerCharacter.jpg';

const Banner = () => {
    return (
        <StyledBanner>
            <div className="topImage">
                <img className="logo" src={ama} alt="ama section" />
                <div className='cont'>
                    <img src={character} className="characterMobile" alt="character" />
                    <div className="details mobile">
                        <h4>Tobi Adesanya</h4>
                        <p>Snr Product Manager</p>
                        <p>Jetstream Africa Accra Ghana</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <h5>This week virtual session topic:</h5>
                <h2>Common challenges new Product Managers face and how to deal with them</h2>
            </div>
            <div className="cont">
                <img src={character} className="characterWeb" alt="character" />
                <div className="details web">
                    <h4>Tobi Adesanya</h4>
                    <p>Snr Product Manager</p>
                    <p>Jetstream Africa Accra Ghana</p>
                </div>
            </div>
            {/* <Link to="/register">Register here</Link> */}
            <a href="https://forms.gle/8jVs1tALg73xYxNr6" target="_blank" rel="noopener noreferrer">Register here</a>
        </StyledBanner>
    )
}

export default Banner

const StyledBanner = styled.section`
    min-height: 183px;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 3rem 6%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }

    .characterWeb {
        width: 90.63px;
        height: auto;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .topImage {
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            margin-bottom: 2.5rem;
        }

        .characterMobile {
            display: none;

            @media (max-width: 768px) {
                display: block;
                width: 73px;
                height: auto;
                margin-left: .75rem;
            }
        }

        .logo {
            width: 73px;
            height: auto;
        }
    }

    .cont {
        display: flex;
    }

    .details {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 1rem;
        max-width: 150px;

        h4 {
            font-size: 1rem;
            color: #fff;
            margin-bottom: .3rem;
        }

        p {
            font-size: .75rem;
            color: #f2f2f2dd;
        }

        &.mobile {
            display: none;
    
            @media(max-width: 768px) {
                display: flex;
            }
        }

        &.web {
            display: flex;

            @media(max-width: 768px) {
                display: none;
            }
        }
    }

    .content {
        max-width: 491px;

        h5 {
            font-size: 1.1rem;
            color: #52DEE5;
            font-weight: 400;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #fff;
            line-height: 1.5;

            @media (max-width: 768px) {
                font-size: 1.25rem;
                max-width: 271px;
                margin-bottom: 1.5rem;
            }
        }
    }

    a {
        padding: 1rem 2rem;
        background: #090C9B;
        border: 2px solid #52DEE5;
        color: #52DEE5;
        font-size: 1.1rem;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
            background: #52DEE5;
            color: #090C9B;
        }
    }
`
