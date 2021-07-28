import styled, { css, keyframes } from 'styled-components'
import perek from 'img/hints/perek.png'
import perekActive from 'img/hints/perek-active.png'
import perekDisabled from 'img/hints/perek-disabled.png'
import dad from 'img/hints/dad.png'
import dadActive from 'img/hints/dad-active.png'
import mom from 'img/hints/mom.png'
import momActive from 'img/hints/mom-active.png'
import dialog from 'img/hints/dialog.svg'

import { breakpoints } from 'helpers/breakpoints'

const push = keyframes`
  0% {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
    filter: brightness(1);
  }
  50% {
    transform: scale(0.5);
    animation-timing-function: ease-in;
    filter: brightness(1);
  }
  100%{
    transform: scale(1);
    animation-timing-function: ease-out;
    filter: brightness(0.5);
  }
`

export const Wrapper = styled.div``
export const Dialog = styled.div`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62.41px;
    height: 21px;
    left: 52px;
    top: -8px;
    padding: 0 0 4px 8px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${dialog});
    font-size: 4px;
    font-weight: 600;
    line-height: 112.63%;
    text-align: center;
    white-space: pre-line;

    ${breakpoints.tablet} {
        left: 90px;
        top: -10px;
        width: 110.94px;
        height: 37.33px;
        font-size: 8px;
        padding: 0 0 5px 12px;
    }

    ${breakpoints.desktop} {
        font-size: 12px;
        width: 204px;
        height: 63.85px;
        left: 150px;
        top: -21px;
        padding: 0 0 5px 10px;
    }

    transform: scale(0.2);

    ${(props) =>
        props.active
            ? css`
                  visibility: visible;
                  transform: scale(1);
              `
            : css`
                  visibility: hidden;
              `};

    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
`

const Hint = styled.div`
    position: relative;
    z-index: 100;
    width: 105px;
    height: 105px;
    background-size: contain;
    background-repeat: no-repeat;

    ${(props) =>
        props.disabled && !props.active
            ? `cursor: not-allowed; filter: brightness(0.5);`
            : ``};

    &.push {
        animation-name: ${push};
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
    }

    ${(props) => (props.trainingIsOver ? `` : `pointer-events: none;`)};

    ${breakpoints.tablet} {
        width: 165px;
        height: 165px;
    }

    ${breakpoints.desktop} {
        margin-bottom: 0;
    }

    &:hover ${Dialog} {
        ${(props) =>
            !props.disabled ? `transform: scale(1); visibility: visible;` : ``};
    }
`

export const HintPerek = styled(Hint)`
    background-image: ${(props) =>
        props.active ? `url(${perekActive})` : `url(${perek})`};
    ${(props) =>
        props.disabled && !props.active
            ? `background-image: url(${perekDisabled});`
            : ``};
    width: 68.3px;
    height: 74.71px;

    ${breakpoints.tablet} {
        width: 107.33px;
        height: 117.4px;
    }

    ${breakpoints.desktop} {
        width: 182.79px;
        height: 199.93px;
    }
`

export const HintFather = styled(Hint)`
    background-image: ${(props) =>
        props.active ? `url(${dadActive})` : `url(${dad})`};
    width: 68.3px;
    height: 75.6px;

    ${breakpoints.tablet} {
        width: 106.68px;
        height: 118.08px;
    }

    ${breakpoints.desktop} {
        width: 181.49px;
        height: 200.88px;
    }
`

export const HintMom = styled(Hint)`
    background-image: ${(props) =>
        props.active ? `url(${momActive})` : `url(${mom})`};
    width: 79.85px;
    height: 75.97px;

    ${breakpoints.tablet} {
        width: 126.24px;
        height: 119.38px;
    }

    ${breakpoints.desktop} {
        width: 214.46px;
        height: 204.03px;
    }
`
