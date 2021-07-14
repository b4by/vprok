import React from 'react'
import useScreenOrientation from 'hooks/useScreenOrientation'
import PortraitScreen from 'components/portrait-screen'
import LevelOne from './level-one'

export default function Game() {
  const orientation = useScreenOrientation();

  return (
    <>
      { (orientation === 'portrait-secondary' || orientation === 'portrait-primary' ) && <PortraitScreen />}
      <LevelOne />
    </>
  )
}
