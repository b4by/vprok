import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import { Form } from 'components/form/index'
import TagManager from 'react-gtm-module'
import { useLocation } from 'react-router-dom'
import { StyledNextBtn } from './styled'
import ShareScreen from 'components/share-screen/index'
import styled, { keyframes, css } from 'styled-components'
import { useEffect, useState } from 'react'
import { breakpoints } from 'helpers/breakpoints'
import { ReactComponent as VegetablesEnd } from 'img/lvl-3-end-veg.svg'

function getRandomInt(max) {
    return Math.random() * max + 2
}

const toLeft = keyframes`
    0% {
        transform: translate(600px, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`

const toBottomLeft = keyframes`
    0% {
        transform: translate(600px, 300px);
    }
    100% {
        transform: translate(0, 0);
    }
`

const toTop = keyframes`
    0% {
        transform: translate(0, 600px);
    }
    100% {
        transform: translate(0, 0);
    }
`

const toBottomRight = keyframes`
    0% {
        transform: translate(100px, -100px);
    }
    100% {
        transform: translate(0, 0);
    }
`

const toRight = keyframes`
    0% {
        transform: translate(-600px, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`

const vibrate = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-8px, 8px);
  }
  40% {
    transform: translate(-8px, -8px);
  }
  60% {
    transform: translate(8px, 8px);
  }
  80% {
    transform: translate(8px, -8px);
  }
  100% {
    transform: translate(0);
  }
`

export const VegetablesEndContainer = styled.div`
    position: absolute;
    left: 54%;
    user-select: none;
    pointer-events: none;
    transform: translateX(-50%);
    width: 840px;
    top: 10px;

    ${breakpoints.tablet} {
        width: 1262.5px;
        left: 52%;
        top: 100px;

        & svg {
            width: 1300px;
        }
    }

    ${breakpoints.desktop} {
        width: 1920px;
        height: 1000px;
        top: 100px;

        & svg {
            width: 2020px;
        }
    }

    & svg > g:nth-child(1) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toLeft} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(2) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toLeft} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(3) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toRight} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(4) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toRight} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(5) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toRight} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(6) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toLeft} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(7) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toLeft} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(8) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toLeft} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(9) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toLeft} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(10) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toRight} 1s ease alternate;
                  `}
    }
    & svg > g:nth-child(11) {
        ${({ isAnimated }) =>
            isAnimated
                ? css`
                      animation: ${vibrate} ease-in-out ${getRandomInt(2)}s
                          infinite;
                  `
                : css`
                      animation: ${toRight} 1s ease alternate;
                  `}
    }
`

const Vegetables = () => {
    const [isAnimated, setAnimation] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimation(true)
        }, 1500)

        return timer
    }, [isAnimated])

    return (
        <VegetablesEndContainer isAnimated={isAnimated}>
            <VegetablesEnd />
        </VegetablesEndContainer>
    )
}

const EndThirdLevel = observer(() => {
    const { game, modal } = useStore()

    const location = useLocation()

    useEffect(() => {
        const tagManagerArgs = {
            dataLayer: {
                event: 'promo',
                eventCategory: 'click',
                eventAction: 'level_3_done',
                eventLabel: location.pathname,
            },
        }
        TagManager.dataLayer(tagManagerArgs)
    }, [location.pathname])

    return (
        <EndLevel vegetables={<Vegetables />}>
            <Header>Уровень 3</Header>
            <Subtitle>Вы решили все дачные задачи!</Subtitle>
            <Text
                dangerouslySetInnerHTML={{
                    __html: `Узнайте свой СУПЕРПРИЗ`,
                }}
            />
            <Form />
            <StyledNextBtn
                onClick={() => {
                    modal.showModal(<ShareScreen />)
                }}
            >
                Поделиться
            </StyledNextBtn>
        </EndLevel>
    )
})

export default EndThirdLevel
