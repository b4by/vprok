import styled from 'styled-components'
import bgMobile from 'img/start-bg-mobile.png'
import contentBg from 'img/content-bg.svg'

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
    display: flex;
    justify-content: space-between;
    margin-left: 32px;
`;

export const StoreIcon = styled.div`
    width: 21px;
    height: 21px;
`;

export const StoreIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 21px);  
    grid-column-gap: 3px;
    grid-row-gap: 21px;
    margin-right: 32px;
`;

export const Content = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 318px;
    height: 563px;
    background-image: url(${contentBg});
    margin: auto;
`;
