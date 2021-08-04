import styled from 'styled-components'
import click from 'audio/click.mp3'
import bigpick from 'audio/bigpick.mp3'
import bubble from 'audio/bubble.mp3'
import highlight from 'audio/highlight.mp3'
import pickup from 'audio/pickup.mp3'
import pong from 'audio/pong.mp3'
import { useRef, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStore } from 'store'

const Wrapper = styled.div`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
`

const typeAudio = {
    click,
    bigpick,
    pong,
    bubble,
    highlight,
    pickup,
}

const Sound = observer(({ type }) => {
    const musicRef = useRef(null)
    const { game } = useStore()

    useEffect(() => {
        const volume = game.musicIsMuted ? 0 : 0.1
        if (musicRef.current) {
            musicRef.current.volume = volume
            musicRef.current.muted = game.musicIsMuted
        }
    })

    return (
        <Wrapper>
            <audio
                src={typeAudio[type]}
                controls
                autoPlay
                volume="0.1"
                allow="autoplay"
                ref={musicRef}
            ></audio>
        </Wrapper>
    )
})

export default Sound
