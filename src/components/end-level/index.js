import styled from 'styled-components'
import useRatio from 'hooks/useRatio'
import { breakpoints } from 'helpers/breakpoints'
import card from 'img/card.svg'

export const Wrapper = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;
`

export const Card = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 16px 14px;
    display: flex;
    flex-direction: column;
    background-image: url(${card});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 361px;
    height: 262px;
    left: 50%;
    margin-top: 17px;

    ${breakpoints.tablet} {
        width: 575.8px;
        height: 417.9px;
        margin-top: 170px;
        padding: 28px 25px;
    }

    ${breakpoints.desktop} {
        width: 890.47px;
        height: 646.27px;
        margin-top: 171.2px;
    }
`

export const Header = styled.div`
    margin-bottom: 12px;
    font-family: Roboto;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    line-height: 112.63%;
    font-size: 18px;

    ${breakpoints.tablet} {
        font-size: 20px;
        margin-bottom: 14px;
    }

    ${breakpoints.desktop} {
        font-size: 30px;
        margin-bottom: 24px;
    }
`

export const Subtitle = styled.div`
    margin-bottom: 6px;
    font-family: Marck Script;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 112.63%;
    /* or 28px */

    text-align: center;

    color: #010400;

    ${breakpoints.tablet} {
        font-size: 40px;
        margin-bottom: 14px;
    }

    ${breakpoints.desktop} {
        font-size: 65px;
        margin-bottom: 30px;
    }
`

export const Text = styled.div`
    margin-bottom: 16px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 112.63%;
    /* or 20px */
    white-space: pre-line;

    text-align: center;

    color: #000000;

    ${breakpoints.tablet} {
        font-size: 30px;
        margin-bottom: 14px;
    }

    ${breakpoints.desktop} {
        font-size: 48px;
        margin-bottom: 24px;
    }
`

export default function EndLevel({ children, buttons }) {
    const ratio = useRatio()

    return (
        <Wrapper>
            <Card ratio={ratio}>{children}</Card>
            {buttons}
        </Wrapper>
    )
}
