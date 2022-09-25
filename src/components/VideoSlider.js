import React from 'react'
import Slider from 'react-slick'
import VidModal from './VidModal'
import styled from 'styled-components'

import BunmiImg from '../assets/img/Bunmi.png'
import DamilolaImg from '../assets/img/Damilola.png'
// import TunjiImg from '../assets/img/Tunji.png'
import ItunuImg from '../assets/img/Itunu.png'

import {AiOutlineArrowLeft, AiOutlineArrowRight, AiFillPlayCircle} from 'react-icons/ai'



const  itunu = "https://res.cloudinary.com/perxels/video/upload/v1653129859/Upload_1_cyp9tf.mp4"
const damilola = "https://res.cloudinary.com/perxels/video/upload/v1653130009/upload_3_bh7kd3.mp4"
const bunmi = "https://res.cloudinary.com/perxels/video/upload/v1653128825/upload_4_ovgd6i.mp4"
// const chiom = "https://res.cloudinary.com/dqyu8yphl/video/upload/v1648640292/Chioma_fpjoqt.mp4"
const Data = [
    {
        id: 0,
        videoUrl: bunmi,
        imgUrl: BunmiImg,
        name: "Bunmi"
    },
    {
        id: 1,
        videoUrl: damilola,
        imgUrl: DamilolaImg,
        name: "Damilola"
    },
    // {
    //     id: 2,
    //     videoUrl: chiom,
    //     imgUrl: TunjiImg,
    //     name: "Tunji"
    // },
    {
        id: 3,
        videoUrl: itunu,
        imgUrl: ItunuImg,
        name: "Itunu"
    }

]

const VideoSlider = (props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slider = React.useRef(null);
    const [modal, setModal] = React.useState(false);

    const videoSrc = Data[currentSlide].videoUrl;

    const openModal = () => {
        setModal(!modal);
     
    }  

    const next = () => {
        slider.current.slickNext();
    }

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
    <div className="textContainer">
        <h1  data-aos="fade-top" 
        data-aos-easing="ease-in-sine"
        data-aos-duration="20000">See the results of our training</h1>
    </div>


    {/* <div className='slide-container'  >     
    
            <Slider ref={slider} className="slider" {...settings} data-aos="fade-left" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500" 
                data-aos-delay="300"> 
            {Data.map(({videoUrl, name, id, imgUrl}, i) => (
                <div key={id}>
                  

                        <div className="image-wrapper">
                        <div className="image-container" 
                        style={{
                                    backgroundImage: `url(${imgUrl})`
                                }}>
                            <img src={imgUrl} alt="" />
                            
                            <div className="playIcon" onClick={openModal} >
                                <AiFillPlayCircle className='play' />
                            </div>
               
               

                         </div>
                    </div>
                </div>    
                )
            )
        }
        </Slider>
        {
                                    modal ? (<VidModal videoSrc={videoSrc} closeModal={openModal}/>) : null
                                }
        <div className="button-container">
            <button className={currentSlide === 0 ? "button backward" : "button backward show"} onClick={previous}>
            <AiOutlineArrowLeft className="icon" /> 
            </button>
            
            <button className={currentSlide >= 3 ? "button forward" : "button forward show"} onClick={next}><AiOutlineArrowRight className='icon'/></button>
        </div>
    </div> */}
    <div className='video-container'>
        <div className="video-wrapper">
            <video src="https://res.cloudinary.com/dqyu8yphl/video/upload/v1664139637/idara_zwvrlr.mp4" 
            autoPlay
            muted
            controls
            loop />
        </div>
    </div>
    </SliderContainer>
  )
}

export default VideoSlider


const SliderContainer = styled.div`
    position: relative;
    width: 99%;
    height: 100%;
    overflow-x: hidden;
    padding: 5% 5%;

    .textContainer{
        display: flex;
        justify-content: center;
        font-size: 1.5em;
        color: #130C9B;
        h1{
            font-weight: 800;
        }
        padding: 1.5em 0;

        @media (max-width: 768px) {
            font-size: 0.95em;
        }
    }

    .slide-container {
        position: relative;
        width: 100%;
            .slick-slider{
                position: relative;
                display: block;
                box-sizing: border-box;
            }

        .slick-dots{ 
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            & li button:before {
            position: relative;
            font-size: 1.5rem;
            align-self: baseline;

        }
    }
        .slick-slide > div {
        width: 100%;
        /* margin-top: 50px; */
        margin: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        background: transparent;
}

            .button-container{
                position: relative;
                display: flex;
                justify-content: center;
                width: 100%;
                margin: 0 auto;
                padding: 1em 0;
                .button{
                    width: 2.375em;
                    height: 2.375em;
                    border-radius: 50%;
                    background: #C4C4C4;
                    border: none;
                    outline: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 5em;  
                    @media(max-width: 768px){
                        width: 2.5em;
                        height: 2.5em;
                    }
                    &:first-child {
                    margin-right: 1.5rem;
                } 

                &:hover, &.show {
                    background: #090C9B;
                }


                    .icon{
                        font-size: 1.7rem;
                         color: #fff;

                    @media (max-width: 768px) {
                        font-size: 1.25rem;
                    }
                    }
                }
            }
        }
    
    .image-wrapper{
        padding: 0 15% 0 15%;
        height: 100%;
        width: 100%;
        @media(max-width:428px){
                padding: 0 0% 0 0%;
                
            }
         @media (max-width: 768px) {
            padding: 0 0% 0 0%;
        
         }   
        .image-container{ 
            background-repeat: no-repeat;
            position: relative;
            height: inherit;
            width: 100%;
            background-size: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-position: center;

            @media(max-width:1390px){
                
            }
            img{
                visibility: hidden;
                height: 100%;
                width: 100%;
                position: static;
            }
            .playIcon{
                display: flex;
                position: absolute;
                justify-content: center;
                align-items: center;
                right: 45%;
                cursor: pointer;
                z-index: 20;
            .play{
                color: #FCD900;
                font-size: 6rem;

                @media (max-width: 768px) {
                    font-size: 4em;
                }
            }
            
            } 
        } 
    }
        
    .video-container{
        position: relative;
        width: 100%;
        height: 100%;
        padding: 5% 5%;
        .video-wrapper{
            position: relative;
            width: 100%;
            height: 100%;
            video{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    
`