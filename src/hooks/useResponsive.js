import { useState, useEffect } from 'react';

export default function useResponsive() {
  const [size, setSize] = useState();

  useEffect(() => {
    const resizeHandler = () => {
      setSize(window.innerWidth);
    };

    const firstRenderSize = setTimeout(() => {
      resizeHandler();
    }, 0.0000000000000000001);

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      clearTimeout(firstRenderSize);
    };
  }, []);

  return { size };
}
