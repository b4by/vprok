import styled from 'styled-components'
import bgMobile from 'img/start-bg-mobile.png'
import contentBg from 'img/content-bg.svg'
import play from 'img/play.svg';
import playActive from 'img/play-active.svg';


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 659px;
    align-self: stretch;
    padding: 28px 0;
    background-image: url(${bgMobile});
    background-color: #FDFDDB;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`;

export const LogoContainer = styled.div`
    margin-left: 32px;
`;

export const Content = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 318px;
    height: 563px;
    background-image: url(${contentBg});
    margin: auto;
    padding-top: 202px;
`;

export const Text = styled.div`
    position: relative;
    width: 295px;
    margin: 0 auto;
    z-index: 2;
    white-space: pre-line;
    
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
    
`;
