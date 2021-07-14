import React from 'react'
import useMaxWidthRatio from 'hooks/useMaxWidthRatio'
import { Wrapper, Scene, Background } from './styled'

export default function LevelOne() {
    const maxWidth = useMaxWidthRatio();

    return (
        <Background>
            <Wrapper maxWidth={maxWidth}>
                <Scene />
            </Wrapper>
        </Background>
    )
}
