import React from 'react'

import styled from "styled-components";

import jira from "../../assets/img/Jira.svg";
import figma from "../../assets/img/figma.svg";
import googleAnalytics from "../../assets/img/googleAnalytics.svg";
import trello from "../../assets/img/Trello.svg";
import productPlan from "../../assets/img/ProductPlan.svg";

const Tools = () => {
    return (
        <StyledTools>
            <h1>Tools you would be learning how to use</h1>
            <div className="wrapper">
                <img className="productPlan" src={productPlan} alt="product plan" />
                <img className="trello" src={trello} alt="trello" />
                <img className="figma"  src={figma} alt="figma" />
                <img className="jira" src={jira} alt="jira" />
                <img className="google" src={googleAnalytics} alt="google analytics" />
            </div>
        </StyledTools>
    )
}

export default Tools

const StyledTools = styled.section`
    width: 100%;
    padding: 3rem 6%;
    background: #F2FBFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        color: #1A1A1A;
        text-align: center;
        font-family: 'nexablack', sans-serif;
        margin-bottom: 1.5rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 520px;

        @media (max-width: 768px) {
            justify-content: space-evenly;

            img {
                margin-bottom: 1rem;

                &.productPlan {
                    height: 1.1rem;
                }

                &.trello {
                    height: 1.5rem;
                }

                &.figma {
                    height: 2.5rem;
                }

                &.jira {
                    height: 3rem;
                }

                &.google {
                    height: 4rem;
                    margin-top: -1rem;
                }
            }
        }
    }
`