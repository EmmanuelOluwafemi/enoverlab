import React from 'react'

import styled from "styled-components";

// import jeff from "../assets/images/jef.png";
// import sponsors from "../assets/images/sponsor-logo.svg";
import banner_bg from "../assets/img/banner_bg.jpg";
// import banner_character from "../assets/images/banner_character.jpg";
// import ama_session from "../assets/images/ama_session.png";

// import {ReactComponent as AmaSession} from "../assets/images/ama_session.svg";
import {ReactComponent as BigThree} from "../assets/img/3.svg";
import {ReactComponent as BannerCharacter} from "../assets/img/ama_character.svg";

const ArtBanner = () => {
    return (
        <StyledArtBanner>
            <div className="count">
                <BigThree />
                <span className="days sm">Days</span>
            </div>
            <div className="content">
                <div className="ad__theme">
                     <span className="days lg">Days</span>
                     <h2>FREE MASTERCLASS</h2>
                </div>
                <h3>Transition into <br className="sm" />Product Management </h3>
            </div>
            <BannerCharacter className="banner_character" />
            {/* <img className="logo" src={ama_session} alt="ama session logo" /> */}
            {/* <img className="logo" src={banner_character} alt="ama character" /> */}
            <div className="cta">
                <a href="https://forms.gle/71XJEs8ZZtmC1Txj6">Register here</a>
            </div>
        </StyledArtBanner>
    )
}

export default ArtBanner

const StyledArtBanner = styled.div`
    background: url(${banner_bg});
    background-position: center;
    height: 183px;
    /* background-repeat: no-repeat; */
    background-size: cover; 
    max-width: 100vw;
    padding: 2rem 8%;
    /* padding-top: 4rem; */
    position: relative;
    /* background: #363576; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding-bottom: 1rem;
    padding-top: 1rem;
    overflow: hidden;

    .banner_character {
        margin-left: -40px;
    }

    .sm {
        display: none;
    }
    .lg {
        display: block;
    }

    h4 {
        font-size: 18px;
        font-family: "Proxima Nova", sans-serif;
        font-weight: 400;
        color: #1DB6BC;
        margin: 0;
    }

    h3 {
        font-size: 30px;
        font-family: "Proxima Nova", sans-serif;
        font-weight: 400;
        color: #FFFFFF;
        margin: 17px 0 0 0;
    }
    br.sm {
        display: none;
    }
    .content {
        
        .ad__theme {
            display: flex;
            align-items: center;
            .days {
                font-family: "nexablack";
                font-size: 35px;
                font-weight: 900;
                color: #131795;
                background: #52DEE5;
                padding: 0.5rem 1rem;
            }
            h2 {
                font-family: "nexabold";
                font-size: 35px;
                font-weight: 700;
                color: #FFFFFF;
                margin-left: 10px;
            }
            
        }
        h3 {
            margin: 5px 0;
            font-family: "nexabold";
            font-size: 26px;
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        overflow: hidden;
        height: 480px;
        background-repeat: no-repeat;
        background-size: cover; 
        align-items: flex-start;
        padding: 0;
        padding-top: 4rem;
        position: relative;
        width: 100%;
        max-width: 100vw;

        
        .sm {
            display: inline-block;
        }
        .lg {
            display: none;
        }

        br.sm {
            display: none;
        }
        .banner_character {
            /* display: none; */
            position: absolute;
            right: -2rem;
            bottom: 0;
            /* left: 10rem; */
        }
        .count {
            display: flex;
            align-items: center;
            max-height: 63px;
            svg {
                height: 100%;
            }
            .days {
                font-family: "nexablack";
                font-size: 35px;
                font-weight: 900;
                color: #131795;
                background: #52DEE5;
                padding: 0.5rem 1rem;
                height: 100%;
                display: flex;
                align-items: center;
                margin-left: 0.3rem;
            }
        }
        .content {
            height: fit-content;
            padding: 1rem;
            .ad__theme {
                display: flex;
                align-items: center;
                
                h2 {
                    font-family: "nexaregular", sans-serif;
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: #FFFFFF;
                    margin: 1.2rem 0;
                    white-space: nowrap;
                }
                
            }
            h3 {
                br {
                    display: block;
                }
                margin: 5px 0;
                font-family: "nexabold";
                font-size: 26px;
                font-weight: 700;
                white-space: nowrap;
            }
        }

    }
    .cta {
        display: flex;
        align-items: center;
        

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
        }
    }
    
    /* .logo-container {
        display: flex;
        flex-direction: column;
        height: 100%;

        @media (max-width: 768px) {
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 2rem;
        }

        .logo {
            width: 5rem;
            height: auto;
            margin-bottom: 1rem;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .sponsor {
            width: 100%;
            max-width: 221px;
            height: auto;

            @media (max-width: 768px) {
                max-width: 110px;
            }
        }
    }

    .character {
        margin-bottom: -.3rem;

        @media (max-width: 768px) {
            order: 4;
        }
    }

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            padding: 1.7rem 2rem;
            background: rgba(255, 255, 255, 0.09);
            border-radius: 15px;
            font-size: 2rem;
            color: #fff;
            font-weight: 700;

            @media (max-width: 768px) {
                font-size: 1.4rem;
            }
        }

        p {
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
            padding: 0;
            margin: 0;
            max-width: 302px;

            @media (max-width: 768px) {
                font-size: 1rem;
                margin-top: .6rem;
            }
        }
    }

     */
`