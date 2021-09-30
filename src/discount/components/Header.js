/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react'
import styled from "styled-components"

import logo from "../../assets/img/logo.svg";
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <StyledHeader>
            <Link to="/">
                <img className="logo" src={logo} alt="enoverlab logo" />
            </Link>
            <FiMenu onClick={() => setActive(!active)} className="first-icon" onClick={() => setActive(!active)} />

            <div className={active ? "menu active" : "menu"}>
                <NavHashLink activeClassName="active" to="/pmcourse/#plans">Plans</NavHashLink>
                <NavHashLink activeClassName="active" to="/pmcourse/#testimonial">Testimonial</NavHashLink>
                <NavHashLink activeClassName="active" to="/pmcourse/#sweet-spot">Sweet Spot</NavHashLink>
                <NavLink activeClassName="active" to="/pmcourse/contact">Contact</NavLink>
            </div>

            <div onClick={() => setActive(!active)} className={active ? "overlay active" : "overlay"}></div>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    padding: 0 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow-x: hidden;
    max-width: 100vw;

    @media (max-width: 768px) {
        padding: 0 6%;
    }

    .first-icon {
        font-size: 1.8rem;
        color: #000;
        cursor: pointer;

        @media (min-width: 768px) {
            display: none;
        }
    }

    .overlay {
        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, .4);
            cursor: pointer;
            z-index: 1;
            display: none;

            &.active {
                display: block;
            }
        }
    }

    .menu {
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            right: 0;
            width: 70%;
            height: 100vh;
            background: #fff;
            z-index: 3;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            display: none;

            &.active {
                display: flex;
            }
        }

        a {
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 400;
            color: #34296B;
            margin-left: 4rem;

            @media (max-width: 768px) {
                margin-left: 0;
                margin-bottom: 1.5rem;
            }

            &:first-child {
                margin-left: 0;
            }

            &:hover, &.active {
                color: #090C9B;
                font-weight: 700;
                font-family: 'nexabold', sans-serif;
            }
        }
    }

    .logo {

        @media (max-width: 768px) {
            width: 120px;
            height: auto;
        }
    }
`;
