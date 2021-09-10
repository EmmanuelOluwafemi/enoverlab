import React from 'react'

import styled from 'styled-components'

import check from '../assets/img/check.svg';

const List = ({text}) => {
    return (
        <ListStyled>
            <img src={check} alt="check" />
            <div className="content">{text}</div>
        </ListStyled>
    )
}

export default List

const ListStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;

    img {
        width: 1.25rem;
        height: 1.25rem;
    }

    .content {
        flex-grow: 1;
        width: 100%;
        font-size: 0.875rem;
        font-weight: 700;
        font-family: 'nexabold', sans-serif;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
        margin-left: 9px;
    }
`