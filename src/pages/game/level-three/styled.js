import styled, { css, keyframes } from 'styled-components'
import levelOne from 'img/lvl-1/bg.jpeg'
import levelOneNonRetina from 'img/lvl-1/1@0.5x.jpg'
import levelOneMobile from 'img/lvl-1/bg-mobile.jpeg'
import levelOneTablet from 'img/lvl-1/bg-tablet.jpeg'
import upperLayer from 'img/lvl-2/upper-layer.png'
import tomato from 'img/lvl-1/tomato.png'
import radish from 'img/lvl-1/radish.png'
import paprika from 'img/lvl-1/paprika.png'
import chicken from 'img/lvl-1/chicken.png'
import cucumber from 'img/lvl-1/cucumber.png'
import watermelon from 'img/lvl-1/watermelon.png'
import grass from 'img/lvl-1/grass.png'
import juce from 'img/lvl-1/juce.png'
import meat from 'img/lvl-1/meat.png'
import sausage from 'img/lvl-1/sausage.png'
import ketchup from 'img/lvl-1/ketchup.png'
import melon from 'img/lvl-2/melon.png'
import cage from 'img/lvl-2/cage.png'
import caol from 'img/lvl-2/coal.png'
import mangal from 'img/lvl-2/mangal.png'
import cups from 'img/lvl-2/cups.png'
import shampur from 'img/lvl-2/shampur.png'
import bottle from 'img/lvl-3/bottle.png'
import bucket from 'img/lvl-3/bucket.png'
import rake from 'img/lvl-3/rake.png'
import waterPot from 'img/lvl-3/water-pot.png'
import ball from 'img/lvl-3/ball.png'
import wood from 'img/wood.jpeg'
import { breakpoints } from 'helpers/breakpoints'
import timer from 'img/timer.png'
import timerBordered from 'img/timer-bordered.png'
import { TransitionGroup } from 'react-transition-group'

const position = {
    desktop: {
        0: {
            top: 942,
            left: 376.5,
        },
        1: {
            top: 942,
            left: 959.5,
        },
        2: {
            top: 942,
            left: 1542.5,
        },
    },
    tablet: {
        0: {
            top: 688,
            left: 178.5,
        },
        1: {
            top: 688,
            left: 510.5,
        },
        2: {
            top: 688,
            left: 842.5,
        },
    },
    mobile: {
        0: {
            top: 316,
            left: 116.5,
        },
        1: {
            top: 316,
            left: 316.5,
        },
        2: {
            top: 316,
            left: 516.5,
        },
    },
}

const getPosition = (index) => {
    if (index === 0) {
        return css`
            ${position.mobile[0]}

            ${breakpoints.tablet} {
                ${position.tablet[0]}
            }

            ${breakpoints.desktop} {
                ${position.desktop[0]}
            }
        `
    }
    if (index === 1) {
        return css`
            ${position.mobile[1]}

            ${breakpoints.tablet} {
                ${position.tablet[1]}
            }

            ${breakpoints.desktop} {
                ${position.desktop[1]}
            }
        `
    }
    if (index === 2) {
        return css`
            ${position.mobile[2]}

            ${breakpoints.tablet} {
                ${position.tablet[2]}
            }

            ${breakpoints.desktop} {
                ${position.desktop[2]}
            }
        `
    }
    return ``
}

export const Background = styled.div`
    position: relative;
    display: flex;
    background-image: url(${wood});
    height: 100vh;
    width: 100vw;
    background-size: contain;
    background-color: #fdfddb;
    overflow: hidden;
`

const getSizes = (width, height, top, left) => {
    return css`
        top: calc(${top}px / 2 * 0.32314 + 22px * 0.32314);
        left: calc(${left}px / 2 * 0.3333);
        width: calc(${width}px / 2 * 0.3333);
        height: calc(${height}px / 2 * 0.32314);

        ${breakpoints.tablet} {
            top: calc(${top}px / 2 * 0.7111);
            left: calc(${left}px / 2 * 0.7111 - 384px);
            width: calc(${width}px / 2 * 0.7111);
            height: calc(${height}px / 2 * 0.7111);
        }

        ${breakpoints.desktop} {
            top: calc(${top}px / 2);
            left: calc(${left}px / 2);
            width: calc(${width}px / 2);
            height: calc(${height}px / 2);
        }
    `
}

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
    background-image: url(${levelOneMobile});

    background-position: left top;

    ${breakpoints.tablet} {
        width: 1024px;
        height: 768px;
        background-position: center right;
        background-image: url(${levelOneTablet});
    }

    ${breakpoints.desktop} {
        width: 1920px;
        height: 1080px;
        background-position: unset;
    }

    ${breakpoints.nonRetinaDesktop} {
        background-image: url(${levelOneNonRetina});
    }

    ${breakpoints.retinaDesktop} {
        background-image: url(${levelOne});
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

const highlight = keyframes`
  0% {
    /* opacity: 0; */
    filter: brightness(100%) saturate(100%) sepia(0) drop-shadow(0 0 0 black);
  }
  50% {
     filter: brightness(150%) saturate(150%) sepia(10%) drop-shadow(0px 0px 11px black);
  }
  100%{
    filter: brightness(100%) saturate(100%) sepia(0) drop-shadow(0 0 0 black);
  }
`

const exit = keyframes`
  0% {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  20% {
    transform: scale(1.5);
    animation-timing-function: ease-in;
  }
  100%{
    transform: scale(0.1);
    animation-timing-function: ease-out;
  }
`
const Item = styled.div`
    position: absolute;
    background-size: cover;
    background-position: right bottom;
    visibility: ${(props) => (props.hidden ? `hidden` : `visible`)};
    ${(props) =>
        props.highlight
            ? css`
                  animation-name: ${highlight};
                  animation-duration: 2s;
                  animation-fill-mode: forwards;
                  animation-iteration-count: infinite;
              `
            : ``};

    &.item-exit {
        z-index: 1000;
        animation-name: ${exit};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    &.item-exit-active {
        transition: top 1000ms ease-in, left 1000ms ease-in;
        ${(props) => getPosition(props.index)}
    }

    ${(props) => (props.index === null ? 'pointer-events: none;' : '')}
`

export const Meat = styled(Item)`
    background-image: url(${meat});
    ${getSizes(218, 107, 1750, 2496)}
`

export const Grass = styled(Item)`
    background-image: url(${grass});
    ${getSizes(146, 111, 434, 2004)}
`

export const Ketchup = styled(Item)`
    background-image: url(${ketchup});
    ${getSizes(106, 80, 1685, 1806)}
`

export const Juce = styled(Item)`
    background-image: url(${juce});
    ${getSizes(34, 78, 981, 1971)}
`

export const Sausage = styled(Item)`
    background-image: url(${sausage});
    ${getSizes(112, 76, 1522, 3365)}
`

export const Melon = styled(Item)`
    background-image: url(${melon});
    ${getSizes(298, 247, 1668, 3388)}
`

export const Radish = styled(Item)`
    background-image: url(${radish});
    ${getSizes(141, 86, 1267, 2534)}
`

export const Tomato = styled(Item)`
    background-image: url(${tomato});
    ${getSizes(76, 65, 1299, 2268)}
`
export const Paprika = styled(Item)`
    background-image: url(${paprika});
    ${getSizes(205, 120, 1683, 3056)}
`
export const Сucumber = styled(Item)`
    background-image: url(${cucumber});
    ${getSizes(84, 50, 1013, 2251)}
`
export const Chicken = styled(Item)`
    background-image: url(${chicken});
    ${getSizes(198, 125, 1506, 1911)}
`

export const Watermelon = styled(Item)`
    background-image: url(${watermelon});
    ${getSizes(235, 280, 1611, 2675)}
`
export const Cage = styled(Item)`
    background-image: url(${cage});
    ${getSizes(302, 430, 1400, 2063)}
`
export const Coal = styled(Item)`
    background-image: url(${caol});
    ${getSizes(216, 211, 1489, 2987)}
`

export const Mangal = styled(Item)`
    background-image: url(${mangal});
    ${getSizes(225, 268, 1281, 3224)}
`

export const Cups = styled(Item)`
    background-image: url(${cups});
    ${getSizes(164, 87, 1853, 3352)}
`

export const Shampur = styled(Item)`
    background-image: url(${shampur});
    ${getSizes(35, 297, 765, 2199)}
`

export const Bottle = styled(Item)`
    background-image: url(${bottle});
    ${getSizes(136, 42, 1805, 2302)}
`
export const Bucket = styled(Item)`
    background-image: url(${bucket});
    ${getSizes(372, 445, 1802, 2801)}
`
export const Rake = styled(Item)`
    background-image: url(${rake});
    ${getSizes(163, 180, 474, 2585)}
`
export const Ball = styled(Item)`
    background-image: url(${ball});
    ${getSizes(318, 318, 1472, 2134)}
`

export const WaterPot = styled(Item)`
    background-image: url(${waterPot});
    ${getSizes(171, 132, 1345, 3085)}
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

export const Answers = styled(TransitionGroup)`
    position: absolute;
    z-index: 11;
    display: flex;
    align-items: center;
    bottom: 16px;
    left: 22px;
    gap: 11px;
    pointer-events: none;

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
