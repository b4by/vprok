import EndLevel, {
    Header,
    Subtitle,
    TextLevel1,
    TextPromoCode,
    EndLevelFooter,
    StyledLink,
} from 'components/end-level'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import Buttons from 'components/buttons'
import { ReactComponent as PaperIconSvg } from 'assets/svg/papers.svg'
import TagManager from 'react-gtm-module'
import { useLocation } from 'react-router-dom'
import styled, { keyframes, css } from 'styled-components'
import { useEffect, useState } from 'react'
import { breakpoints } from 'helpers/breakpoints'
import { ReactComponent as VegetablesEnd } from 'img/lvl-1-end-veg.svg'

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
    bottom: 0;
    left: 50%;
    user-select: none;
    pointer-events: none;
    transform: translateX(-50%);
    width: 720px;

    ${breakpoints.tablet} {
        width: 1032.5px;
        bottom: 60px;
    }

    ${breakpoints.desktop} {
        width: 1920px;
        height: 1000px;
        top: 210px;

        & svg {
            width: 2100px;
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
                      animation: ${toBottomLeft} 1s ease alternate;
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
                      animation: ${toTop} 1s ease alternate;
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
                      animation: ${toRight} 1s ease alternate;
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

const EndFirstLevel = observer(() => {
    const { game } = useStore()
    const location = useLocation()

    const buttons = (
        <Buttons>
            <StyledLink
                href="https://www.vprok.ru/?utm_source=qm&utm_medium=zadachaonline&utm_campaign=button_buy"
                target="_blank"
                rel="noreferrer"
            >
                <PrevBtn
                    onClick={() => {
                        const tagManagerArgs = {
                            dataLayer: {
                                event: 'promo',
                                eventCategory: 'click',
                                eventAction: 'order',
                                eventLabel: location.pathname,
                            },
                        }
                        TagManager.dataLayer(tagManagerArgs)
                    }}
                >
                    Заказать
                </PrevBtn>
            </StyledLink>
            <NextBtn
                onClick={() => {
                    setTimeout(() => {
                        game.levelPassed()
                    }, 500)
                }}
            >
                Уровень 2
            </NextBtn>
        </Buttons>
    )

    return (
        <EndLevel buttons={buttons} vegetables={<Vegetables />}>
            <Header>Уровень 1</Header>
            <Subtitle>Сочный шашлык почти готов!</Subtitle>
            <TextLevel1>
                Скидка — 5%
                <br /> на заказ в Перекрёсток Впрок
            </TextLevel1>
            <TextPromoCode>dacha5</TextPromoCode>
            <EndLevelFooter>
                <PaperIconSvg />
            </EndLevelFooter>
        </EndLevel>
    )
})

export default EndFirstLevel
