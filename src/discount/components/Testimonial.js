import React, { useRef, useState } from 'react'

import styled from "styled-components";
import Slider from "react-slick";

import quote from "../../assets/img/quote.png"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const data = [
    {
        imgUrl: "https://ik.imagekit.io/e5jim8yt6ef/samuel_O2F3j6Q_t.jpg?updatedAt=1632517642302",
        name: "Samuel Adekoya",
        location: "USA",
        content: `The product management course at Enoverlab is very detailed and 
                each class was an interesting experience for me. Coming from a field 
                that is not tech related, I was able to easily understand the role of 
                a product manager, frameworks to improve my work as a PM and most importantly, 
                the core skills to build products that will provide increased customer 
                value while at the same time drive business growth.`
    },
    {
        imgUrl: "https://ik.imagekit.io/e5jim8yt6ef/rapphiu_pXAhi-pGa.png?updatedAt=1632517645734",
        name: "RAPHIU",
        location: "KWARA",
        content: `Enover is an ideal school for anybody who wants to learn product management.  
                Their syllabus is profound and their mentors are awesome. 
                I got a job after my training. Thank you!`
    },
    {
        imgUrl: "https://ik.imagekit.io/e5jim8yt6ef/joy_Uwo9E6oz6k.jpg?updatedAt=1632517638563",
        name: "JOY",
        location: "LAGOS",
        content: `I like how structured and practical the classes have been. I have been able to get more grounded knowledge on product management.
        Despite coming from a technical background, I was able to relate with the lessons due to the approach of the instructor teaching from his personal experience as a product manager. The instructor is someone who is open: he not only teaches, he also listens and wants to hear my opinions which makes it more relatable to me personally.`
    },
]

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef(null);

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setCurrentSlide(next);
        },
    };
    return (
        <SliderContainer id="testimonial">
            <h2
                data-aos="fade-top" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
            >Students Reviews</h2>
            <div className="slide-container"
                data-aos="fade-left" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500" 
                data-aos-delay="300"
            >
                <Slider ref={slider} className="slider" {...settings}>
                    {
                        data.map(({ imgUrl, name, location, content }, i) => (
                            <div key={i}>
                                <div className="testimonial-card">
                                    <div className="img-container">
                                        <div className="side"></div>
                                        <img src={imgUrl} alt={name} />
                                    </div>
                                    <div className="content">
                                        <img className="quote" src={quote} alt="quote icon" />
                                        <div className="name">{name}</div>
                                        <div className="location">{location}</div>
                                        <div className="details">{content}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Slider>
                <div className="button-container">
                    <button
                        className={
                        currentSlide === 0 ? "button backward" : "button backward show"
                        }
                        onClick={previous}
                    >
                        <IoIosArrowBack className="icon" />
                    </button>
                    <button
                        className={
                        currentSlide >= 2 ? "button forward" : "button forward show"
                        }
                        onClick={next}
                    >
                        <IoIosArrowForward className="icon" />
                    </button>
                </div>
            </div>
        </SliderContainer>
    )
}

export default Testimonial

const SliderContainer = styled.div`
    padding: 5rem 6%;
    max-width: 100vw;
    overflow-x: hidden;
    
    h2 {
        font-size: 3.1rem;
        font-weight: 900;
        color: #090C9B;
        font-family: 'nexablack', sans-serif;
        margin-bottom: 4rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
    
    .slide-container {
        position: relative;
        .button-container {
            position: absolute;
            display: flex; 
            top: 0;
            right: 0;

            .button {
                width: 4.375rem;
                height: 4.375rem;
                border-radius: 50%;
                background: #C4C4C4;
                border: none;
                outline: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                @media (max-width: 768px) {
                    width: 2rem;
                    height: 2rem;
                }

                &:first-child {
                    margin-right: 1.5rem;
                } 

                &:hover, &.show {
                    background: #090C9B;
                }

                .icon {
                    font-size: 1.7rem;
                    color: #fff;

                    @media (max-width: 768px) {
                        font-size: 1.25rem;
                    }
                }
            }
        }
    }

    .slider {
        width: 100%;

        .testimonial-card {
            display: flex;

            @media (max-width: 768px) {
                flex-direction: column;
            }

            .img-container {
                max-width: 381px;
                width: 100%;
                display: flex;

                @media (max-width: 768px) {
                    flex-direction: column;
                }

                .side {
                    width: 60px;
                    height: 102px;
                    background: #090C9B;

                    @media (max-width: 768px) {
                        height: 60px;
                        width: 30px;
                    }
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .content {
                flex-grow: 1;
                padding-left: 4rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: relative;

                @media (max-width: 768px) {
                    padding-left: 0;
                    margin-top: 1rem;
                }

                .quote {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }

                .name {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #000;
                    font-family: 'nexabold', san-serif;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;

                    @media (max-width: 768px) {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }
                }

                .location {
                    font-size: 1.5rem;
                    font-weight: 300;
                    color: #10203F;
                    font-family: 'nexalight', sans-serif;
                    margin-bottom: 3rem;

                    @media (max-width: 768px) {
                        font-size: 1rem;
                        margin-bottom: 1rem;
                    }
                }

                .details {
                    max-width: 663px;
                    width: 100%;
                    font-size: 1.5rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #4D4D4D;

                    @media (max-width: 768px) {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`;