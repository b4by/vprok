import React from 'react'
import { ReactComponent as Logo } from 'img/logo.svg';
import { ReactComponent as Dacha } from 'img/dacha-text.svg';
import { HomeContainer, LogoContainer, Content, Text, PlayButon, DachaText } from './styled';

export default function Home() {
  return (
    <HomeContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Content>
        <DachaText>
          <Dacha />
        </DachaText>
        <Text dangerouslySetInnerHTML={{__html:`Вся семья отдыхает на даче. Помогите домочадцам найти потерянные предметы и получите скидку на заказ 
          <strong>в Перекрёстке Впрок.</strong>
          
          Самым быстрым и ловким — товары 
          за один рубль и дополнительные 
          промокоды!`}}>
        </Text>
        <PlayButon />
      </Content>
    </HomeContainer>
  )
}
