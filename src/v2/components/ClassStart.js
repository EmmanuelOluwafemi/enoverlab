import React, { useEffect, useState } from "react";

import styled from "styled-components";

const ClassStart = () => {
    const calculateTimeLeft = () => {
        // let year = new Date().getFullYear();
        // let difference = +new Date(`10/01/${year}`) - +new Date();
        const beginDate = new Date('10/10/2021')
        // const today = new Date()
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
        <StyledFooter>
            <div className="text-content">
                <h3
                    data-aos="fade-right" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                >CLASS STARTS ON 10TH OF OCTOBER, 2021
               </h3>
               <p>{timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds</p>
            </div>
        </StyledFooter>
    )
}

export default ClassStart

const StyledFooter = styled.footer`
    margin: 8rem 10% 0 10%;
    overflow-x: hidden;
    width: 80%;
    padding: 30px;
    background: #090C9B;
    color: #fff;
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
        }
    }

`