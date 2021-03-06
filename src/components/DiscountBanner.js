import React from 'react'

import styled from "styled-components";

import banner_bg from "../assets/img/banner_bg.jpg";
import banner_character from "../assets/img/heroImgv2.png";


const ArtBanner = () => {
    return (
        <StyledDiscountBanner>
            <div className="content">
                <h3>20% discount off your <br className="sm" />tuition to <br className="lg" /> learn <br className="sm" />any of our courses</h3>
            </div>
            <img className="person" src={banner_character} alt="person with laptop" />
            <div className="cta">
                <a href="/discount">Register here</a>
            </div>
        </StyledDiscountBanner>
    )
}

export default ArtBanner

const StyledDiscountBanner = styled.div`
    background: url(${banner_bg});
    background-position: center;
    height: 183px;
    /* background-repeat: no-repeat; */
    background-size: cover; 
    max-width: 100vw;
    padding: 1rem 8% 0 8%;
    /* padding-top: 4rem; */
    position: relative;
    /* background: #363576; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* padding-bottom: 1rem; */
    /* padding-top: 1rem; */
    overflow: hidden;

    img {
        height: 100%;
    }

    .sm {
        display: none;
    }
    .lg {
        display: block;
    }

    br.sm {
        display: none;
    }
    .content {
        h3 {
            margin: 5px 0;
            font-family: "nexabold";
            font-size: 40px;
            font-weight: 700;
            color: #FFFFFF;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        overflow: hidden;
        height: 480px;
        background-repeat: no-repeat;
        background-size: cover; 
        align-items: flex-start;
        /* padding-bottom: 2rem; */
        padding-top: 4rem;
        position: relative;
        width: 100%;
        max-width: 100vw;

        img.person {
            max-height: 300px;
            margin-left: auto;
            position: absolute;
            right: -2rem;
            bottom: 0;
        }
        .sm {
            display: inline-block;
        }
        
        .banner_character {
            /* display: none; */
            position: absolute;
            right: -2rem;
            bottom: 0;
            /* left: 10rem; */
        }
        
        .content {
            height: fit-content;
            padding: 1rem;
           
            h3 {
                br.sm {
                    display: block;
                }
                br.lg {
                    display: none;
                }
                margin: 5px 0;
                font-family: "nexabold";
                font-size: 30px;
                font-weight: 700;
                white-space: nowrap;
            }
        }

    }
    @media (max-width: 400px) {
        .content {
           h3 {
               font-size: 1.7rem;
           }
        }
    }
    .cta {
        display: flex;
        align-items: center;
        z-index: 50;

        @media (max-width: 768px) {
            order: 3;
            margin: 1rem 0 0 6%;

        }
        
        a {
            padding: 1rem 2.5rem;
            background: #52DEE5;
            color: #090C9B;
            font-size: 1.5rem;
            /* max-height: 48px; */
            /* border-radius: 5px; */
            font-weight: 700;
            text-decoration: none;

            &:hover {
                transform: scale(1.05);
                color: #090C9B;
                background: #FFFFFF;
                /* border: 1px solid #FCD900; */
            }

            @media (max-width: 768px) {
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 48px;
                font-size: 1rem;
            }
            @media (max-width: 400px) {
                padding: 0 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 48px;
                font-size: 1rem;
            }
        }
    }
`