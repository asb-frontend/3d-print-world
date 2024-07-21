import React, { createContext, useState, useEffect } from 'react';

const ImagesContext = createContext([]);

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const importAllImages = () => {
    try {
      const imageDir = require.context('../images', false, /\.(jpg|png|gif)$/);
      console.log('Image keys:', imageDir.keys()); // Log image keys to verify detection

      const loadedImages = imageDir.keys().map((imageKey) => {
        const image = imageDir(imageKey);
        console.log('Loaded image:', image); // Log each loaded image
        return image;
      });

      setImages(loadedImages);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };

  useEffect(() => {
    importAllImages();
  }, []);

  return (
    <ImagesContext.Provider value={images}>
      {children}
    </ImagesContext.Provider>
  );
};

export { ImagesProvider, ImagesContext };
