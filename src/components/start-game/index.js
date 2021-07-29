import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import { breakpoints } from 'helpers/breakpoints'
import play from 'img/play.svg'
import playActive from 'img/play-active.svg'
import SoundClick from 'components/sound-click'

export const Wrapper = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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

export const PlayContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const PlayButon = styled.div`
    user-select: none;
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

export const Text = styled.div`
    display: flex;
    justify-content: center;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    line-height: 112.63%;
    text-align: center;
    color: #ffffff;
    max-width: 519px;
    font-size: 15px;
    margin-bottom: 24px;
    white-space: pre-line;

    ${breakpoints.tablet} {
        margin-bottom: 82px;
        max-width: 917px;
        font-size: 25px;
    }

    ${breakpoints.desktop} {
        margin-bottom: 52px;
        font-size: 40px;
        max-width: 1497px;
    }
`

const StartGame = observer(() => {
    const { game } = useStore()
    const [pushed, setPushed] = useState(false)

    return (
        <Wrapper>
            {game.level === 2 && (
                <Text
                    dangerouslySetInnerHTML={{
                        __html: `
                Уровень 2

                Продукты нашли! А шампуры? 
                Найдите предметы, которые помогут приготовить шашлыки. 
                Кстати, любые из них можно заказать в Перекрёстке Впрок с доставкой.
            `,
                    }}
                />
            )}
            {game.level === 3 && (
                <Text
                    dangerouslySetInnerHTML={{
                        __html: `
                Уровень 3

                А что ещё доставляет Перекрёсток Впрок? 
                Найдите все предметы и получите суперприз!
            `,
                    }}
                />
            )}

            <PlayContainer>
                <SoundClick type="click">
                    <PlayButon
                        onClick={() => {
                            setTimeout(() => {
                                game.start()
                            }, 500)
                            setPushed(true)
                        }}
                        className={pushed ? `push` : null}
                    />
                </SoundClick>
            </PlayContainer>
        </Wrapper>
    )
})

export default StartGame
