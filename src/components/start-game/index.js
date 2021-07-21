import styled from 'styled-components'
import { useStore } from 'store'
import { breakpoints } from 'helpers/breakpoints'
import play from 'img/play.svg'
import playActive from 'img/play-active.svg'

export const Wrapper = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background: rgba(0, 0, 0, 0.7);

    ${breakpoints.tablet} {
    }

    ${breakpoints.desktop} {
    }
`

export const PlayButon = styled.div`
    margin: auto;
    width: 96px;
    height: 98px;
    background-image: url(${play});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    background-position: center;

    &:active,
    &:hover {
        background-image: url(${playActive});
    }

    ${breakpoints.tablet} {
        width: 164px;
        height: 167px;
    }

    ${breakpoints.desktop} {
        width: 361px;
        height: 367px;
    }
`

export default function StartGame() {
    const { game } = useStore()

    return (
        <Wrapper>
            <PlayButon
                onClick={() => {
                    game.start()
                }}
            />
        </Wrapper>
    )
}
