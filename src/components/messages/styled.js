import styled, { keyframes } from 'styled-components'
import { breakpoints } from 'helpers/breakpoints'

const heartbeat = keyframes`
  0% {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  20% {
    transform: scale(0.80);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`

export const Wrapper = styled.div`
    position: absolute;
    top: 215px;
    left: 128px;
    display: flex;
    flex-direction: column;
    width: 481px;
    min-height: 78px;
    padding: 7px 20px 0;
    pointer-events: none;
    z-index: 11;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #aae600;
    box-sizing: border-box;
    border-radius: 117px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 112.63%;
    text-align: center;
    color: #ffffff;

    ${breakpoints.tablet} {
        width: 765px;
        min-height: 124px;
        top: 513px;
        left: 224px;
        padding: 7px 26px 0;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        top: 639px;
        left: 367px;
        width: 1436px;
        min-height: 234px;
        font-size: 40px;
        padding: 7px 90px 0;
    }
`

export const Text = styled.div`
    margin: auto;
    white-space: pre-line;
    user-select: none;

    & span {
        font-weight: 300;
        color: #c5ff76;
        font-style: italic;
    }
`

export const Next = styled.div`
    cursor: pointer;
    padding: 2px;
    width: 12px;
    height: 12px;
    margin: 5px auto 10px;
    animation: ${heartbeat} 2s ease-in-out infinite both;

    & svg {
        width: 12px;
        height: 12px;

        ${breakpoints.tablet} {
            width: 25.12px;
            height: 23.57px;
        }

        ${breakpoints.desktop} {
            width: 44px;
            height: 44px;
        }
    }

    ${breakpoints.tablet} {
        width: 25.12px;
        height: 23.57px;
        margin-bottom: 16px;
    }

    ${breakpoints.desktop} {
        width: 44px;
        height: 44px;
        margin-bottom: 32px;
    }
`
