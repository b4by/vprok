import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import Buttons from 'components/buttons'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { useLocation } from 'react-router-dom'

const EndSecondLevel = observer(() => {
    const { game } = useStore()

    const location = useLocation()

    useEffect(() => {
        const tagManagerArgs = {
            dataLayer: {
                event: 'promo',
                eventCategory: 'click',
                eventAction: 'level_2_done',
                eventLabel: location.pathname,
            },
        }
        TagManager.dataLayer(tagManagerArgs)
    }, [])

    const buttons = (
        <Buttons>
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
            <NextBtn
                onClick={() => {
                    game.levelPassed()
                }}
            >
                Уровень 3
            </NextBtn>
        </Buttons>
    )

    return (
        <EndLevel buttons={buttons}>
            <Header>Уровень 2</Header>
            <Subtitle>Осталось накрыть на стол!</Subtitle>
            <Text
                dangerouslySetInnerHTML={{
                    __html: `Название товара за 1 рубль`,
                }}
            />
        </EndLevel>
    )
})

export default EndSecondLevel
