import { observer } from 'mobx-react'
import useScreenOrientation from 'hooks/useScreenOrientation'
import PortraitScreen from 'components/portrait-screen'
import Blackscreen from 'components/blackscreen'
import GameOver from 'components/game-over'
import { useStore } from 'store'
import LevelOne from './level-one'
import LevelTwo from './level-two'
import LevelThree from './level-three'
import Music from 'components/music'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const Game = observer(() => {
    const isPortrait = useScreenOrientation()
    const isFb = window.navigator.userAgent.indexOf('FBAN') !== -1
    const { game } = useStore()

    const level = game.currentLevel

    const history = useHistory()

    useEffect(() => {
        history.push(`/level/${level}`)
    }, [level, history])

    return (
        <>
            <Music />
            {isPortrait && !isFb && <PortraitScreen />}
            <Blackscreen />
            {(level === 1 || level === 0) && <LevelOne />}
            {level === 2 && <LevelTwo />}
            {level === 3 && <LevelThree />}
            {game.isOver && <GameOver />}
        </>
    )
})

export default Game
