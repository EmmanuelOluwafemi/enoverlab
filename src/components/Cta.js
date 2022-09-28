import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Timer from './Timer'

const Cta = ({pricing}) => {
  return (
    <StyledCta>
          <div className="text-content">
                    <h3>Important Info</h3>
                    <ul>
                        <li>All our programs are for absolute beginners in product management</li> 
                        <li>Internship placement for Advanced Program trainees at the end of the training</li>   
                        <li>All classes are held online via Google Meet.</li>    
                        <li>Class holds twice a week at selected days.</li>    
                        <li>Each class runs for 2 hrs </li>    
                    </ul>

                  
                  
                    <h4
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                    >Installment Payment is also Available</h4>
                    {
                        !pricing ? (
                            <Link 
                                data-aos="fade-left" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500" 
                                data-aos-delay="300"
                            to="/pricing">
                                Enrol Now
                            </Link>): (
                            <a 
                                data-aos="fade-left" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500" 
                                data-aos-delay="300"
                                href="https://forms.gle/2Ymz8FovVJEX6uDD9"
                            >
                                Enrol Now
                            </a>
                            )
                    }
                </div>
    </StyledCta>
  )
}

export default Cta

const StyledCta = styled.div`
        width: 100%;
        padding: 3em 10%;
        background: #090C9B;
        min-height: 381px;
        margin-top: 4rem;
        margin-bottom: 4rem;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            min-height: 500px;
            padding: 0 6%;
        }
        
        .text-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h3 {
                font-size: 1.5rem;
                font-weight: 400;
                color: #f2f2f2;
                text-align: center;
                margin-bottom: 1rem;
            }

            ul {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: 1.5rem;

                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 2rem;
                }

                
                li {
                    margin-left: 2rem;
                    font-size: 1rem;
                    color: #c2c2c2;

                    @media (max-width: 768px) {
                        margin-left: 0;
                        margin-bottom: 1rem;
                        font-size: 0.9rem;
                    }

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }

            h4 {
                font-size: 2.5rem;
                font-weight: 400;
                color: #fff;
                max-width: 670px;
                text-align: center;
                text-transform: capitalize;
                line-height: 1.7;

                @media (max-width: 768px) {
                    font-size: 1.75rem;
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
                width: 100%;
                max-width: 195px;

                .icons {
                    margin-left: .8rem;
                    font-size: 1.5rem;
                }

                &:hover {
                    background: rgba(9, 12, 155, 0.1);
                    color: #fff;
                }
            }
        }

        img {
            position: absolute;
            right: 20%;
            top: -38px;
            width: 100%;
            height: auto;
            max-width: 399px;

            @media (max-width: 768px) {
                position: static;
            }
        }

`