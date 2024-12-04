import { useState, useEffect } from 'react';

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
  extraLarge: 1920,
};

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  const updateSize = () => {
    const width = window.innerWidth;
    if (width < breakpoints.tablet) {
      setScreenSize('mobile');
    } else if (width < breakpoints.desktop) {
      setScreenSize('tablet');
    } else if (width < breakpoints.largeDesktop) {
      setScreenSize('desktop');
    } else if (width < breakpoints.extraLarge) {
      setScreenSize('largeDesktop');
    } else {
      setScreenSize('extraLarge');
    }
  };

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return screenSize;
};

export default useResponsive;
