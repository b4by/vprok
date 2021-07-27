import throttle from 'lodash.throttle'
import { observer } from 'mobx-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import useRatio from 'hooks/useRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import StartGame from 'components/start-game'
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
    Melon,
    Juce,
    Sausage,
    Grass,
    Meat,
    Ketchup,
} from './styled'
import Hint from 'components/hint'
import Messages from 'components/messages'
import Timer from 'components/timer'

const LevelOne = observer(() => {
    const {
        timer,
        game,
        training,
        hints: { momHintResult },
    } = useStore()
    const ratio = useRatio()
    const { minutes, seconds } = intervalToDuration({
        start: 0,
        end: timer.seconds * 1000,
    })
    const formatedSeconds = `${seconds}`.padStart(2, '0')
    const showShampur = !game.trainingIsOver
    const showShampurOff = training.currentIndexText !== 0
    const showAnswer = !game.trainingIsOver && training.currentIndexText === 1
    const showTimer = !game.trainingIsOver && training.currentIndexText === 2
    const handlerAnswer = (item) =>
        throttle(() => {
            game.pick(item)
        }, 1000)
    const answers = game.currentItems.map((answer, i) => {
        return (
            <CSSTransition
                key={answer}
                timeout={{
                    enter: 1000,
                    exit: 500,
                }}
                classNames="answer"
            >
                <Answer lastAnswer={game.getFiltered().length < 3}>
                    {answer}
                </Answer>
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

    const findIndexItem = (itemName) => {
        const index = game.getFiltered().findIndex((item) => item === itemName)

        if (index < 3 && index >= 0) {
            return index
        }

        return null
    }

    const items = game.getFiltered().map((indexItem) => {
        if (indexItem === 'редис') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Radish
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'помидор') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Tomato
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'сладкий перец') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Paprika
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'огурец') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Сucumber
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'курица') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Chicken
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'арбуз') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Watermelon
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'кетчуп') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Ketchup
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'мясо') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Meat
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'сок') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Juce
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'дыня') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Melon
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'колбаски') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Sausage
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'пучок зелени') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Grass
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        return null
    })

    return (
        <>
            <Background blured={game.isOver || game.isCompleted}>
                <Wrapper ratio={ratio} onClick={submit}>
                    <Scene>
                        <TransitionGroup>{items}</TransitionGroup>
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
