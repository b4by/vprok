import React, { useState, useLayoutEffect } from 'react'
import PortraitScreen from 'components/portrait-screen'

function useScreenOrientation() {
  const [orientation, setOrientation] = useState(window.screen.orientation.type);

  useLayoutEffect(() => {    
    const handleOrientationChange= () => setOrientation(window.screen.orientation.type);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return orientation;
};

export default function Game() {
  const orientation = useScreenOrientation();
  return (
    <>
      { (orientation === 'portrait-secondary' || orientation === 'portrait-primary' ) && <PortraitScreen />}
      GAME
    </>
  )
}
