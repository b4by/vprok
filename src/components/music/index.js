import { useRef, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { useStore } from 'store'

import lvl1 from 'audio/64-lvl1.mp3'
import lvl2 from 'audio/64-lvl2.mp3'
import lvl3 from 'audio/64-lvl3.mp3'
import intro from 'audio/64-intro.mp3'

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
    const win1Ref = useRef(null)
    const win2Ref = useRef(null)
    const win3Ref = useRef(null)
    const introRef = useRef(null)

    const { game } = useStore()
    const musicData = {
        1: lvl1,
        2: lvl2,
        3: lvl3,
    }
    const music = musicData[game.level]

    useLayoutEffect(() => {
        if (musicRef.current) musicRef.current.volume = 0.1
        if (win1Ref.current) win1Ref.current.volume = 0.1
        if (win2Ref.current) win2Ref.current.volume = 0.1
        if (introRef.current) introRef.current.volume = 0.1

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

            {!game.trainingIsOver && !game.isStarted && (
                <audio
                    src={intro}
                    controls
                    autoPlay
                    volume="0.1"
                    ref={introRef}
                    loop
                    allow="autoplay"
                ></audio>
            )}

            {(game.level === 1 || game.level === 2) && game.isCompleted && (
                <audio
                    src={win1}
                    ref={win1Ref}
                    controls
                    autoPlay
                    allow="autoplay"
                ></audio>
            )}

            {game.level === 3 && game.isCompleted && (
                <audio
                    src={win3}
                    ref={win1Ref}
                    controls
                    autoPlay
                    allow="autoplay"
                ></audio>
            )}

            {game.level === 3 && game.isCompleted && (
                <audio
                    src={win3}
                    ref={win1Ref}
                    controls
                    autoPlay
                    allow="autoplay"
                ></audio>
            )}
        </Wrapper>
    )
})

export default Music
