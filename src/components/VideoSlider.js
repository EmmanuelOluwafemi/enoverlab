import React from 'react'

import styled from 'styled-components'
import Slider from 'react-slick'

import sarah from '../assets/img/sarah.mp4'
import matthew from '../assets/img/matthew.mp4'

import sarahImg from '../assets/img/Sarac.png'
import matthewImg from '../assets/img/Matc.png'

import overlayImg from '../assets/img/overlayImg.png'
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiFillPlayCircle} from 'react-icons/ai'

import ModalVideo from 'react-modal-video'

import VidModal from './VidModal'

const Data = [
    {
        id: 0,
        videoUrl: sarah,
        imgUrl: sarahImg,
        name: "Sarah"
    },
    {
        id: 1,
        videoUrl: matthew,
        imgUrl: matthewImg,
        name: "Matthew"
    }

]

const VideoSlider = (props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slider = React.useRef(null);
    const [modal, setModal] = React.useState(false);

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
    <div className='slide-container'>     
    
            <Slider ref={slider} className="slider" {...settings}> 
            {Data.map(({videoUrl, name, id, imgUrl}, i) => (
                <div key={id}>
                  

                        <div className="image-wrapper">
                        <div className="image-container" 
                        style={{
                                    backgroundImage: `url(${imgUrl})`,
                                }}>
                            <img src={imgUrl} alt="" />
                            
                            <div className="playIcon" onClick={openModal} >
                                <AiFillPlayCircle className='play' />
                               
                            </div>
               
               
                            {/* <video className='testimonialVideo' src={videoUrl} autoPlay loop muted /> */}
                         </div>
                    </div>
                </div>    
                )
            )
        }
        </Slider>
        {
                                    modal ? (<VidModal videoSrc={currentSlide === 0 ? sarah : matthew} closeModal={openModal}/>) : null
                                }
        <div className="button-container">
            <button className={currentSlide === 0 ? "button backward" : "button backward show"} onClick={previous}>
            <AiOutlineArrowLeft className="icon" /> 
            </button>
            
            <button className={currentSlide >= 1 ? "button forward" : "button forward show"} onClick={next}><AiOutlineArrowRight className='icon'/></button>
        </div>
    </div>
    </SliderContainer>
  )
}

export default VideoSlider

const DotsContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    background-color: red;
`

const SliderContainer = styled.div`
    position: relative;
    width: 99%;
    height: 100%;
    overflow-x: hidden;
    padding: 0 5%;
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
                
                .button{
                    width: 4.375em;
                    height: 4.375em;
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
        
    
`