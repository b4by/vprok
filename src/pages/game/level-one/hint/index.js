import React from 'react'
import { Wrapper, HintPerek, HintFather, HintMom } from './styled'

export default function Hint({ from }) {
    return (
        <Wrapper>
            { from === 'perek' && <HintPerek />}
            { from === 'father' && <HintFather />}
            { from === 'mom' && <HintMom />}
        </Wrapper>
    )
}
