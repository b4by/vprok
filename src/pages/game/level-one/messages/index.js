import React from 'react'
import { ReactComponent as NextSVG } from 'img/next.svg'
import { Wrapper, Next, Text } from './styled'

export default function Messages() {
    return (
        <Wrapper>
            <Text>
Подсказки можно использовать один раз за уровень. В игре три уровня. Пройдите их все, чтобы получить суперприз — скидку до 20% на заказ в приложении Перекрёсток Впрок.            </Text>
            <Next>
                <NextSVG />
            </Next>
        </Wrapper>
    )
}
