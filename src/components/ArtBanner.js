import React from 'react'

import styled from "styled-components";

// import jeff from "../assets/images/jef.png";
// import sponsors from "../assets/images/sponsor-logo.svg";
import banner_bg from "../assets/img/banner_bg.jpg";
import banner_character from "../assets/img/ama_character.png";
// import ama_session from "../assets/images/ama_session.png";

import {ReactComponent as AmaSession} from "../assets/img/ama_session.svg";
// import {ReactComponent as AmaCharacter} from "../assets/images/ama_character.svg";
// import {ReactComponent as AmaCharactermb} from "../assets/images/ama_character.svg";

const ArtBanner = () => {
    return (
        <StyledArtBanner>
            <div>
                <AmaSession />
                <img className="sm" src={banner_character} alt="ama session character" />
            </div>
            <div className="content">
                <h4>This week virtual session topic:</h4>
                <h3>Communication hacks for <br className=""/>product managers</h3>
            </div>
            <img className="lg" src={banner_character} alt="" />
            <div className="cta">
                <a href="/booking">Register here</a>
            </div>
        </StyledArtBanner>
    )
}

export default ArtBanner

const StyledArtBanner = styled.div`
    background: url(${banner_bg});
    background-position: center;
    height: 133px;
    /* background-repeat: no-repeat; */
    background-size: contain; 
    max-width: 100vw;
    padding: 2rem 6%;
    /* padding-top: 4rem; */
    position: relative;
    /* background: #363576; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 1rem;
    padding-top: 1rem;

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
    .content{
        margin: auto 6rem;
    }

    @media (max-width: 1115px) {
        margin-left: 1rem;
        h4 {
            font-size: 16px;
        }
        h3 {
            font-size: 24px;
        }
        .content{
            margin: auto 2rem;
        }
        
    }

    @media (max-width: 768px) {
        flex-direction: column;
        overflow: hidden;
        padding-top: 2rem;
        height: 60vh;
        background-repeat: no-repeat;
        background-size: cover; 
        align-items: flex-start;
        
        br.sm {
            display: inline-block;
        }
        br.lg {
            display: none;
        }
      

        h4 {
            margin-top: 40px;
        }

        h3 {
            font-size: 24px;
            margin: 7px 0 0 0;
        }
      
        img.lg {
            display: none;
        }
        img.sm {
            display: inline-block;
            max-height: 103px;
        }
        .content{
            margin: auto 0;
        }

    }
    .cta {
        display: flex;
        align-items: center;
        margin-left: 3rem;
        

        @media (max-width: 768px) {
            order: 3;
            margin: 2rem 0;
        }

        
        a {
            padding: 1rem 2.5rem;
            background: #52DEE5;
            color: #090C9B;
            font-size: 1.3rem;
            max-height: 48px;
            text-decoration: none;
            font-weight: 700;
            display: flex;
            align-items: center;

            &:hover {
                transform: scale(1.05);
                color: #FCD900;
                background: #34296B;
                border: 1px solid #FCD900;
            }

            @media(max-width: 1115px) {
                padding: .8rem 0.8rem;
                font-size: .8rem;
            }
            @media (max-width: 768px) {
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 48px;
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