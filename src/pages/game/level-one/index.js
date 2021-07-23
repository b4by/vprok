import { observer } from 'mobx-react'
import useRatio from 'hooks/useRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import StartGame from 'components/start-game'
import EndFirstLevel from 'components/end-first-level'
import {
    Wrapper,
    Scene,
    Background,
    Item1,
    Item2,
    Item3,
    Hints,
    Answers,
    Answer,
    Shampur,
    VectorShampur,
    VectorAnswer,
    VectorTimer,
    VectorHintMom,
    VectorHintDad,
    VectorHintPerek,
} from './styled'
import Hint from 'components/hint'
import Messages from 'components/messages'
import Timer from 'components/timer'

const LevelOne = observer(() => {
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
    const showShampur = !game.trainingIsOver
    const showShampurOff = training.currentIndexText !== 0
    const showAnswer = !game.trainingIsOver && training.currentIndexText === 1
    const showTimer = !game.trainingIsOver && training.currentIndexText === 2
    const handlerAnswer = (item) => () => {
        game.pick(item)
    }

    const answers = levels[level].map((answer) => {
        let hidden = false
        if (game.pickedItems.find((item) => item === answer)) hidden = true

        return (
            <Answer key={answer} hidden={hidden}>
                {answer}
            </Answer>
        )
    })

    return (
        <>
            <Background blured={game.isOver || game.isCompleted}>
                <Wrapper ratio={ratio}>
                    <Scene>
                        <Item1
                            hidden={game.pickedItems.find(
                                (item) => item === levels[level][0]
                            )}
                            onClick={handlerAnswer(levels[level][0])}
                            highlight={momHintResult === levels[level][0]}
                        />
                        <Item2
                            hidden={game.pickedItems.find(
                                (item) => item === levels[level][1]
                            )}
                            onClick={handlerAnswer(levels[level][1])}
                            highlight={momHintResult === levels[level][1]}
                        />
                        <Item3
                            hidden={game.pickedItems.find(
                                (item) => item === levels[level][2]
                            )}
                            onClick={handlerAnswer(levels[level][2])}
                            highlight={momHintResult === levels[level][2]}
                        />
                        <VectorShampur
                            visible={
                                !game.trainingIsOver &&
                                training.currentIndexText === 0
                            }
                        />
                        <VectorAnswer visible={showAnswer} />
                        <VectorTimer visible={showTimer} />
                        <VectorHintMom
                            visible={
                                !game.trainingIsOver &&
                                training.currentIndexText === 3
                            }
                        />
                        <VectorHintDad
                            visible={
                                !game.trainingIsOver &&
                                training.currentIndexText === 4
                            }
                        />
                        <VectorHintPerek
                            visible={
                                !game.trainingIsOver &&
                                training.currentIndexText === 5
                            }
                        />
                        {showShampur && <Shampur off={showShampurOff} />}
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
            {game.isCompleted && <EndFirstLevel />}
        </>
    )
})

export default LevelOne
