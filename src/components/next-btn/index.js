import styled from 'styled-components'
import btn from 'img/next-btn.svg'
import btnHover from 'img/next-btn-hover.svg'
import { breakpoints } from 'helpers/breakpoints'
import SoundClick from 'components/sound-click'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 131px;
    min-height: 40px;
    background-image: url(${btn});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    color: white;

    font-family: Marck Script;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 112.63%;

    ${breakpoints.tablet} {
        min-width: 188.35px;
        min-height: 57.51px;
        font-size: 30px;
    }

    ${breakpoints.desktop} {
        min-width: 323.13px;
        min-height: 98.67px;
        font-size: 46px;
    }

    &:hover {
        background-image: url(${btnHover});
    }
`

export default function NextBtn({ children, onClick }) {
    return (
        <SoundClick type="click">
            <Wrapper onClick={onClick}>{children}</Wrapper>
        </SoundClick>
    )
}
