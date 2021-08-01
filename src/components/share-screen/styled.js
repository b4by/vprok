import { breakpoints } from 'helpers/breakpoints'
import styled from 'styled-components'
import btn from 'assets/svg/copy-btn.svg'
import EndLevel from 'components/end-level/index'
import { ReactComponent as CloseIconSvg } from 'assets/svg/close-icon.svg'

export const ShareScreenEndLevel = styled(EndLevel)`
    background: rgba(0, 0, 0, 0.5);
`

export const StyledCloseIconSvg = styled(CloseIconSvg)`
    position: absolute;
    top: 0;
    right: 0;
    width: 17px;
    height: 17px;
    cursor: pointer;

    ${breakpoints.tablet} {
        width: 26px;
        height: 26px;
    }

    ${breakpoints.desktop} {
        width: 59px;
        height: 59px;
    }
`

export const ShareScreenContainer = styled.div`
    box-sizing: border-box;
    padding: 32px 31px 0 31px;
    position: relative;

    ${breakpoints.tablet} {
    }

    ${breakpoints.desktop} {
    }
`

export const ShareScreenTitle = styled.h2`
    font-family: Marck Script;
    font-size: 25px;
    line-height: 1;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    color: #010400;
    margin: 0 auto;
    margin-bottom: 35px;

    ${breakpoints.tablet} {
        font-size: 40px;
        line-height: 112.63%;
        margin-bottom: 60px;
    }

    ${breakpoints.desktop} {
        font-size: 70px;
        line-height: 112.63%;
    }
`

export const ShareScreenGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 34px);
    gap: 13px;
    margin-bottom: 24px;

    ${breakpoints.tablet} {
        grid-template-columns: repeat(6, 57px);
        gap: 21px;
        margin-bottom: 41px;
    }

    ${breakpoints.desktop} {
        grid-template-columns: repeat(6, 90px);
        gap: 34px;
        margin-bottom: 63px;
    }

    img {
        width: 34px;
        height: 34px;
        ${breakpoints.tablet} {
            width: 57px;
            height: 57px;
        }

        ${breakpoints.desktop} {
            width: 90px;
            height: 90px;
        }
    }

    svg {
        width: 34px;
        height: 34px;

        ${breakpoints.tablet} {
            width: 57px;
            height: 57px;
        }

        ${breakpoints.desktop} {
            width: 90px;
            height: 90px;
        }
    }
`

export const ShareScreenFlexContainer = styled.div`
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

export const ShareScreenInput = styled.input.attrs({
    type: 'text',
})`
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 5px;
    font-family: Gilroy;
    outline: none;
    border: none;
    padding: 8px 0 6px 12px;
    flex: 1;
    font-size: 10px;
    line-height: 112.63%;
    color: #999999;
    user-select: none;

    ${breakpoints.tablet} {
        padding: 16px 0 16px 24px;
        font-size: 15px;
    }

    ${breakpoints.desktop} {
        padding: 16px 0 16px 24px;
        font-size: 25px;
    }
`
export const ShareScreenBtn = styled.button.attrs({
    type: 'button',
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
        width: 175px;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        width: 273px;
        font-size: 38px;
    }
`
