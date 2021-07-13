import styled from 'styled-components'
import play from 'img/play.svg';
import playActive from 'img/play-active.svg';

export const Text = styled.div`
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
`;

export const PlayButon = styled.div`
    margin: 0 auto;
    width: 138px;
    height: 140px;
    background-image: url(${play});

    &:active, &:hover {
        background-image: url(${playActive});
    }
`;

export const DachaText = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    margin-top: 51px;
`;