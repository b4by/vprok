import React from 'react'
import { Content, Text, Turn } from './styled'

export default function Blackscreen() {
    return (
        <Content>
            <Text
                dangerouslySetInnerHTML={{
                    __html: `увеличьте окно браузера, чтобы начать игру`,
                }}
            ></Text>
            <Turn />
        </Content>
    )
}
