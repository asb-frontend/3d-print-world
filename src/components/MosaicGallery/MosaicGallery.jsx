// MosaicGallery.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './MosaicGallery.module.css'; // Create and style this CSS module

const MosaicGallery = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageRotation = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageRotation); // Cleanup interval on component unmount
  }, [images, interval]);

  return (
    <div className={s.galleryContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${s.galleryImage} ${index === currentImageIndex ? s.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

MosaicGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

MosaicGallery.defaultProps = {
  interval: 3000, // Default interval of 3 seconds
};

export default MosaicGallery;