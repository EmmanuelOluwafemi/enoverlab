import React, { useEffect, useState } from "react";

import styled from "styled-components";

const ClassStart = () => {
    const calculateTimeLeft = () => {
        const beginDate = new Date('10/05/2021')
        let difference = +beginDate - +new Date();

        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
      }
    
      return timeLeft;
    
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
    }, [timeLeft]);

    return (
        <>
            <DiscountWrapper
                data-aos="flip-left" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="800" 
                data-aos-delay="1200"
            >
                <h4
                    data-aos="fade-up" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500" 
                    data-aos-delay="1200"
                >
                    INSTALLMENT PAYMENT <br className="sm"/>IS ALLOWED
                </h4>
                <div 
                    className="holder"
                    data-aos="fade-right" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500" 
                    data-aos-delay="1200"
                >
                    <div>
                        <span className="percent">50%</span>
                        <span>ON ADMISSION</span>
                    </div>
                    <div>
                        <span className="percent">50%</span>
                        <span>AFTER 4 WEEKS OF <br />INITIAL PAYMENT </span>
                    </div>
                </div>
            </DiscountWrapper>
            <Wrapper
                data-aos="flip-right" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000" 
                data-aos-delay="1200"
            >
                <div className="text-content">
                    <h3
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                    >DEADLINE FOR THE OFFER IS 5TH OF OCTOBER, 2021
                </h3>
                <p>{timeLeft.days} Days : {timeLeft.hours} Hours : <br/>{timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds</p>
                </div>
            </Wrapper>
        </>
    )
}

export default ClassStart

const DiscountWrapper = styled.div`
    color: #52DEE5;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #090C9B;
    margin: 8rem auto 0 auto;
    overflow-x: hidden;
    width: 80%;
    max-width: 1050px;
    
    padding: 50px 0;
    .sm {
        display: none;
    }
    
    h4 {
        font-family: "nexalight";
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;

    }

    .holder {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 40px;
        span {
            display: block;
        }
        .percent {
            font-family: "nexablack";
            font-size: 120px;
            font-style: normal;
            font-weight: 800;
            line-height: 120px;
            letter-spacing: 0em;
            text-align: left;
            color: #52DEE5;
        }
        span {
            font-family: "nexalight";
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0em;
            text-align: center;
            margin-top: 15px;
        }
    }
    @media(max-width: 765px) {
        width: 100%;
        margin: 4rem auto 0 auto;
        .sm {
            display: initial;
        }
        h4 {
            font-size: 1.5rem;
            text-align: center;
            line-height: 30px;
        }

        .holder {
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            div {
                margin-top: 1,5rem;
                margin-bottom: 2rem;
            }
            span {
                display: block;
                margin-top: 5px;
            }
            .percent {
                font-size: 6rem;
            }
            span {
                font-size: 25px;
            }
    }
    }
`

const Wrapper = styled.div`
    margin: 2.5rem auto 0 auto;
    overflow-x: hidden;
    width: 80%;
    max-width: 1050px;
    padding: 30px;
    background: #52DEE5;
    color: #090C9B;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-size: 2.2rem;
    }

    p{
        margin: 20px auto;
        font-size: 28px;
        text-align: center;
        br {
            display: none;
        }
    }


    @media (max-width: 768px) {
        margin-top: 3rem;
        
        h3 {
            font-size: 1.1rem;
            text-align: center;
        }
        p{
            margin: 20px auto;
            font-size: 16px;
            text-align: center;
            br {
                display: initial;
            }
        }
    }

`