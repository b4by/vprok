import EndLevel, {
    Header,
    Subtitle,
    Text,
    StyledLink,
} from 'components/end-level'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import Buttons from 'components/buttons'
import { useLocation } from 'react-router-dom'
import TagManager from 'react-gtm-module'

const GameOver = observer(() => {
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
                        window.ttq.track('Purchase')
                        TagManager.dataLayer(tagManagerArgs)
                    }}
                >
                    Заказать
                </PrevBtn>
            </StyledLink>
            <NextBtn
                onClick={() => {
                    game.levelRestart()
                }}
            >
                Да
            </NextBtn>
        </Buttons>
    )

    return (
        <EndLevel buttons={buttons}>
            <Header>Уровень {game.level}</Header>
            <Subtitle>Кажется, недожарили...</Subtitle>
            <Text>
                Время вышло!
                <br /> Попробуем еще раз?
            </Text>
        </EndLevel>
    )
})

export default GameOver
