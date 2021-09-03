import React from 'react'

import styled from "styled-components";

const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://www.instagram.com/p/CTUJsB8MZ5q/?utm_medium=copy_link">Follow us on instagram</a>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    width: 100%;
    margin-top: -1rem;
    margin-bottom: 2rem;
    display:flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        font-weight: 400;
        color: #090C9B;
        font-size: 1rem;
    }
`