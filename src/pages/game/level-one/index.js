import React from 'react'
import useMaxWidthRatio from 'hooks/useMaxWidthRatio'
import { Wrapper, Scene, Background, Item1, Item2, Item3, Timer, Hints, Answers, Answer } from './styled'
import Hint from './hint'
import Messages from './messages'

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
                    <Hints>
                        <Hint from='perek' />
                        <Hint from='father' />
                        <Hint from='mom' />
                    </Hints>
                    <Answers>
                        <Answer>Уголь</Answer>
                        <Answer>Решётка</Answer>
                        <Answer>Шампуры</Answer>
                    </Answers>
                    <Messages />
                </Scene>
            </Wrapper>
        </Background>
    )
}
