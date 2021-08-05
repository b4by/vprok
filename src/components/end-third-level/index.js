import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import { Form } from 'components/form/index'
import TagManager from 'react-gtm-module'
import { useLocation } from 'react-router-dom'
import {
    StyledReturnBtn,
    StyledErrorTitle,
    StyledErrorText,
    StyledNextBtn,
    StyledFinalTitle,
    StyledFinalText,
} from './styled'
import ShareScreen from 'components/share-screen/index'
import styled, { keyframes, css } from 'styled-components'
import { useEffect, useState } from 'react'
import { breakpoints } from 'helpers/breakpoints'
import { ReactComponent as VegetablesEnd } from 'img/lvl-3-end-veg.svg'
import ProgressBar from '../progress-bar'

const SuccessForm = () => {
    return (
        <>
            <StyledFinalTitle
                dangerouslySetInnerHTML={{
                    __html: `Суперприз — <span>скидка до 20%</span><br />
                     на заказ в приложении Перекрёсток Впрок.`,
                }}
            />
            <StyledFinalText
                dangerouslySetInnerHTML={{
                    __html: `Промокод уже в почте! Перейдите по ссылке<br />
                         в письме, чтобы получить скидку`,
                }}
            />
        </>
    )
}

const ErrorForm = ({ setIsSubmitted, setError }) => {
    return (
        <>
            <StyledErrorText>
                Ещё не готово <br />
                Мы почему-то не получили вашу почту.
                <br /> Проверьте введённый адрес — там могут быть опечатки.
            </StyledErrorText>
            <StyledReturnBtn
                onClick={() => {
                    setIsSubmitted(false)
                    setError(false)
                }}
            >
                Сейчас проверю
            </StyledReturnBtn>
        </>
    )
}

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
    top: 50%;
    transform: translate(-50%, -49%);
    width: 840px;

    ${breakpoints.tablet} {
        width: 1262.5px;
        left: 52%;
        /* top: 100px; */

        & svg {
            width: 1300px;
        }
    }

    ${breakpoints.desktop} {
        width: 1920px;
        height: 1000px;
        /* top: 100px; */

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
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState(false)
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
    }, [])

    return (
        <EndLevel vegetables={<Vegetables />}>
            <Header>Уровень 3</Header>
            {!isSubmitted && !error && (
                <>
                    <Subtitle>Вы решили все дачные задачи!</Subtitle>
                    <Text
                        dangerouslySetInnerHTML={{
                            __html: `Узнайте свой СУПЕРПРИЗ`,
                        }}
                    />
                    <Form setIsSubmitted={setIsSubmitted} setError={setError} />
                    {/* <ProgressBar /> */}
                </>
            )}
            {isSubmitted && !error && (
                <>
                    <Subtitle>Вы решили все дачные задачи!</Subtitle>
                    <SuccessForm />
                    <StyledNextBtn
                        onClick={() => {
                            const tagManagerArgs = {
                                dataLayer: {
                                    event: 'promo',
                                    eventCategory: 'click',
                                    eventAction: 'share',
                                    eventLabel: location.pathname,
                                },
                            }
                            TagManager.dataLayer(tagManagerArgs)
                            modal.showModal(<ShareScreen />)
                        }}
                    >
                        Поделиться
                    </StyledNextBtn>
                </>
            )}
            {isSubmitted ||
                (!isSubmitted && error && (
                    <>
                        <Subtitle>Ошибка при отправке почты</Subtitle>
                        <ErrorForm
                            setIsSubmitted={setIsSubmitted}
                            setError={setError}
                        />
                    </>
                ))}
        </EndLevel>
    )
})

export default EndThirdLevel
