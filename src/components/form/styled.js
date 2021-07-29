import styled from 'styled-components'
import btn from 'img/prev-btn.svg'
import btnHover from 'img/prev-btn-hover.svg'
import { breakpoints } from 'helpers/breakpoints'

export const StyledForm = styled.form`
    margin-bottom: 20px;

    ${breakpoints.desktop} {
        margin-bottom: 110px;
    }
`

export const StyledFormGroup = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 15px;
    height: 33px;
    ${breakpoints.tablet} {
        height: 54px;
        margin-bottom: 20px;
    }
    ${breakpoints.desktop} {
        height: 85px;
        margin-bottom: 35px;
    }
`

export const StyledEmailInput = styled.input.attrs({
    type: 'email',
})`
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 5px;
    font-family: Gilroy;
    outline: none;
    border: none;
    padding: 8px 0 6px 12px;
    flex: 1;
    &:focus {
    }
    &::placeholder {
        font-weight: 600;
        font-size: 14px;
        line-height: 112.63%;
        color: #999999;
        ${breakpoints.desktop} {
            font-size: 30px;
        }
    }

    ${breakpoints.tablet} {
        padding: 16px 0 16px 24px;
        font-size: 15px;
    }

    ${breakpoints.desktop} {
        padding: 16px 0 16px 24px;
        font-size: 30px;
    }
`

export const StyledSubmitInput = styled.input.attrs({
    type: 'submit',
})`
    box-sizing: border-box;
    flex: 1;
    position: absolute;
    top: 0;
    right: 0;
    width: 107px;
    height: 100%;
    background: none;
    background-image: url(${btn});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    color: white;
    border: none;
    font-family: 'Marck Script', cursive;
    font-size: 15px;
    line-height: 112.63%;

    ${breakpoints.tablet} {
        width: 177px;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        width: 278px;
        font-size: 38px;
    }

    &:hover {
        background-image: url(${btnHover});
    }
`

export const StyledFormError = styled.p`
    position: absolute;
    top: 35px;
    left: 0;
    color: #f44336;
    margin: 0;
    font-size: 10px;
    ${breakpoints.tablet} {
        top: 55px;
        font-size: 11px;
    }

    ${breakpoints.desktop} {
        top: 87px;
        font-size: 20px;
    }
`

export const StyledCheckboxContainer = styled.div``

export const StyledCheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export const StyledCheckboxText = styled.span`
    font-family: 'HelveticaNeueCyr';
    font-style: normal;
    font-weight: 300;
    font-size: 8px;
    line-height: 136.8%;
    color: #7b735d;
    opacity: 0.5;
    margin-left: 5px;
    ${breakpoints.tablet} {
        font-size: 11px;
    }

    ${breakpoints.desktop} {
    }
`

export const StyledFormLink = styled.a`
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 3px;
`

export const StyledCheckboxInput = styled.input.attrs({
    type: 'checkbox',
})`
    position: absolute;
    appearance: none;
    &:not(:checked) + ${StyledCheckboxLabel} svg path:first-child {
        display: none;
    }
`

export const StyledFooterText = styled.p`
    font-family: 'HelveticaNeueCyr';
    font-style: normal;
    font-weight: 300;
    font-size: 6px;
    line-height: 136.8%;
    color: #7b735d;
    opacity: 0.5;
    ${breakpoints.tablet} {
        font-size: 11px;
    }

    ${breakpoints.desktop} {
    }
`
