import throttle from 'lodash.throttle'
import { observer } from 'mobx-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import useRatio from 'hooks/useRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import StartGame from 'components/start-game'
import EndThirdLevel from 'components/end-third-level'
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
    Melon,
    Juce,
    Sausage,
    Grass,
    Meat,
    Ketchup,
    Cage,
    Coal,
    Mangal,
    Cups,
    Shampur,
    Bottle,
    Bucket,
    Rake,
    Ball,
    WaterPot,
} from './styled'
import Hint from 'components/hint'
import Messages from 'components/messages'
import Timer from 'components/timer'

const LevelThree = observer(() => {
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

        if (indexItem === 'решётка') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Cage
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'уголь') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Coal
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'мангал') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Mangal
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'пластиковые стаканчики') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Cups
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'шампуры') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Shampur
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }


        if (indexItem === 'детское ведёрко') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Bucket
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }

        if (indexItem === 'лейка') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <WaterPot
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'бутилированная вода') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Bottle
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'грабли') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Rake
                        key={indexItem}
                        onClick={handlerAnswer(indexItem)}
                        highlight={momHintResult === indexItem}
                        index={findIndexItem(indexItem)}
                    />
                </CSSTransition>
            )
        }
        if (indexItem === 'мяч') {
            return (
                <CSSTransition
                    key={indexItem}
                    timeout={{
                        exit: 1000,
                    }}
                    classNames="item"
                >
                    <Ball
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
                <Wrapper ratio={ratio}>
                    <Scene>
                        <TransitionGroup>{items}</TransitionGroup>
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
            {game.isCompleted && <EndThirdLevel />}
        </>
    )
})

export default LevelThree
