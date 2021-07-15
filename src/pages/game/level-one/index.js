import React from 'react'
import useMaxWidthRatio from 'hooks/useMaxWidthRatio'
import { Wrapper, Scene, Background, Item1, Item2, Item3, Timer } from './styled'

export default function LevelOne() {
    const ratio = useMaxWidthRatio();

    return (
        <Background>
            <Wrapper ratio={ratio}>
                <Scene>
                    <Item1 ratio={ratio} />
                    <Item2 ratio={ratio} />
                    <Item3 ratio={ratio} />
                    <Timer ratio={ratio}>
                        1:30
                    </Timer>
                </Scene>
            </Wrapper>
        </Background>
    )
}
