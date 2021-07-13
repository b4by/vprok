import React, { useState, useLayoutEffect } from 'react'
import StartScreen from 'components/StartScreen'
import PortraitScreen from 'components/PortraitScreen'
import { ReactComponent as Dacha } from 'img/dacha-text.svg'
import { Text, PlayButon, DachaText, } from './styled'

function useScreenOrientation() {
  const [orientation, setOrientation] = useState(window.screen.orientation.type);
 console.log('@@@', orientation)

  useLayoutEffect(() => {
    console.log('window.screen.orientation.type', window.screen.orientation.type)
    
    const handleOrientationChange= () => setOrientation(window.screen.orientation.type);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return orientation;
};

export default function Home() {
  const orientation = useScreenOrientation();
  return (
    <>
      { (orientation === 'portrait-secondary' || orientation === 'portrait-primary' )&& <PortraitScreen />}
      <StartScreen>
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
      </StartScreen>
    </>
  )
}
