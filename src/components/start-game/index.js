import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { useStore } from 'store'
import { observer } from 'mobx-react'
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

const heartbeat = keyframes`
  0% {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  20% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  34% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  66% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`
const push = keyframes`
  0% {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
    filter: brightness(1);
  }
  50% {
    transform: scale(0.5);
    animation-timing-function: ease-in;
    filter: brightness(1);
  }
  100%{
    transform: scale(1);
    animation-timing-function: ease-out;
    filter: brightness(0.5);
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
    animation: ${heartbeat} 4s ease-in-out infinite both;

    &.push {
        animation: ${push} 0.4s forwards;
    }

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

const StartGame = observer(() => {
    const { game } = useStore()
    const [pushed, setPushed] = useState(false)

    return (
        <Wrapper>
            <PlayButon
                onClick={() => {
                    setTimeout(() => {
                        game.start()
                    }, 1000)
                    setPushed(true)
                }}
                className={pushed ? `push` : null}
            />
        </Wrapper>
    )
})

export default StartGame
