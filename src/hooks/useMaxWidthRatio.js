import { useState, useLayoutEffect } from 'react'

export default function useMaxWidthRatio() {
  const [maxWidth, setMaxWidth] = useState(window.innerHeight * 1.5);

  useLayoutEffect(() => {    
    const handleHeightChange= () => setMaxWidth(window.innerHeight * 1.5);
    window.addEventListener('resize', handleHeightChange);
    return () => window.removeEventListener('resize', handleHeightChange);
  }, []);

  return maxWidth;
};
