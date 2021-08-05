import styled from 'styled-components'
import NextBtn from 'components/next-btn/index'
import { breakpoints } from 'helpers/breakpoints'
import ReturnBtn from 'components/return-btn/index'

export const StyledNextBtn = styled(NextBtn)``

export const StyledReturnBtn = styled(ReturnBtn)``

export const StyledErrorTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
    line-height: 112.13%;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
    ${breakpoints.tablet} {
        font-size: 24px;
        line-height: 112.13%;
        margin-bottom: 35px;
    }

    ${breakpoints.desktop} {
        font-size: 34px;
        line-height: 133.13%;
        margin-bottom: 48px;
    }
`

export const StyledErrorText = styled.div`
    font-weight: 600;
    font-size: 15px;
    line-height: 112.13%;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;

    ${breakpoints.tablet} {
        font-size: 24px;
        line-height: 112.13%;
    }

    ${breakpoints.desktop} {
        font-size: 34px;
        line-height: 133.13%;
    }
`

export const StyledFinalTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
    line-height: 112.13%;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
    span {
        color: #fd2a53;
    }

    ${breakpoints.tablet} {
        font-size: 24px;
        line-height: 112.13%;
        margin-bottom: 35px;
    }

    ${breakpoints.desktop} {
        font-size: 34px;
        line-height: 133.13%;
        margin-bottom: 48px;
    }
`

export const StyledFinalText = styled.div`
    font-weight: 600;
    font-size: 15px;
    line-height: 112.13%;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;

    ${breakpoints.tablet} {
        font-size: 24px;
        line-height: 112.13%;
    }

    ${breakpoints.desktop} {
        font-size: 34px;
        line-height: 133.13%;
    }
`
