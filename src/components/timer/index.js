import { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { intervalToDuration } from 'date-fns'
import { useStore } from 'store'
import { TimerStyled } from './styled'

const Timer = observer(() => {
    const { timer, game, training } = useStore()
    const timerRef = useRef(null)
    const showTimer = !game.trainingIsOver && training.currentIndexText === 2

    useEffect(() => {
        const startTimer = () => {
            timerRef.current = setInterval(() => {
                timer.start()
                timer.increaseTimer()
            }, 1000)
        }

        if (
            game.trainingIsOver &&
            game.isStarted &&
            (!timer.isStarted || (game.isHydrated && timer.isStarted))
        ) {
            startTimer()
            timer.start()

            return () => clearInterval(timerRef.current)
        }
    }, [
        timer,
        game.trainingIsOver,
        game.isStarted,
        game.isHydrated,
        game.isCompleted,
    ])

    useEffect(() => {
        const stopTimer = () => {
            clearInterval(timerRef.current)
        }

        if (game.isCompleted) {
            stopTimer()
        }
    }, [game.isCompleted])

    const { minutes, seconds } = intervalToDuration({
        start: 0,
        end: timer.seconds * 1000,
    })
    const formatedSeconds = `${seconds}`.padStart(2, '0')

    return (
        <TimerStyled
            showTimer={showTimer}
        >{`${minutes}:${formatedSeconds}`}</TimerStyled>
    )
})

export default Timer
