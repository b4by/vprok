import styled, { keyframes } from 'styled-components'
import useRatio from 'hooks/useRatio'
import { breakpoints } from 'helpers/breakpoints'
import card from 'img/card.svg'

const rotate = keyframes`
   0% {
    transform: translate(0, -100%) rotate(-45deg);
    transform-origin: center left;
    opacity: 0;
  }
  40% {    
    transform: translate(0, 0) rotate(0) ;
    opacity: 1;
    transform-origin: top left;
  }
  /* 80% {    
    transform: translate(0, 0) rotate(15deg);
    opacity: 1;
    transform-origin: top left;
  } */
  100% {
    transform: translate(0, 0) rotate(0);
    transform-origin: top left;
    opacity: 1;
  }
`

const blur = keyframes`
    0% {
        backdrop-filter: blur(0);
    }
    100% {
        backdrop-filter: blur(10px);
    }
`

export const Wrapper = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    width: 100%;

    animation: ${blur} 0.5s ease-in-out both;
`

export const Card = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 17px;
    display: flex;
    flex-direction: column;
    background-image: url(${card});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 361px;
    height: 262px;
    left: 50%;
    /* margin-top: 17px; */
    animation: ${rotate} 0.8s ease both;

    ${breakpoints.tablet} {
        width: 575.8px;
        height: 417.9px;
        /* margin-top: 170px; */
        padding: 28px 25px;
    }

    ${breakpoints.desktop} {
        width: 890.47px;
        height: 646.27px;
        /* margin-top: 171.2px; */
        padding: 52px 70px;
    }
`

export const Header = styled.div`
    margin-bottom: 9px;
    font-family: 'Roboto';
    text-align: center;
    line-height: 112.63%;
    font-size: 18px;

    ${breakpoints.tablet} {
        font-size: 20px;
        margin-bottom: 20px;
    }

    ${breakpoints.desktop} {
        font-size: 30px;
        margin-bottom: 31px;
    }
`

export const Subtitle = styled.div`
    margin-bottom: 16px;
    font-family: 'Marck Script', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 112.63%;
    text-align: center;
    color: #010400;

    ${breakpoints.tablet} {
        font-size: 40px;
        margin-bottom: 39px;
    }

    ${breakpoints.desktop} {
        font-size: 65px;
        margin-bottom: 30px;
    }
`

export const Text = styled.div`
    margin-bottom: 39px;
    font-weight: 600;
    font-size: 18px;
    line-height: 112.63%;
    white-space: pre-line;
    user-select: none;
    text-align: center;
    color: #000000;

    ${breakpoints.tablet} {
        font-size: 30px;
        margin-bottom: 52px;
    }

    ${breakpoints.desktop} {
        font-size: 48px;
        margin-bottom: 15px;
    }
`

export const TextLevel1 = styled.div`
    text-align: center;
    color: #000000;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 18px;
    line-height: 112.63%;
    ${breakpoints.tablet} {
        font-size: 30px;
        margin-bottom: 15px;
        line-height: 1;
    }

    ${breakpoints.desktop} {
        font-size: 48px;
        margin-bottom: 15px;
    }
`

export const TextPromoCode = styled.span`
    font-family: Marck Script, cursive;
    font-size: 48px;
    line-height: 100.63%;
    margin-bottom: 12px;
    text-align: center;
    color: #000000;

    ${breakpoints.tablet} {
        font-size: 80px;
        margin-bottom: 15px;
        line-height: 1;
    }

    ${breakpoints.desktop} {
        font-size: 90px;
        margin-bottom: 15px;
    }
`

export const EndLevelFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
        ${breakpoints.tablet} {
            width: 44px;
            height: 56px;
        }
        ${breakpoints.desktop} {
            width: 76px;
            height: 101px;
        }
    }
`

export const StyledLink = styled.a`
    text-decoration: none;
`

export default function EndLevel({ children, buttons, vegetables }) {
    const ratio = useRatio()
    
    return (
        <Wrapper>
            <Card ratio={ratio}>{children}</Card>
            {vegetables}
            {buttons}
        </Wrapper>
    )
}
