import EndLevel, {
    Header,
    Subtitle,
    Text,
    StyledLink,
} from 'components/end-level'
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
        window.mindbox('sync', {
            operation: 'GetPromocodeForLevel2.ZadachaOnline',
            data: {},
            onSuccess: function (response) {
                console.log(response)
            },
            onError: function (error) {},
        })

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
