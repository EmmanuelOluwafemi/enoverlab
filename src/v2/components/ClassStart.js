import React from 'react'

import styled from "styled-components";

const ClassStart = () => {
    // const startDate = new Date("Oct 10, 2021 12:00:00")
    // const now = Date.now
    // const {initialMinute = 0,initialSeconds = 0} = {};
    // const [ minutes, setMinutes ] = useState(initialMinute);
    // const [seconds, setSeconds ] =  useState(initialSeconds);
    // useEffect(()=>{
    // let myInterval = setInterval(() => {
    //         if (seconds > 0) {
    //             setSeconds(seconds - 1);
    //         }
    //         if (seconds === 0) {
    //             if (minutes === 0) {
    //                 clearInterval(myInterval)
    //             } else {
    //                 setMinutes(minutes - 1);
    //                 setSeconds(59);
    //             }
    //         } 
    //     }, 1000)
    //     return ()=> {
    //         clearInterval(myInterval);
    //       };
    // });

    return (
        <StyledFooter>
            <div className="text-content">
                <h3
                    data-aos="fade-right" 
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                >CLASS STARTS ON 5TH OF JULY, 2021
               </h3>
               <p>12 Days : 15 Hours : 2 Minutes : 10 Seconds</p>
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