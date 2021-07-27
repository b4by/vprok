import { observer } from 'mobx-react'
import useScreenOrientation from 'hooks/useScreenOrientation'
import PortraitScreen from 'components/portrait-screen'
import Blackscreen from 'components/blackscreen'
import GameOver from 'components/game-over'
import { useStore } from 'store'
import LevelOne from './level-one'
import LevelTwo from './level-two'
import LevelThree from './level-three'


const Game = observer(() => {
    const orientation = useScreenOrientation()
    const { game } = useStore()

    const level = game.currentLevel

    return (
        <>
            {(orientation === 'portrait-secondary' ||
                orientation === 'portrait-primary') && <PortraitScreen />}
                <Blackscreen /> 
            {(level === 1 || level === 0) && <LevelOne />}
            {level === 2 && <LevelTwo/>}
            {level === 3 && <LevelThree />}
            {game.isOver && <GameOver />}
        </>
    )
})

export default Game
