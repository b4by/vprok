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
        <EndLevel buttons={buttons}>
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
