import styled from 'styled-components'
import perek from 'img/hints/perek.png'
import perekActive from 'img/hints/perek-active.png'
import perekDisabled from 'img/hints/perek-disabled.png'
import dad from 'img/hints/dad.png'
import dadActive from 'img/hints/dad-active.png'
import mom from 'img/hints/mom.png'
import momActive from 'img/hints/mom-active.png'

import { breakpoints } from 'helpers/breakpoints'

export const Wrapper = styled.div`
`;

const Hint = styled.div`
    width: 105px;
    height: 105px;
    background-size: contain;
    background-repeat: no-repeat;
    backdrop-filter: drop-shadow(4px 4px 10px blue); 

    ${breakpoints.tablet} {
        width: 165px;
        height: 165px;
    }

    ${breakpoints.desktop} {
        margin-bottom: 0;
    }
`;

export const HintPerek = styled(Hint)`
    background-image: ${(props) => props.active ? `url(${perekActive})` : `url(${perek})`};
    ${(props) => props.disabled ? `background-image: url(${perekDisabled})` : ``};
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
`;

export const HintFather = styled(Hint)`
    background-image: ${(props) => props.active ? `url(${dadActive})` : `url(${dad})`};
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
`;

export const HintMom = styled(Hint)`
    background-image: ${(props) => props.active ? `url(${momActive})` : `url(${mom})`};
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
`;
