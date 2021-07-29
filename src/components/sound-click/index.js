import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import click from 'audio/click.mp3'
import bigpick from 'audio/bigpick.mp3'
import bubble from 'audio/bigpick.mp3'
import highlight from 'audio/bigpick.mp3'
import pickup from 'audio/bigpick.mp3'
import pong from 'audio/bigpick.mp3'

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

const SoundClick = ({ type, children }) => {
    const [clicked, setClicked] = useState(false)
    const musicRef = useRef(null)

    useEffect(() => {
        if (musicRef.current) musicRef.current.volume = 0.2
    })

    return (
        <div onClick={() => setClicked(true)}>
            <Wrapper>
                {clicked && (
                    <audio
                        src={typeAudio[type]}
                        controls
                        autoPlay
                        allow="autoplay"
                        ref={musicRef}
                    ></audio>
                )}
            </Wrapper>
            {children}
        </div>
    )
}

export default SoundClick
