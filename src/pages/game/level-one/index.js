import { observer } from 'mobx-react'
import { CSSTransition } from 'react-transition-group'
import useRatio from 'hooks/useRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import StartGame from 'components/start-game'
import Fade from 'react-reveal/Fade'
import EndFirstLevel from 'components/end-first-level'
import Answer from 'components/answer'
import {
    Wrapper,
    Scene,
    Background,
    Radish,
    Tomato,
    Hints,
    Paprika,
    Сucumber,
    Chicken,
    Watermelon,
    Answers,
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
    const answers = game.currentItems.map((answer) => {
        return (
            <CSSTransition
                key={answer}
                timeout={{
                    enter: 1000,
                    exit: 500,
                }}
                classNames="answer"
            >
                <Answer>{answer}</Answer>
            </CSSTransition>
        )
    })
    const submit = () => {
        if (training.currentIndexText !== training.trainingText.length - 1) {
            training.increaseIndex()
        } else {
            game.setTrainingIsOver()
        }
    }

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
                    key={indexItem}
                    onClick={handlerAnswer('помидор')}
                    highlight={momHintResult === 'помидор'}
                />
            )
        }
        if (indexItem === 'сладкий перец') {
            return (
                <Paprika
                    key={indexItem}
                    onClick={handlerAnswer('сладкий перец')}
                    highlight={momHintResult === 'сладкий перец'}
                />
            )
        }
        if (indexItem === 'огурец') {
            return (
                <Сucumber
                    key={indexItem}
                    onClick={handlerAnswer('огурец')}
                    highlight={momHintResult === 'огурец'}
                />
            )
        }
        if (indexItem === 'курица') {
            return (
                <Chicken
                    key={indexItem}
                    onClick={handlerAnswer('курица')}
                    highlight={momHintResult === 'курица'}
                />
            )
        }
        if (indexItem === 'арбуз') {
            return (
                <Watermelon
                    key={indexItem}
                    onClick={handlerAnswer('арбуз')}
                    highlight={momHintResult === 'арбуз'}
                />
            )
        }
        return null
    })

    return (
        <>
            <Background blured={game.isOver || game.isCompleted}>
                <Wrapper ratio={ratio} onClick={submit}>
                    <Scene>
                        {items}
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
                        <Answers
                            transitionName="answer"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                        >
                            {answers}
                        </Answers>
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
