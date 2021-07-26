import React from 'react'
import { Content, Text, Turn } from './styled'

export default function Blackscreen() {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        return null
    } else {
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
}
