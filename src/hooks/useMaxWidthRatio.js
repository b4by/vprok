import { useState, useLayoutEffect } from 'react'

export default function useMaxWidthRatio() {
  function getRation() {
    const wrapperwidth = 1920;
    const wrapperheight = 1080;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return Math.min(vw / wrapperwidth, vh / wrapperheight);
  }

  const [ratio, setRatio] = useState(getRation());

  // wrapper.style.transform = `translate(-50%, -50%) scale(${ratio})`;

  useLayoutEffect(() => {    
    const handleHeightChange= () => setRatio(getRation());
    window.addEventListener('resize', handleHeightChange);
    return () => window.removeEventListener('resize', handleHeightChange);
  }, []);
  // https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/
  
  return ratio;
};
