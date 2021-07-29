import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { useStore } from 'store'

import lvl1 from 'audio/128-lvl1.mp3'
import lvl2 from 'audio/128-lvl2.mp3'
import lvl3 from 'audio/128-lvl3.mp3'

import win1 from 'audio/win_1.mp3'
import win3 from 'audio/win_3.mp3'

const Wrapper = styled.div`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
`

const Music = observer(() => {
    const musicRef = useRef(null)
    const { game } = useStore()
    const musicData = {
        1: lvl1,
        2: lvl2,
        3: lvl3,
    }
    const music = musicData[game.level]

    useEffect(() => {
        if (game.isStarted) {
            musicRef.current.play()
        }

        if (game.isCompleted) {
            musicRef.current.pause()
        }
    }, [musicRef, game.isStarted, game.isCompleted])

    return (
        <Wrapper>
            <audio src={music} ref={musicRef} controls allow="autoplay"></audio>

            {(game.level === 1 || game.level === 2) && game.isCompleted && (
                <audio src={win1} controls autoPlay allow="autoplay"></audio>
            )}

            {game.level === 3 && game.isCompleted && (
                <audio src={win3} controls autoPlay allow="autoplay"></audio>
            )}

            {game.level === 3 && game.isCompleted && (
                <audio src={win3} controls autoPlay allow="autoplay"></audio>
            )}
        </Wrapper>
    )
})

export default Music
