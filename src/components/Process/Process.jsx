import React, { useState, useContext } from 'react';
import { ImagesContext } from "../../context/ImagesContext";
import s from './Process.module.css'; // Import the CSS module

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = useContext(ImagesContext);

  const maxIndex = Math.max(0, images.length/3 - 1);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };
  console.log(images.length)
  return (
    <div className={s.slider}>
      {currentIndex > 0 && (
      <button className={`${s.arrow} ${s.arrowLeft}`} onClick={goToPrevious}>
        &#10094;
      </button>
      )}
      <div className={s.sliderContainer}>
        <div
          className={s.sliderWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className={s.slide} key={index}>
              <img className={s.img} src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      {currentIndex < maxIndex && (
      <button className={`${s.arrow} ${s.arrowRight}`} onClick={goToNext}>
        &#10095;
      </button>)}
    </div>
  );
};

export default Process;
