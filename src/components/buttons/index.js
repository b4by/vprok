import styled from 'styled-components'
import { breakpoints } from 'helpers/breakpoints'

const Buttons = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 494px;
    flex-shrink: 1;
    padding-top: 14px;
    width: 100%;

    ${breakpoints.tablet} {
        max-width: 823.34px;
        padding-top: 49px;
    }

    ${breakpoints.desktop} {
        max-width: 1412px;
        padding-top: 35px;
    }
`

export default Buttons
