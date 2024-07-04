import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const updateWindowDimensions = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 480);
    setIsTablet(width > 480 && width <= 768);
    setIsDesktop(width > 768);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useResponsive;