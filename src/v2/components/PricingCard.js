import React from 'react'

import styled from "styled-components";

const PricingCard = ({ primary, children, title, price, dur, objective  }) => {
    return (
        <PricingCardWrapper className={primary ? "active" : ""}>
            <h2>{title}</h2>
            <h3>Course Objectives</h3>
            <p classname="objective">{objective}</p>
            { children }
        </PricingCardWrapper>
    )
}

export default PricingCard

const PricingCardWrapper = styled.div`
    width: 100%;
    border: none;
    position: relative;

    h2 {
        font-weight: 800;
        font-size: 36px;
        color: #34296B;
    }
    h2 {
        font-weight: bold;
        font-size: 20px;
        color: #121212;
        margin: 20px auto;
    }
    p.objective {
        font-weight: bold;
        font-size: 18px;
        color: #1A1A1A;
        margin: 20px auto;
    }

    h4 {
        font-size: 36px;
        font-weight: 800;
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
    .content {
        font-size: 22px;
    }
`