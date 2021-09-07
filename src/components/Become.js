import React from 'react'

import styled from "styled-components";

import character from "../assets/img/character.jpg";

const data = [
    {
        content: "Gain an immersive understanding of the practices and skills needed to succeed as a product manager."
    },
    {
        content: "Learn the frameworks needed to improve the implementation of product management processes for efficient delivery.",
        secondary: true
    },
    {
        content: "Use core tools that are important in different phase of the product lifecycle to help drive productivity, result and growth."
    },
]

const Card = ({ content, secondary }) => {
    return (
        <StyledCard 
        data-aos="fade-left" 
        data-aos-easing="ease-in-sine"
        data-aos-duration="500" 
        data-aos-delay="300"
        className={secondary ? 'active' : ''}>
            {content}
        </StyledCard>
    )
}

const Become = () => {
    return (
        <StyledBecome>
            <div
                data-aos="fade-top" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                className="title"
            >
                Become an efficient Product Manager
            </div>
            <div className="grid-container">
                <img src={ character } alt="character" />

                <div className="card-list">
                    {
                        data.map(({content, secondary}) => (
                            <Card 
                                content={content}
                                secondary={secondary}
                            />
                        ))
                    }
                </div>
            </div>
        </StyledBecome>
    )
}

export default Become

const StyledBecome = styled.section`
    padding: 3rem 6%;
    max-width: 100vw;
    overflow-x: hidden;

    .title {
        font-size: 3.125rem;
        font-weight: 900;
        font-family: 'nexablack';
        text-align: center;
        color: #090C9B;
        margin-bottom: 3.5rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        img {
            width: 100%;
            height: auto;
        }

        .card-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;

const StyledCard = styled.div`
    width: 100%;
    max-width: 430px;
    background: #FFFFFF;
    box-shadow: 0px 20px 50px rgba(29, 53, 71, 0.1);
    border-radius: 0px 15px 15px 0px;
    border-left: 4px solid #090C9B;
    margin-bottom: 2rem;
    padding: 1.5rem 2rem;
    font-size: 1rem;
    line-height: 2;

    &.active {
        border-left-color: #52DEE5;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;