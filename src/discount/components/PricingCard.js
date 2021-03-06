import React from 'react'

import styled from "styled-components";

const PricingCard = ({ primary, children, title, price, dur, objective  }) => {
    return (
        <PricingCardWrapper 
            className={primary ? "active" : ""}
            data-aos="fade-right" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" 
            data-aos-delay="1000"
        >
            <h2 className="title">{title}</h2>
            <h3>Course Objectives</h3>
            <p className="objective">{objective}</p>
            { children }
        </PricingCardWrapper>
    )
}

export default PricingCard

const PricingCardWrapper = styled.div`
    width: 100%;
    border: none;
    position: relative;

    h2.title {
        font-weight: 800;
        font-size: 36px;
        color: #34296B;
        font-family: 'nexablack', sans-serif;
    }
    h3 {
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
        font-family: 'nexaregular';
        font-weight: 400;
        color: #1A1A1A;
    }
    @media(max-width: 765px) {
        margin-top: 3rem;
        h2, h3, p.objective {
            text-align: center;
        }
        h2.title {
            font-size: 3rem;
        }
        h3 {
            margin: 20px auto 0px auto;
        }
        p.objective {
            font-weight: bold;
            font-size: 18px;
            color: #1A1A1A;
            margin: 10px auto 50px auto;
        }
    }
`