import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './MosaicGallery.module.css';
import clsx from 'clsx';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MosaicGallery = ({ images, interval = 3000, initialDelay = 1000, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Shuffle images on initial render
    setShuffledImages(shuffleArray(images));

    // Start the image rotation after the initial delay
    const startRotation = setTimeout(() => {
      const imageRotation = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);

      // Cleanup interval on component unmount
      return () => clearInterval(imageRotation);
    }, initialDelay);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(startRotation);
  }, [images, interval, initialDelay]);

  return (
    <div className={clsx(s.galleryContainer, className)}>
      {shuffledImages.length > 0 && (
        <div
          className={s.galleryImage}
          style={{ backgroundImage: `url(${shuffledImages[currentImageIndex]})` }}
        />
      )}
    </div>
  );
};

MosaicGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
  initialDelay: PropTypes.number,
  className: PropTypes.string,
};

export default MosaicGallery;
