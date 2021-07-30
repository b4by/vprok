import styled, { keyframes } from 'styled-components'
import { breakpoints } from 'helpers/breakpoints'

const fadeIn = keyframes`
  0% {
    /* opacity: 0; */
    transform: scale(0.9);
  }
  50% {
     transform: scale(1.1);
  }
  100%{
    transform: scale(0.9);
  }
`

export const Content = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fdfddb;

    ${breakpoints.desktop} {
        display: none;
    }
    @media (pointer: fine) {
        display: none;
    }
`

export const IconsPhone = styled.div`
    display: flex;
    justify-content: center;

    & svg {
        animation-name: ${fadeIn};
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }
`

export const Text = styled.div`
    position: relative;
    text-align: center;
    margin-top: 187px;
    z-index: 2;
    white-space: pre-line;
    user-select: none;
    margin-bottom: 31px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 112.63%;
`
