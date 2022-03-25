import React from 'react'
import styled from  'styled-components' 

import { IoCloseOutline } from 'react-icons/io5'



const VidModal = ({videoSrc, closeModal}) => {
    
  return (
    <ModalStyle>
        <div className="modal-align" >
            <div className="modal-content">
                <IoCloseOutline className='modal-close' aria-label='Close modal' onClick={closeModal}/>
                <div className="modal-video">
                        <video src={videoSrc} className="vid" autoPlay></video>
                    </div> 
            </div>
        </div>
    </ModalStyle>
  )
}

export default VidModal;

const ModalStyle = styled.section`
    
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(28, 28, 28, 0.19);
  backdrop-filter: blur(6px);
  opacity: 1;
  animation-timing-function: ease-out;
  animation-duration: 0.3s;
  animation-name: modal-video;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -ms-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
  z-index: 100;



    .modal-align{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .modal-content{
        width: 50em;
        height: 31.25em;
        border-radius: 1.25em;
        background: transparent;
        color: #000;
        margin: 0rem 4rem;
    }

    .modal-close{
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        bottom: 3.125em;
        width: 2em;
        height: 2em;
        padding: 0;
    }   

    .modal-video{
        display: flex;
        position: relative;
        bottom: 2.3125em;

        .vid{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`