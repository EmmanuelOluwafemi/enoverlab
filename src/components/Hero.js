import "aos/dist/aos.css";
import styled from "styled-components";

import heroImg from "../assets/img/heroImg.png";

import { IoIosArrowRoundForward } from 'react-icons/io';
import Header from './Header';
import { Link } from 'react-router-dom';
// import MasterClassAd from '../components/ArtBanner'
// import DiscountBanner from '../components/DiscountBanner'
import ArtBanner from '../components/ArtBanner'


const Hero = () => {
    return (
        <StyledHero>
            <Header />
            {/* <ArtBanner /> */}
            <div className="content-section">
                <div className="content">
                    <h3>TRAINING TO BE EMPLOYABLE</h3>
                    <h1
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        Transition into <br />Product Management</h1>
                    <p
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >Building product managers who will innovate products for the future</p>

                    <Link to="/contact"
                    >Enrol Now <IoIosArrowRoundForward className="icons"/></Link>
                </div>
                <img
                    data-aos="fade-left" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="1000"
                    className="hero" 
                    src={heroImg} 
                    alt="hero" 
                />
            </div>
        </StyledHero>
    )
}

export default Hero

const StyledHero = styled.section`
    height: 100%;
    min-height: 100vh;
    max-width: 100vw;
    background: rgba(82, 222, 229, 0.05);
    padding: 3rem 0;
    overflow-x: hidden;

    @media (max-width: 768px) {
        max-height: auto;
        overflow-x: hidden;
        padding: 1.5rem 0;
    }

    .content-section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 4rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        img.hero {
            width: 100%;
            height: auto;
        }

        .content {
            padding-left: 18%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width: 768px) {
                padding: 0 6%;
            }

            h3 {
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.5;
                letter-spacing: 0.235em;
                color: #12169B;
                margin-bottom: 1.3rem;
                margin-top: -3rem;

                @media (max-width: 768px) {
                    margin-top: 0;
                    margin-bottom: 0;
                }
            }

            h1 {
                font-size: 3.35rem;
                font-weight: 800;
                color: #090C9B;
                max-width: 706px;
                line-height: 1.1;
                font-family: 'nexaHeavy';

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                    line-height: 1.3;
                    margin-top: 1.5rem;
                }
            }
            
            p {
                font-size: 1.25rem;
                font-weight: 300;
                color: #090C9B;
                margin-top: 1.3rem;
                max-width: 480px;
                line-height: 1.5;
                font-family: 'nexalight';

                @media (max-width: 768px) {
                    font-size: .9rem;
                    line-height: 1.4;
                }
            }

            .speaker {
                display: flex;
                align-items: center;
                margin-top: 1.4rem;

                .speakers-details {
                    margin-left: 1rem;

                    .title {
                        font-size: .6rem;
                        font-weight: 400;
                        color: #575757;
                    }

                    .name {
                        font-size: 1rem;
                        font-weight: 700;
                        color: #272727;
                        letter-spacing: 0.05em;
                    }

                    .position {
                        font-size: .7rem;
                        font-weight: 400;
                        color: #090C9B;
                    }
                }
            }

            a {
                font-size: 1rem;
                color: #090C9B;
                line-height: 104%;
                letter-spacing: 0.02em;
                padding: 1rem 0;
                background: #52DEE5;
                box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
                display: inline-block;
                margin-top: 2rem;
                text-decoration: none;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 195px;

                .icons {
                    margin-left: .8rem;
                    font-size: 1.5rem;
                }

                &:hover {
                    background: rgba(9, 12, 155, 0.1);
                }
            }
        }
    }
`;