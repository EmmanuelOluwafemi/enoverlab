import React from 'react'

import styled from "styled-components";

const PricingCard = ({ primary, children, title, price, subtitle, enrolText, weeks, discount  }) => {
    return (
        <PricingCardWrapper className={primary ? "active" : ""}>
            <div className="title-tag">
            <h4>{title}</h4>
            <h6>{weeks}</h6>
            </div>
            <p>{subtitle}</p>
            <div className="price-tag">
                <div>
                <h6>{price} <span>{discount}</span></h6>
                </div>
                <div className='discount-text'>
                <p></p>
                </div>
            </div>
            { children }
            <a href="https://forms.gle/2Ymz8FovVJEX6uDD9">{enrolText}</a>
        </PricingCardWrapper>
    )
}

export default PricingCard

const PricingCardWrapper = styled.div`
    width: 100%;
    padding: 2.5rem 1.5rem;
    background: #52DEE5;
    border: none;
    max-height: 643px;
    position: relative;

    a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1.5rem;
        font-size: 1rem;
        color: #fff;
        line-height: 104%;
        padding: 1rem 0;
        background: #090C9B;
        box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
        margin-top: 2rem;
        text-decoration: none;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 195px;

        .icons {
            margin-left: .8rem;
            font-size: 1.5rem;
        }

        &:hover {
            background: rgba(9, 12, 155, 0.9);
            color: #fff;
        }
    }

    &.active {
        border: 4px solid #090C9B;
        background: #F6FDFE;
        max-height: 1400px;
    }

    .title-tag {
        display: flex;
        column-gap: 0.3rem;
        align-items: center;

        h4 {
        font-size: 1.2rem;
        font-weight: 700;
        font-family: 'nexabold', sans-serif;
        color: #090C9B;
        text-transform: uppercase;
    }
    h6{
        font-size: 0.75rem;
        color: #090C9B;
        font-weight: 700;
        font-family: 'nexabold', sans-serif;
    }
    }
   

    .price-tag {
        position: relative;
        width: 100%;
        max-width: 281px;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        column-gap:1rem;
        justify-content: flex-start;
        background: #ABFBFF;
        border-radius: 19px;
        margin-bottom: 2rem;
        margin-top: .75rem;
        box-sizing: border-box;

        h6 {
            color: #090C9B;
            font-size: 1.5rem;
            font-weight: 700;
            font-family: 'nexabold', sans-serif;

            span{
                color: #090C9B;
                align-items: baseline;
                font-size: 0.9rem;
                font-weight: 700;
                font-family: 'nexabold', sans-serif;
                text-decoration: line-through;
            }
        }

       
    }

    p {
        font-size: .9rem;
        font-weight: 800;
        font-family: 'nexabold', sans-serif;
        margin-bottom: .8rem;
    }
`