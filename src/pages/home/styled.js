import styled from 'styled-components'
import play from 'img/play.svg';
import playActive from 'img/play-active.svg';
import { breakpoints } from 'helpers/breakpoints';

export const TextMobile = styled.div`
    box-sizing: border-box;
    display: none;
    position: relative;
    width: 295px;
    margin: 0 auto;
    z-index: 2;
    white-space: pre-line;
    margin-bottom: 17px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 112.63%;
    /* or 17px */

    text-align: center;

    color: #000000;

    ${breakpoints.onlyMobile} {
        display: block;
    }
`;

export const TextTablet = styled(TextMobile)`
    width: 100%;
    max-width: 743px;
    padding: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 112.63%;

    ${breakpoints.onlyMobile} {
        display: none;
    }

    ${breakpoints.onlyTablet} {
        display: block;
        margin-bottom: 38px;
    }

    ${breakpoints.onlyDesktop} {
        display: none;
    }
`;

export const TextDesktop = styled(TextMobile)`
    width: 100%;
    font-size: 38px;
    line-height: 112.63%;
    max-width: 1419px;
    margin-bottom: 50px;

    ${breakpoints.onlyMobile} {
        display: none;
    }

    ${breakpoints.onlyTablet} {
        display: none;
    }

    ${breakpoints.onlyDesktop} {
        display: block;
    }
`;



export const PlayButon = styled.div`
    margin: 0 auto;
    width: 138px;
    height: 140px;
    background-image: url(${play});
    background-size: cover;

    &:active, &:hover {
        background-image: url(${playActive});
    }

    ${breakpoints.desktop} {
        width: 240px;
        height: 244px;
    }
`;

export const DachaText = styled.div`
    display: none;
    justify-content: center;
    margin-bottom: 24px;
    margin-top: 51px;

    ${breakpoints.onlyMobile} {
        display: flex;
    }
`;

export const DachaTextTablet = styled.div`
    display: none;
    margin-bottom: 16px;
    margin-top: 112px;
    
    ${breakpoints.onlyTablet} {
        display: flex;
        justify-content: center;
    }
`;

export const DachaTextDesk = styled.div`
    display: none;
    margin-bottom: 4px;
    margin-top: 112px;

    ${breakpoints.onlyDesktop} {
        display: flex;
        justify-content: center;
    }
`;
