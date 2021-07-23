import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import Buttons from 'components/buttons'

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
            <Text
                dangerouslySetInnerHTML={{
                    __html: `Скидка — 5%
                    на заказ в приложении
                    Перекрёсток Впрок`,
                }}
            />
        </EndLevel>
    )
})

export default EndFirstLevel
