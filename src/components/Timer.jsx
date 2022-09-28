import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const Timer = () => {
    const [expiryTime, setExpiryTime] = useState("3 oct 2022 11:59:00");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: "",
        countdownHours: "",
        countdownlMinutes: "",
        countdownSeconds: "",
        });
    
        const countdownTimer = () => {
            const timeInterval = setInterval(() => {
              const countdownDateTime = new Date(expiryTime).getTime();
              const currentTime = new Date().getTime();
              const remainingDayTime = countdownDateTime - currentTime;
              const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
              const totalHours = Math.floor(
                (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              const totalMinutes = Math.floor(
                (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
              );
              const totalSeconds = Math.floor(
                (remainingDayTime % (1000 * 60)) / 1000
              );
          
              const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds,
              };
          
              setCountdownTime(runningCountdownTime);
          
              if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
              }
            }, 1000);
          };

          
    useEffect(() => {
    countdownTimer();
    });

  return (
    <StyledCountdown>
        <div className="countdown">
            <div className="countdown__item">
                <div className="countdown__time">{countdownTime.countdownDays}</div>
                <div className="countdown__text">Days</div>
            </div>
            <div className="countdown__item">
                <div className="countdown__time">{countdownTime.countdownHours}</div>
                <div className="countdown__text">Hours</div>
            </div>
            <div className="countdown__item">
                <div className="countdown__time">{countdownTime.countdownMinutes}</div>
                <div className="countdown__text">Minutes</div>
            </div>
            <div className="countdown__item">
                <div className="countdown__time">{countdownTime.countdownSeconds}</div>
                <div className="countdown__text">Seconds</div>
            </div>
        </div>
    </StyledCountdown>
  )
}

export default Timer

const StyledCountdown = styled.div`
    .countdown {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        padding-bottom: 2rem;
        .countdown__item{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 1rem;
            .countdown__time{
                font-size: 3rem;
                color: #fff;
            }
            .countdown__text{
                font-size: 2rem;
                color: #fff;
            }
        }
    @media(max-width: 768px){

        .countdown__item{
            .countdown__time{
                font-size: 1.5rem;
            }
            .countdown__text{
                font-size: 1rem;
            }
        }
    }
    }
`