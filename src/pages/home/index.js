import { useState } from 'react'
import StartScreen from 'components/start-screen'
import { ReactComponent as Dacha } from 'img/dacha-text.svg'
import { ReactComponent as DachaDesk } from 'img/dacha-text-desk.svg'
import { ReactComponent as DachaTablet } from 'img/dacha-text-tablet.svg'
import {
    TextMobile,
    PlayButon,
    DachaText,
    TextTablet,
    DachaTextTablet,
    DachaTextDesk,
    TextDesktop,
    PlayContainer,
} from './styled'
import { useHistory } from 'react-router-dom'
import SoundClick from 'components/sound-click'

export default function Home() {
    const [pushed, setPushed] = useState(false)
    const history = useHistory()
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
                <TextMobile
                    dangerouslySetInnerHTML={{
                        __html: `Вся семья отдыхает на даче. Помогите домочадцам найти потерянные предметы и получите скидку на заказ 
          <strong>в Перекрёстке Впрок.</strong>
          
          Самым быстрым и ловким — товары 
          за один рубль и дополнительные 
          промокоды!`,
                    }}
                ></TextMobile>
                <TextTablet
                    dangerouslySetInnerHTML={{
                        __html: `Вся семья отдыхает на даче. Помогите домочадцам найти 
          потерянные предметы и получите скидку на заказ 
          в приложении <strong>Перекрёсток Впрок</strong>. 

          Самым быстрым и ловким — товары 
          за один рубль и дополнительные промокоды!
          `,
                    }}
                ></TextTablet>
                <TextDesktop
                    dangerouslySetInnerHTML={{
                        __html: `Вся семья отдыхает на даче. Помогите домочадцам найти потерянные предметы и получите скидку на заказ в приложении Перекрёсток Впрок. 

        Самым быстрым и ловким — товары 
        за один рубль и дополнительные промокоды!
        `,
                    }}
                />
                <PlayContainer>
                    <SoundClick type="click">
                        <PlayButon
                            className={pushed ? `push` : null}
                            onClick={() => {
                                setTimeout(() => {
                                    history.push('/game')
                                }, 1000)
                                setPushed(true)
                            }}
                        />
                    </SoundClick>
                </PlayContainer>
            </StartScreen>
        </>
    )
}
