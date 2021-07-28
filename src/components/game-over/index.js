import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import Buttons from 'components/buttons'

const GameOver = observer(() => {
    const { game } = useStore()

    const buttons = (
        <Buttons>
            <PrevBtn>Заказать</PrevBtn>
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
            <Subtitle>Кажется недожарили...</Subtitle>
            <Text>Время вышло! Попробуем еще раз?</Text>
        </EndLevel>
    )
})

export default GameOver
