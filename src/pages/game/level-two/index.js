import { observer } from 'mobx-react'
import useRatio from 'hooks/useRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import StartGame from 'components/start-game'
import EndSecondLevel from 'components/end-second-level'
import {
    Wrapper,
    Scene,
    Background,
    Radish,
    Tomato,
    Paprika,
    Сucumber,
    Chicken,
    Hints,
    Answers,
    Answer,
} from './styled'
import Hint from 'components/hint'
import Messages from 'components/messages'
import Timer from 'components/timer'

const LevelTwo = observer(() => {
    const ratio = useRatio()
    const {
        timer,
        game,
        training,
        hints: { momHintResult },
    } = useStore()
    const { levels, level: LVL } = game
    const level = game.trainingIsOver ? LVL : 0
    const { minutes, seconds } = intervalToDuration({
        start: 0,
        end: timer.seconds * 1000,
    })
    const formatedSeconds = `${seconds}`.padStart(2, '0')
    const showTimer = !game.trainingIsOver && training.currentIndexText === 2
    const handlerAnswer = (item) => () => {
        game.pick(item)
    }

    const answers = game.currentItems.map((answer) => {
        let hidden = false
        if (game.pickedItems.find((item) => item === answer)) hidden = true

        return (
            <Answer style={{ display: hidden ? 'none' : 'flex' }}>
                {answer}
            </Answer>
        )
    })
    const items = game.getFiltered().map((indexItem) => {
        if (indexItem === 'редис') {
            return (
                <Radish
                    key={indexItem}
                    onClick={handlerAnswer('редис')}
                    highlight={momHintResult === 'редис'}
                />
            )
        }
        if (indexItem === 'помидор') {
            return (
                <Tomato
                    onClick={handlerAnswer('помидор')}
                    highlight={momHintResult === 'помидор'}
                />
            )
        }
        if (indexItem === 'сладкий перец') {
            return (
                <Paprika
                    onClick={handlerAnswer('сладкий перец')}
                    highlight={momHintResult === 'сладкий перец'}
                />
            )
        }
        if (indexItem === 'огурец') {
            return (
                <Сucumber
                    onClick={handlerAnswer('огурец')}
                    highlight={momHintResult === 'огурец'}
                />
            )
        }
        if (indexItem === 'курица') {
            return (
                <Chicken
                    onClick={handlerAnswer('курица')}
                    highlight={momHintResult === 'курица'}
                />
            )
        }

        return null
    })
    return (
        <>
            <Background blured={game.isOver || game.isCompleted}>
                <Wrapper ratio={ratio}>
                    <Scene>
                        {items}
                        <Timer showTimer={showTimer}>
                            {`${minutes}:${formatedSeconds}`}
                        </Timer>
                        <Hints>
                            <Hint
                                from="perek"
                                active={
                                    !game.trainingIsOver &&
                                    training.currentIndexText === 5
                                }
                            />
                            <Hint
                                from="father"
                                active={
                                    !game.trainingIsOver &&
                                    training.currentIndexText === 4
                                }
                            />
                            <Hint
                                from="mom"
                                active={
                                    !game.trainingIsOver &&
                                    training.currentIndexText === 3
                                }
                            />
                        </Hints>
                        <Answers>{answers}</Answers>
                        <Messages />
                    </Scene>
                </Wrapper>
            </Background>
            {game.trainingIsOver && !game.isStarted && <StartGame />}
            {game.isCompleted && <EndSecondLevel />}
        </>
    )
})

export default LevelTwo
