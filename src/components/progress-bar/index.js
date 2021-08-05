import styled, { keyframes } from 'styled-components'
import BarSvg from 'assets/svg/loader.svg'
import { breakpoints } from 'helpers/breakpoints'

const StyledBar = styled.div`
    background: #ebb64e;
    border-radius: 4px;
    height: 43px;

    ${breakpoints.tablet} {
    }

    ${breakpoints.desktop} {
        height: 92px;
    }
`

const StyledBarContainer = styled.div`
    overflow: hidden;
`

const StyledBarBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BarSvg});
    background-repeat: no-repeat;
    background-size: cover;
`

const move = keyframes`
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  `

const ProgressBar = () => {
    return (
        <StyledBar>
            <StyledBarContainer>
                <StyledBarBackground />
            </StyledBarContainer>
        </StyledBar>
    )
}

export default ProgressBar
