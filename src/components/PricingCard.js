import React from 'react'

import styled from "styled-components";

const PricingCard = ({ primary, children, title, price, dur, subtitle  }) => {
    return (
        <PricingCardWrapper className={primary ? "active" : ""}>
            <h4>{title}</h4>
            <div className="price-tag">
                <h6>{price}</h6>
                <p>FOR {dur}</p>
            </div>
            <p>{subtitle}</p>
            { children }
            <a href="https://wa.me/2349063124595?text='Hello%20EnoverLab%20%0AI%20will%20like%20to%20enrol%20for%20Product%20Management%20Course.">Enroll for this plan</a>
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

    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        font-family: 'nexabold', sans-serif;
        color: #090C9B;
        text-transform: uppercase;
    }

    .price-tag {
        width: 100%;
        max-width: 281px;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ABFBFF;
        border-radius: 19px;
        margin-bottom: 1rem;
        margin-top: .75rem;

        h6 {
            color: #090C9B;
            font-size: 1.5rem;
            font-weight: 700;
            font-family: 'nexabold', sans-serif;
        }

        p {
            font-size: .9rem;
            font-weight: 400;
            font-family: 'nexaregular', sans-serif;
            color: #090C9B;
            margin: 0;
            padding: 0;
        }
    }

    p {
        font-size: .9rem;
        font-weight: 800;
        font-family: 'nexabold', sans-serif;
        margin-bottom: 2.4rem;
    }
`