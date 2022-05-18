import React from 'react'
import styled from 'styled-components'


const TestimVid = () => {
  return (
    <StyledVideo>
            <div className="video-container">
            <video autoPlay="autoplay" preload='metadata' src="https://res.cloudinary.com/perxels/video/upload/v1652889070/VID_33131030_145213_924_eibscc.mp4" ></video>
            </div>
    </StyledVideo>
  )
}

export default TestimVid

const StyledVideo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media(max-width: 768px) {
        padding: 3rem 2rem;
    }    
    .video-container{
        width: 40rem;
        height: 35rem;
    }

    video {
        width: 100%;
        height: 100%;
    }
`