import styled from 'styled-components'
import click from 'audio/click.mp3'
import bigpick from 'audio/bigpick.mp3'
import bubble from 'audio/bubble.mp3'
import highlight from 'audio/highlight.mp3'
import pickup from 'audio/pickup.mp3'
import pong from 'audio/pong.mp3'

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

const Sound = ({ type }) => {
    return (
        <Wrapper>
            <audio
                src={typeAudio[type]}
                controls
                autoPlay
                allow="autoplay"
            ></audio>
        </Wrapper>
    )
}

export default Sound
