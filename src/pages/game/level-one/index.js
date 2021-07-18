import { useEffect } from 'react'
import { observer } from 'mobx-react'
import useRatio from 'hooks/useRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import StartGame from 'components/start-game'
import { Wrapper, Scene, Background, Item1, Item2, Item3, Timer, Hints, Answers, Answer } from './styled'
import Hint from './hint'
import Messages from './messages'

const LevelOne = observer(()=> {
    const ratio = useRatio();
    const { timer, game } = useStore()
    
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

    return (
        <Background>
            { game.level === 1 && game.trainingIsOver && !game.isStarted && <StartGame />}
            <Wrapper ratio={ratio}>
                <Scene>
                    <Item1 />
                    <Item2 />
                    <Item3 />
                    <Timer >
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
                        <Answer>Шампуры</Answer>
                    </Answers>
                    <Messages />
                </Scene>
            </Wrapper>
        </Background>
    )
});

export default LevelOne