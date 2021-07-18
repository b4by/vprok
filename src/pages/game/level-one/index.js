import { useEffect } from 'react'
import {observer} from 'mobx-react'
import useMaxWidthRatio from 'hooks/useMaxWidthRatio'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import { Wrapper, Scene, Background, Item1, Item2, Item3, Timer, Hints, Answers, Answer } from './styled'
import Hint from './hint'
import Messages from './messages'

const LevelOne = observer(()=> {
    const ratio = useMaxWidthRatio();
    const { timer, game } = useStore()
    
    useEffect(() => {
        if(game.trainingIsOver && (!timer.isStarted ||(game.isHydrated && timer.isStarted))) {
            timer.start();

            const handle = setInterval(() => {
                timer.increaseTimer()
            }, 1000)

            return () => {
                clearInterval(handle)
            }
        }
        
    }, [timer, game.trainingIsOver,  game.isHydrated])

    const { minutes, seconds} = intervalToDuration({
        start: 0,
        end: timer.seconds * 1000 
    })
    const formatedSeconds = `${seconds}`.padStart(2, '0')

    return (
        <Background>
            <Wrapper ratio={ratio}>
                <Scene>
                    <Item1 ratio={ratio} />
                    <Item2 ratio={ratio} />
                    <Item3 ratio={ratio} />
                    <Timer ratio={ratio}>
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