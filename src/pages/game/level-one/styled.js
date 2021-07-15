import styled from 'styled-components'
import levelOne from 'img/lvl-1/bg.jpg'
import upperLayer from 'img/lvl-1/upper-layer.png'
import tomato from 'img/lvl-1/objects-tomato.png'
import radish from 'img/lvl-1/objects-radish.png'
import meat from 'img/lvl-1/objects-meat.png'
import wood from 'img/wood.jpg'
import { breakpoints } from 'helpers/breakpoints'
import timer from 'img/timer.png';

export const Background = styled.div`
    position: relative;
    display: flex;
    background-image: url(${wood});
    height: 100vh;
    width: 100vw;
    background-size: contain;
    background-color: #FDFDDB;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: ${(props) => props.ratio ? `translate(-50%, -50%) scale(${props.ratio})` : 'none'};
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    border-radius: 24px;

    background-size: cover;
    background-image: url(${levelOne});

    &:after {
        content: '';
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(${upperLayer});
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export const Scene = styled.div``;

const Item = styled.div`
    position: absolute;
`;

export const Item1 = styled(Item)`
    top: 864px;
    left: 1248px;
    width: 132px;
    height: 65px;
    background: url(${meat});
    background-size: cover;
`;

export const Item2 = styled(Item)`
    top: 626px;
    left: 1267px;
    width: 85.5px;
    height: 52px;
    background: url(${radish});
    background-size: cover;
`;

export const Item3 = styled(Item)`
    top: 638px;
    left: 1134px;
    width: 46px;
    height: 39.5px;
    background: url(${tomato});
    background-size: cover;
`;

export const Timer = styled.div`
    position: absolute;
    right: 116px;
    top: 92px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #AAE600;
    box-sizing: border-box;
    border-radius: 100px;

    font-style: normal;
    font-weight: 550;
    text-align: center;
    color: #C5FF76;

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
        right: 247px;
        bottom: -75px;
        width: 236px;
        height: 237px;
        background: url(${timer});
        background-size: cover;
    }
`;
