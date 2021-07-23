import { observer } from 'mobx-react'
import useScreenOrientation from 'hooks/useScreenOrientation'
import PortraitScreen from 'components/portrait-screen'
import GameOver from 'components/game-over'
import { useStore } from 'store'
import LevelOne from './level-one'
import LevelTwo from './level-two'
// FIXXXXXXXXXXXXXXXXXXX
import LevelThree from './level-two'


const Game = observer(() => {
    const orientation = useScreenOrientation()
    const { game } = useStore()

    const level = game.currentLevel

    console.log('{game.level === 1 && <LevelOne />}', level, level === 1)
    return (
        <>
            {(orientation === 'portrait-secondary' ||
                orientation === 'portrait-primary') && <PortraitScreen />}
            {level === 1 && <LevelOne />}
            {level === 2 && <LevelTwo/>}
            {level === 3 && <LevelThree />}
            {game.isOver && <GameOver />}
        </>
    )
})

export default Game
