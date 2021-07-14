import styled from 'styled-components'
import bgMobile from 'img/bg-mobile.jpeg'
import bgDesktop from 'img/bg-desk.jpeg'
import { breakpoints } from 'helpers/breakpoints';

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
    overflow: hidden;

    ${breakpoints.tablet} {
        min-height: 768px;
        padding: 61px 0;
    }

    ${breakpoints.desktop} {
        padding: 68px 0;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;  
        opacity: .4; 
        z-index: -1;
        background-image: url(${bgMobile});
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #FDFDDB;
        background-position: -435px 0;

        ${breakpoints.tablet} {
             background-image: url(${bgDesktop});
             background-position: center center;
        }
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 32px;

    ${breakpoints.tablet} {
        position: absolute;
        z-index: 10;
        top: 42px;
        right: 70px;
        left: 70px;
        margin-left: 0;
    }

    ${breakpoints.desktop} {
        top: 92px;
        right: 163px;
        left: 163px;
    }
`;

export const LogoImg = styled.div`
    width: 82px;
    height: 23px;

    ${breakpoints.tablet} {
        width: 137px;
        height: 39px;
    }

    ${breakpoints.desktop} {
        width: 262px;
        height: 73px;
    }
`;


export const StoreIcon = styled.div`
    width: 21px;
    height: 21px;

    ${breakpoints.tablet} {
        width: 36px;
        height: 36px;
    }

    ${breakpoints.desktop} {
        width: 68px;
        height: 68px;
    }
`;

export const StoreIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 21px);  
    grid-column-gap: 3px;
    margin-right: 32px;

    ${breakpoints.tablet} {
        grid-template-columns: repeat(3, 36px); 
        grid-column-gap: 4px;
        margin: 0;
    }

    ${breakpoints.desktop} {
        grid-template-columns: repeat(3, 68px); 
        grid-column-gap: 9px;
    }
`;

export const Content = styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 318px;
    height: 563px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 166.5px;
    margin: auto;
    width: 100%;
    
    ${breakpoints.tablet} {
        max-width: 920px;
        height: 647px;
        border-radius: 323.5px;
    }

    ${breakpoints.desktop} {
        max-width: 1759px;
        height: 944px;
        border-radius: 472px;
        margin: 0 auto;
    }
`;
