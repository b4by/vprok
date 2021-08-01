import styled from 'styled-components'
import NextBtn from 'components/next-btn/index'
import { breakpoints } from 'helpers/breakpoints'

export const StyledNextBtn = styled(NextBtn)``

export const StyledFinalTitle = styled.p`
    margin: 0;
    padding: 0;
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
        font-size: 36px;
        line-height: 133.13%;
        margin-bottom: 48px;
    }
`

export const StyledFinalText = styled.p`
    font-weight: 600;
    font-size: 15px;
    line-height: 112.13%;
    text-align: center;
    color: #000000;

    ${breakpoints.tablet} {
        font-size: 24px;
        line-height: 112.13%;
    }

    ${breakpoints.desktop} {
        font-size: 36px;
        line-height: 133.13%;
    }
`
