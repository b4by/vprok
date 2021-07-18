import React from 'react'
import styled from 'styled-components'
import { useStore } from 'store'
import { breakpoints } from 'helpers/breakpoints';
import play from 'img/play.svg';
import playActive from 'img/play-active.svg';

export const Wrapper = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background: rgba(0, 0, 0, 0.7);
    

    ${breakpoints.tablet} {

    }

    ${breakpoints.desktop} {
        
    }
`;

export const PlayButon = styled.div`
    margin: 0 auto;
    height: 117.76184844970703px;
    width: 121px;
    background-image: url(${play});
    background-size: cover;
    cursor: pointer;

    &:active, &:hover {
        background-image: url(${playActive});
    }

    ${breakpoints.tablet} {
        margin-top: 302px;
        height: 157.87106323242188px;
        width: 161.98146057128906px;
    }

    ${breakpoints.desktop} {
        margin-top: 359px;
        height: 356;
        width: 346;
    }
`;

export default function StartGame() {
    const { game } = useStore()

    return (
        <Wrapper>
            <PlayButon onClick={() => { game.start() }} />
        </Wrapper>
    )
}
