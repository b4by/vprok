import styled, { css } from 'styled-components'
import levelTwo from 'img/lvl-2/bg.jpg'
import upperLayer from 'img/lvl-1/upper-layer.png'
import tomato from 'img/lvl-1/tomato.png'
import radish from 'img/lvl-1/radish.png'
import paprika from 'img/lvl-1/paprika.png'
import chicken from 'img/lvl-1/chicken.png'
import cucumber from 'img/lvl-1/cucumber.png'
import watermelon from 'img/lvl-1/watermelon.png'
import wood from 'img/wood.jpg'
import { breakpoints } from 'helpers/breakpoints'
import timer from 'img/timer.png'
import timerBordered from 'img/timer-bordered.png'

export const Background = styled.div`
    position: relative;
    display: flex;
    background-image: url(${wood});
    height: 100vh;
    width: 100vw;
    background-size: contain;
    background-color: #fdfddb;
    overflow: hidden;
    ${(props) =>
        props.blured
            ? css`
                  filter: blur(5px);
              `
            : ''};
`

export const Wrapper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: ${(props) =>
        props.ratio ? `translate(-50%, -50%) scale(${props.ratio})` : 'none'};
    width: 640px;
    height: 360px;
    overflow: hidden;

    background-size: cover;
    background-image: url(${levelTwo});

    ${breakpoints.tablet} {
        width: 1024px;
        height: 768px;
        background-position: center right;
    }

    ${breakpoints.desktop} {
        width: 1920px;
        height: 1080px;
        background-position: unset;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 640px;
        height: 360px;
        pointer-events: none;
        z-index: 10;
        background-image: url(${upperLayer});
        background-size: cover;
        background-repeat: no-repeat;

        ${breakpoints.tablet} {
            width: 1024px;
            height: 768px;
            background-position: center right;
        }

        ${breakpoints.desktop} {
            width: 1920px;
            height: 1080px;
            background-position: unset;
        }
    }
`

export const Scene = styled.div``

const Item = styled.div`
    position: absolute;
    background-size: cover;
    visibility: ${(props) => (props.hidden ? `hidden` : `visible`)};
    ${(props) =>
        props.highlight
            ? `filter: brightness(200%) saturate(150%) sepia(10%) drop-shadow(0px 0px 11px black);`
            : ``};
`

export const Radish = styled(Item)`
    top: 211px;
    left: 424px;
    width: calc(85.5px * 0.2769);
    height: calc(52px * 0.2769);
    background-image: url(${radish});

    ${breakpoints.tablet} {
        width: calc(85.5px * 0.5846);
        height: calc(52px * 0.5846);
        top: 453.094px;
        left: 520px;
    }

    ${breakpoints.desktop} {
        top: 626px;
        left: 1267px;
        width: 85.5px;
        height: 52px;
    }
`

export const Tomato = styled(Item)`
    top: 213px;
    left: 381px;
    width: calc(46px * 0.2769);
    height: calc(39.5px * 0.2769);
    background-image: url(${tomato});

    ${breakpoints.tablet} {
        width: calc(46px * 0.5846);
        height: calc(39.5px * 0.5846);
        top: 455.094px;
        left: 428px;
    }

    ${breakpoints.desktop} {
        top: 638px;
        left: 1134px;
        width: 46px;
        height: 39.5px;
    }
`
export const Paprika = styled(Item)`
    top: 281px;
    left: 503px;
    width: calc(102.5px * 0.2769);
    height: calc(60px * 0.2769);
    background-image: url(${paprika});

    ${breakpoints.tablet} {
        width: calc(102.5px * 0.5846);
        height: calc(60px * 0.5846);
        top: 602px;
        left: 722.3px;
    }

    ${breakpoints.desktop} {
        top: 842px;
        left: 1534px;
        width: 102.5px;
        height: 60px;
    }
`
export const Сucumber = styled(Item)`
    top: 168px;
    left: 375px;
    width: calc(42px * 0.2769);
    height: calc(25px * 0.2769);
    background-image: url(${cucumber});

    ${breakpoints.tablet} {
        width: calc(42px * 0.5846);
        height: calc(25px * 0.5846);
        top: 361.094px;
        left: 416px;
    }

    ${breakpoints.desktop} {
        top: 504px;
        left: 1123px;
        width: 42px;
        height: 25px;
    }
`
export const Chicken = styled(Item)`
    top: 252px;
    left: 319px;
    width: calc(94px * 0.2769);
    height: calc(62.5px * 0.2769);
    background-image: url(${chicken});

    ${breakpoints.tablet} {
        width: calc(94px * 0.5846);
        height: calc(62.5px * 0.5846);
        top: 533.094px;
        left: 298px;
    }

    ${breakpoints.desktop} {
        top: 743px;
        left: 954px;
        width: 94px;
        height: 62.5px;
    }
`

export const Watermelon = styled(Item)`
    top: 265px;
    left: 591px;
    width: calc(124.5px * 0.2769);
    height: calc(148px * 0.2769);
    background-image: url(${watermelon});

    ${breakpoints.tablet} {
        width: calc(124.5px * 0.5846);
        height: calc(148px * 0.5846);
        top: 575.094px;
        left: 878px;
    }

    ${breakpoints.desktop} {
        top: 798px;
        left: 1764px;
        width: 124.5px;
        height: 148px;
    }
`

export const Timer = styled.div`
    position: absolute;
    right: 30px;
    top: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 28px;

    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #aae600;
    box-sizing: border-box;
    border-radius: 100px;

    font-style: normal;
    font-weight: 550;
    text-align: center;
    color: #c5ff76;

    ${breakpoints.tablet} {
        width: 150px;
        height: 32px;
        font-style: normal;
        font-weight: 550;
        font-size: 20px;
        line-height: 112.63%;
        right: 35px;
        top: 92px;
    }

    ${breakpoints.desktop} {
        width: 365px;
        height: 78px;
        font-size: 40px;
        line-height: 112.63%;
        right: 116px;
        top: 92px;
    }

    &:after {
        content: '';
        position: absolute;
        right: 74px;
        bottom: -21px;
        width: 81px;
        height: 81px;
        background: ${(props) =>
            props.showTimer ? `url(${timerBordered})` : `url(${timer})`};
        background-size: cover;

        ${breakpoints.tablet} {
            right: 100px;
            bottom: -30px;
            width: 97px;
            height: 98px;
        }

        ${breakpoints.desktop} {
            right: 247px;
            bottom: -75px;
            width: 236px;
            height: 237px;
        }
    }
`

export const Hints = styled.div`
    position: absolute;
    top: 22px;
    left: 22px;
    gap: 22px;

    display: flex;
    flex-direction: column;

    ${breakpoints.tablet} {
        top: 105px;
        left: 36px;
        gap: 80px;
    }

    ${breakpoints.desktop} {
        top: 102px;
        left: 116px;
        gap: 73px;
    }
`

export const Answers = styled.div`
    position: absolute;
    z-index: 11;
    display: flex;
    align-items: center;
    bottom: 16px;
    left: 22px;
    gap: 11px;

    ${breakpoints.tablet} {
        left: 30px;
        bottom: 35px;
        gap: 35px;
    }

    ${breakpoints.desktop} {
        left: 115px;
        bottom: 60px;
        gap: 60px;
    }
`

export const Answer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${(props) => (props.hidden ? `hidden` : `visible`)};

    width: 189px;
    height: 28px;

    background: rgba(0, 0, 0, 0.7);
    border: ${(props) =>
        props.showAnswer ? `3px solid #ffffff` : `1px solid #AAE600`};
    box-sizing: border-box;
    border-radius: 100px;

    font-weight: 600;
    font-size: 16px;
    line-height: 112.63%;
    color: #c5ff76;

    ${breakpoints.tablet} {
        width: 297px;
        height: 45px;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        width: 523px;
        height: 78px;
        font-size: 40px;
        border: ${(props) =>
            props.showAnswer ? `5px solid #ffffff` : `1px solid #AAE600`};
    }
`
