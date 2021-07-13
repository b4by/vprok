import React from 'react'
import StartScreen from 'components/StartScreen'
import {ReactComponent as Phone}  from 'img/change-orientation.svg'
import { Content, Text, IconsPhone } from './styled'

export default function PortraitScreen() {
  return (
    <Content>
      <StartScreen>
        <Text dangerouslySetInnerHTML={{__html:`Переверните телефон,
          чтобы сыграть в игру`}}></Text>
        <IconsPhone>
          <Phone />
        </IconsPhone>
      </StartScreen>
    </Content>
  )
}
