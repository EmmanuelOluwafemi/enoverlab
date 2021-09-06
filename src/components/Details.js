import React from 'react'

import styled from "styled-components";

import facilitate from "../assets/img/facilitate.svg";
import progress from "../assets/img/progress.svg";

const Details = () => {
    return (
        <StyledDetals 
            data-aos="fade-left" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" 
        >
            <div className="content">
                <div className="content-container">
                    <div className="card">
                        <img src={facilitate} alt="facilitate icon" />
                        <div className="title">Experienced Facilitators</div>
                        <div className="cont">
                            We teach in small groups with experienced product 
                            managers who have the practical knowledge to 
                            train and mentor you.
                        </div>
                    </div>
                    <div className="card">
                        <img src={progress} alt="progress icon" />
                        <div className="title">Progressive Learning</div>
                        <div className="cont">
                            We teach in small groups with experienced product 
                            managers who have the practical knowledge to 
                            train and mentor you.
                        </div>
                    </div>
                </div>
            </div>
        </StyledDetals>
    )
}

export default Details

const StyledDetals = styled.section`
    width: 100%;
    padding: 5rem 9%;
    margin-top: 5rem;

    .content {
        width: 100%;
        background: #090C9B;
        padding: 4rem 3rem;

        .content-container {
            width: 100%;
            max-width: 706px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2rem;

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
            }

            .card {
                display: flex;
                flex-direction: column;
                
                img {
                    width: 2.5rem;
                    height: 2.5rem;
                    margin-bottom: 1rem;
                }

                .title {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #fff;
                    font-family: 'nexabold';
                    margin-bottom: .7rem;
                }

                .cont {
                    font-size: .9rem;
                    font-weight: 400;
                    color: #f2f2f2;
                    line-height: 1.5;
                    max-width: 290px;
                }
            }
        }
    }
`;
