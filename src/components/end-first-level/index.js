import EndLevel, {
    Header,
    Subtitle,
    StyledSubtitle,
    TextLevel1,
    TextPromoCode,
    StyledPromoInput,
    EndLevelFooter,
    StyledButton,
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
    let myInput = null
    const { game } = useStore()

    const location = useLocation()

    const copyToClipboard = () => {
        myInput.select()
        document.execCommand('copy')
    }

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
            <StyledSubtitle>Сочный шашлык почти готов!</StyledSubtitle>
            <TextLevel1>
                Скидка — 5%
                <br /> на заказ в приложении <br /> Перекрёсток Впрок
            </TextLevel1>
            <StyledPromoInput
                readOnly
                value="dacha5"
                ref={(ref) => (myInput = ref)}
            />
            {/* <TextPromoCode>dacha5</TextPromoCode> */}
            <EndLevelFooter>
                <StyledButton onClick={copyToClipboard}>
                    <PaperIconSvg />
                </StyledButton>
            </EndLevelFooter>
        </EndLevel>
    )
})

export default EndFirstLevel
