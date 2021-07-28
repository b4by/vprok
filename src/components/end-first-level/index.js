import EndLevel, {
    Header,
    Subtitle,
    TextLevel1,
    TextPromoCode,
    EndLevelFooter,
} from 'components/end-level'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import Buttons from 'components/buttons'
import { ReactComponent as PaperIconSvg } from 'assets/svg/papers.svg'

const EndFirstLevel = observer(() => {
    const { game } = useStore()

    const buttons = (
        <Buttons>
            <PrevBtn>Заказать</PrevBtn>
            <NextBtn
                onClick={() => {
                    game.levelPassed()
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
