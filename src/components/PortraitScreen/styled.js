import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
     transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Content = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const IconsPhone = styled.div`
    display: flex;
    justify-content: center;
    
    & svg {
        animation-name: ${fadeIn};
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }
`;

export const Text = styled.div`
    position: relative;
    text-align: center;
    margin-top: 187px;
    z-index: 2;
    white-space: pre-line;
    margin-bottom: 31px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 112.63%;
`;
