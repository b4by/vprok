import React from 'react'
import { Link } from 'react-router-dom'
import StartScreen from 'components/start-screen'
import { ReactComponent as Dacha } from 'img/dacha-text.svg'
import { ReactComponent as DachaDesk } from 'img/dacha-text-desk.svg'
import { ReactComponent as DachaTablet } from 'img/dacha-text-tablet.svg'
import { TextMobile, PlayButon, DachaText, TextTablet, DachaTextTablet, DachaTextDesk, TextDesktop} from './styled'

export default function Home() {
  return (
    <>
      <StartScreen>
        <DachaText>
          <Dacha />
        </DachaText>
        <DachaTextTablet>
          <DachaTablet />
        </DachaTextTablet>
        <DachaTextDesk>
          <DachaDesk />
        </DachaTextDesk>
        <TextMobile dangerouslySetInnerHTML={{__html:`Вся семья отдыхает на даче. Помогите домочадцам найти потерянные предметы и получите скидку на заказ 
          <strong>в Перекрёстке Впрок.</strong>
          
          Самым быстрым и ловким — товары 
          за один рубль и дополнительные 
          промокоды!`}}>
        </TextMobile>
        <TextTablet dangerouslySetInnerHTML={{__html:`Вся семья отдыхает на даче. Помогите домочадцам найти 
          потерянные предметы и получите скидку на заказ 
          в приложении <strong>Перекрёсток Впрок</strong>. 

          Самым быстрым и ловким — товары 
          за один рубль и дополнительные промокоды!
          `}}>
        </TextTablet>
        <TextDesktop dangerouslySetInnerHTML={{__html:`Вся семья отдыхает на даче. Помогите домочадцам найти потерянные предметы и получите скидку на заказ в приложении Перекрёсток Впрок. 

        Самым быстрым и ловким — товары 
        за один рубль и дополнительные промокоды!
        `}} />
        <Link replace to="/game">
          <PlayButon />
        </Link>
      </StartScreen>
    </>
  )
}
