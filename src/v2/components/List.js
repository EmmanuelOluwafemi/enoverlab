import React from 'react'

import styled from 'styled-components'

import check from '../../assets/img/check.svg';

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
    align-items: center;
    margin-top: 5px;


    img {
        width: 1.25rem;
        height: 1.25rem;
    }

    .content {
        flex-grow: 1;
        width: 100%;
        height: 100%;
        font-size: 20px;
        font-weight: 400;
        font-family: 'nexaregular', sans-serif;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        margin-bottom: .5rem;
        margin-left: 1.5rem;
        display: flex;
        align-items: center;
    }
`