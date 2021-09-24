import "aos/dist/aos.css";
import styled from "styled-components";

import heroImgv2 from "../../assets/img/heroImgv2.png";

import Header from './Header';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <StyledHero>
            <Header />
            <div className="content-section">
                <div className="content">
                    <h1
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        Learn the core skills, frameworks <br /> and tools needed to become a <br /> product manager in 10 weeks </h1>

                    <Link to="/contact">Enrol Now </Link>
                </div>
                <img
                    data-aos="fade-left" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="1000"
                    className="hero" 
                    src={heroImgv2} 
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
    }

    .content-section {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 2rem;
        margin-top: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        img.hero {
            width: 100%;
            height: auto;
            @media (max-width: 768px) {
                margin-right: 2rem;
                width: 90%;
                margin-left: auto;
            }
        }

        .content {
            padding-left: 18%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width: 768px) {
                padding: 0 6%;
                br {
                    display: none;
                }
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
                font-size: 45px;
                font-weight: 800;
                color: #090C9B;
                max-width: 721px;
                line-height: 58px;
                font-family: 'nexaHeavy';

                @media (max-width: 768px) {
                    font-size: 35px;
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
                color: #fff;
                line-height: 104%;
                letter-spacing: 0.02em;
                padding: 1rem 0;
                background: #090C9B;
                box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
                display: inline-block;
                margin-top: 3rem;
                text-decoration: none;
                font-weight: 700;
                display: flex;
                border-radius: 8px;
                align-items: center;
                justify-content: center;
                max-width: 195px;

                .icons {
                    margin-left: .8rem;
                    font-size: 1.5rem;
                }

                &:hover {
                    background: #fff;
                    color: #090C9B;
                }
            }
        }
    }
`;