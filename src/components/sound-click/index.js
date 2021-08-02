import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import click from 'audio/click.mp3'
import bigpick from 'audio/bigpick.mp3'
import bubble from 'audio/bigpick.mp3'
import highlight from 'audio/bigpick.mp3'
import pickup from 'audio/bigpick.mp3'
import pong from 'audio/bigpick.mp3'
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

const SoundClick = observer(({ type, children }) => {
    const [clicked, setClicked] = useState(false)
    const musicRef = useRef(null)
    const { game } = useStore()

    useEffect(() => {
        const volume = game.musicIsMuted ? 0 : 0.1
        if (musicRef.current) musicRef.current.volume = volume
    })

    return (
        <div onClick={() => setClicked(true)}>
            <Wrapper>
                {clicked && (
                    <audio
                        src={typeAudio[type]}
                        controls
                        autoPlay
                        volume="0.1"
                        allow="autoplay"
                        ref={musicRef}
                    ></audio>
                )}
            </Wrapper>
            {children}
        </div>
    )
})

export default SoundClick
