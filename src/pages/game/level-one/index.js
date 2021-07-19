import { useEffect } from 'react'
import { observer } from 'mobx-react'
import useRatio from 'hooks/useRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import StartGame from 'components/start-game'
import { 
    Wrapper, 
    Scene, 
    Background, 
    Item1, 
    Item2, 
    Item3, 
    Timer, 
    Hints, 
    Answers, 
    Answer, 
    Shampur, 
    VectorShampur, 
    VectorAnswer, 
    VectorTimer, 
    VectorHintMom, 
    VectorHintDad, 
    VectorHintPerek 
} from './styled'
import Hint from './hint'
import Messages from './messages'

const LevelOne = observer(()=> {
    const ratio = useRatio();
    const { timer, game, training } = useStore()
    
    useEffect(() => {
        if(game.trainingIsOver && game.isStarted && (!timer.isStarted ||(game.isHydrated && timer.isStarted))) {
            timer.start();

            const handle = setInterval(() => {
                timer.increaseTimer()
            }, 1000)

            return () => {
                clearInterval(handle)
            }
        }
        
    }, [timer, game.trainingIsOver, game.isStarted, game.isHydrated])

    const { minutes, seconds} = intervalToDuration({
        start: 0,
        end: timer.seconds * 1000 
    })
    const formatedSeconds = `${seconds}`.padStart(2, '0')

    const showShampur = !game.trainingIsOver
    const showShampurOff = training.currentIndexText !== 0
    const showAnswer = !game.trainingIsOver && training.currentIndexText === 1
    const showTimer = !game.trainingIsOver && training.currentIndexText === 2

    return (
        <Background>
            { game.level === 1 && game.trainingIsOver && !game.isStarted && <StartGame />}
            <Wrapper ratio={ratio}>
                <Scene>
                    <Item1 />
                    <Item2 />
                    <Item3 />
                    <VectorShampur visible={!game.trainingIsOver && training.currentIndexText === 0} />
                    <VectorAnswer visible={showAnswer} />
                    <VectorTimer visible={showTimer} />
                    <VectorHintMom visible={!game.trainingIsOver && training.currentIndexText === 3} />
                    <VectorHintDad visible={!game.trainingIsOver && training.currentIndexText === 4} />
                    <VectorHintPerek visible={!game.trainingIsOver && training.currentIndexText === 5} />
                    {showShampur && <Shampur off={showShampurOff} />}
                    <Timer showTimer={showTimer}>
                        {`${minutes}:${formatedSeconds}`}
                    </Timer>
                    <Hints>
                        <Hint from='perek' />
                        <Hint from='father' />
                        <Hint from='mom' />
                    </Hints>
                    <Answers>
                        <Answer>Уголь</Answer>
                        <Answer>Решётка</Answer>
                        <Answer showAnswer={showAnswer}>Шампуры</Answer>
                    </Answers>
                    <Messages />
                </Scene>
            </Wrapper>
        </Background>
    )
});

export default LevelOne