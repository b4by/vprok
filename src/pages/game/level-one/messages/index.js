import React from 'react'
import { ReactComponent as NextSVG } from 'img/next.svg'
import { Wrapper, Next, Text } from './styled'

export default function Messages() {
    return (
        <Wrapper>
            <Text>
                На картинке спрятаны предметы для дачного отдыха
            </Text>
            <Next>
                <NextSVG />
            </Next>
        </Wrapper>
    )
}
