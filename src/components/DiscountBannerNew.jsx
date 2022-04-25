import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom' 

const DiscountBanner = () => {
  return (
    <DiscountBannerStyle>
        <div className="container">
            <div className="text-container">
               <p> 30% Early <br/> bird discount</p>
            </div>
            <div className="detailsContainer">
                <p className='web'>Pay half your tuition on or before the 30th <br/> of April and get a 30% off the balance</p>
                <p className='mobile'>Pay half your tuition on or before the 30th of April and get a 30% off the balance</p>
            </div>
            <Link to="/pricing">APPLY</Link>
        </div>
    </DiscountBannerStyle>
  )
}

export default DiscountBanner

const DiscountBannerStyle = styled.div`
    background-color: #0E1098;
    padding: 3.3rem 12rem 4.4rem 5rem;
    min-height: 183px;
    box-sizing: border-box;

    @media(max-width: 768px){
        padding: 3.3rem 2rem 4.4rem 2rem;
        height: 70vh;
    }

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        @media(max-width: 768px){
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 2rem;
    }
        .text-container{
          p{ 
               color: #52DEE5;
                font-family: 'Montserrat', sans-serif;
                font-size: 2.5rem;
                font-weight: 800;
                font-style: normal;
                text-transform: uppercase;

                @media(max-width: 768px){
                    font-size: 2.06rem;
             }

            }
        }

        .detailsContainer{
            .web{
                color: #fff;
                font-family: 'Montserrat', sans-serif;
                font-weight: 400;
                font-size: 1.563rem;
                line-height: 2rem;
                @media(max-width: 768px){
                    display: none;
             }
            }
            .mobile{
                display: none;
                color: #fff;
                font-family: 'Montserrat', sans-serif;
                font-weight: 400;
                font-size: 1rem;
                line-height: 2rem;
                @media(max-width: 768px){
                    display: block;
             }
            }
        }
        a{
            color: #fff;
            text-decoration: none;
            border: 1px solid #52DEE5;
            padding: 1rem 2rem;
        }
    }
`