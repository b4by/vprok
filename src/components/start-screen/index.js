import React from 'react'
import { ReactComponent as Logo } from 'img/logo.svg'
import { ReactComponent as Huawei } from 'img/huawei-store.svg'
import { ReactComponent as Apple } from 'img/apple-store.svg'
import { ReactComponent as Google } from 'img/google-play.svg'
import { HomeContainer, LogoContainer, Content, StoreIcons, StoreIcon, LogoImg } from './styled'

export default function StartScreen({ children }) {
  return (
    <HomeContainer>
      <LogoContainer>
        <LogoImg>
          <Logo />
        </LogoImg>
        <StoreIcons>
          <StoreIcon>
            <Huawei />
          </StoreIcon>
          <StoreIcon>
            <Apple />
          </StoreIcon>
          <StoreIcon>
            <Google />
          </StoreIcon>
        </StoreIcons>
      </LogoContainer>
      <Content>
        {children}
      </Content>
    </HomeContainer>
  )
}
