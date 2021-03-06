import React from 'react'

import styled from "styled-components";

// import character from "../../assets/img/character.jpg";

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
        <StyledBecome id="sweet-spot">
            
            <div className="grid-container">
                {/* <img src={ character } alt="character" /> */}
                <div className="sweet-spot">
                    <h2 className="caption">Our Sweet Spot</h2>
                    <p>
                        We are not just about teaching you core design skills, we are also particular about preparing you for the real-life work environment so you can advance in the career fast.
                    </p>
                    <h2 className="why">THIS IS WHY 70% <br /> OF OUR ALUMNI ARE <br />NOW EMPLOYED.</h2>
                </div>

                <div className="card-list">
                    {
                        data.map(({content, secondary, index}) => (
                            <Card 
                                key={`${content}${index}`}
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

        .sweet-spot{
            display: flex;
            flex-direction: column;
            /* align-items: center; */
            justify-content: center;
            h2.caption {
                font-weight: 700;
                font-size: 40px;
                color: #121212;
                text-align: left;
                font-family: 'nexabold', sans-serif;
            }
            h2.why {
                font-weight: 800;
                font-size: 38px;
                color: #34296B;
                line-height: 55px;
                font-family: 'nexablack', sans-serif;
                @media (max-width: 768px) {
                    font-size: 30px;
                }
            }
            p{
                font-weight: 400;
                font-size: 20px;
                color: #121212;
                margin: 28px 0;
                font-family: 'nexaregular', sans-serif;
                font-style: normal;
            }
        }

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