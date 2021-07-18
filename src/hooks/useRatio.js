import { useState, useLayoutEffect } from 'react'
import { size } from 'helpers/breakpoints'

export default function useRatio() {
  function getRation() {
    let wrapperwidth = 640;
    let wrapperheight = 360;

    if (window.matchMedia(`(min-width: ${size.sm}px)`).matches) {
      wrapperwidth = 1024;
      wrapperheight = 768;    
    }

    if (window.matchMedia(`(min-width: ${size.lg}px)`).matches) {
      wrapperwidth = 1920;
      wrapperheight = 1080;
    }
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return Math.min(vw / wrapperwidth, vh / wrapperheight);
  }

  const [ratio, setRatio] = useState(getRation());

  useLayoutEffect(() => {    
    const handleHeightChange= () => setRatio(getRation());
    window.addEventListener('resize', handleHeightChange);
    return () => window.removeEventListener('resize', handleHeightChange);
  }, []);
  // https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/
  
  return ratio;
};
