import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import Buttons from 'components/buttons'

const EndSecondLevel = observer(() => {
    const { game } = useStore()

    const buttons = (
        <Buttons>
            <PrevBtn>Заказать</PrevBtn>
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
