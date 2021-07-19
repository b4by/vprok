import styled from 'styled-components'
import { breakpoints } from 'helpers/breakpoints'

export const Wrapper = styled.div`
    position: absolute;
    top: 215px;
    left: 128px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 481px;
    min-height: 78px;
    padding: 7px 20px 0;

    z-index: 11;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #AAE600;
    box-sizing: border-box;
    border-radius: 117px;

    /* font-family: Gilroy; */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 112.63%;
    /* or 16px */

    text-align: center;

    color: #FFFFFF;

    ${breakpoints.tablet} {
        width: 765px;
        min-height: 124px;
        top: 513px;
        left: 224px;    
        padding: 7px 26px 0;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        top: 639px;
        left: 367px;
        width: 1436px;
        min-height: 234px;
        font-size: 40px;
        padding: 7px 90px 0;
    }
`;

export const Text = styled.div`
    margin: auto;
    white-space: pre-line;

    & span {
        font-weight: 400;
        color: #C5FF76;
        font-style: italic;
    }
`;

export const Next = styled.div`
    cursor: pointer;
    padding: 2px;
    width: 12px;
    height: 12px;
    margin: 5px auto 10px;

    & svg {
        width: 12px;
        height: 12px;

        ${breakpoints.tablet} {
            width: 25.12px;
            height: 23.57px;
        }

        ${breakpoints.desktop} {
            width: 44px;
            height: 44px;
        }
    }

    ${breakpoints.tablet} {
        width: 25.12px;
        height: 23.57px;
        margin-bottom: 16px;
    }

    ${breakpoints.desktop} {
        width: 44px;
        height: 44px;
        margin-bottom: 32px;
    }
`;
