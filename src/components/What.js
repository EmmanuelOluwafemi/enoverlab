import React from 'react'

import styled from "styled-components"

import bg from "../assets/img/bg.svg";
import certificate from "../assets/img/certification.svg";
import analytics from "../assets/img/analytics.svg";
import lecture from "../assets/img/lecture.svg";
import education from "../assets/img/education.png";

const data = [
    {
        imgUrl: education,
        title: "10 Weeks Training and Mentorship",
    },
    {
        imgUrl: analytics,
        title: "Project Based Classes",
        primary: true
    },
    {
        imgUrl: lecture,
        title: "100% Virtual Classes",
    },
    {
        imgUrl: certificate,
        title: "Earn An Accredited Certificate",
    }
]

const Card = ({ imgUrl, title, primary, i }) => {
    return (
        <StyledCard 
            data-aos="fade-left" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" 
            data-aos-delay={300 * i}
            className={ primary ? "primary" : "" }>
            <div className="img-container"> 
                <img src={imgUrl} alt={title} />
            </div>
            <div className="info">{title}</div>
        </StyledCard>
    )
}

const What = () => {
    return (
        <StyledWat>
            <img className="bg" src={bg} alt="background pattern" />
            <div className="grid">
                <div className="text-content">
                    <h2
                        data-aos="fade-top" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                    >What you will get!</h2>
                    <p
                        data-aos="fade-top" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="300"
                    >When you become our student, you have automatic access to....</p>
                </div>
                <div className="card-container">
                    {
                        data.map(({ imgUrl, title, primary }, i) => (
                            <Card
                                key={imgUrl}
                                imgUrl={imgUrl}
                                title={title}
                                primary={primary}
                                i={i}
                            />
                        ) )
                    }
                </div>
            </div>
        </StyledWat>
    )
}

export default What

const StyledWat = styled.section`
    padding: 3rem 6%;
    background: #F6FDFE;
    position: relative;
    max-width: 100vw;
    overflow-x: hidden;

    img.bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 3rem;
        }

        .text-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            h2 {
                font-size: 3.05rem;
                font-weight: 900;
                font-family: 'nexablack';
                color: #090C9B;
                margin-bottom: 1rem;

                @media (max-width: 768px) {
                    font-size: 2rem;
                    text-align: center;
                }
            }

            p {
                font-size: 1.5rem;
                font-weight: 400;
                line-height: 1.5;
                color: #333;
                max-width: 373px;

                @media (max-width: 768px) {
                    font-size: 1rem;
                    text-align: center;
                }
            }
        }

        .card-container {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2rem;

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`;

const StyledCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    background: #fff;
    box-shadow: 0px 4px 10px 1px rgba(123, 122, 131, 0.09);

    @media (max-width: 768px) {
        padding: 4rem 2rem;
    }

    .img-container {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(52, 41, 107, 0.04);

        @media (max-width: 768px) {
            width: 5rem;
            height: 5rem; 
        }

        img {
            height: 3rem;
            width: 3rem;
        }
    }

    .info {
        font-size: 1.25rem;
        font-weight: 700;
        color: #090C9B;
        text-align: center;
        margin-top: 1rem;
    }

    &.primary {
        background: #090C9B;

        .img-container {
            background: #fff;
        }

        .info {
            color: #fff;
        }
    }
`;