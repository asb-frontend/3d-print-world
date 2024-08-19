import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import s from "./ImageSlider.module.css"; // Import your modular CSS file

const ImageSlider = () => {
  const navigate = useNavigate();
  const [isMaxed, setIsMaxed] = useState(false);

  const sliderRef = useRef(null);
  const beforeRef = useRef(null);
  const containerRef = useRef(null);
  const [buttonText, setButtonText] = useState("Join The Club");

  const dragTheImg = (e) => {
    if (!isMaxed) {
      let mPosi = e.nativeEvent.offsetX;
      let overallSize = containerRef.current.offsetWidth;

      beforeRef.current.style.width = mPosi + "px";
      sliderRef.current.style.left = mPosi + "px";

      if (mPosi < 25) {
        beforeRef.current.style.width = 0;
        sliderRef.current.style.left = 0;
      }
      if (mPosi + 25 > overallSize) {
        beforeRef.current.style.width = overallSize + "px";
        sliderRef.current.style.left = overallSize + "px";
      }
    }
  };

  const maxTheImg = (e) => {
    setIsMaxed(true);
    sliderRef.current.style.left = "100%";
    beforeRef.current.style.width = "100%";
  };

  const handleButtonClick = () => {
    setButtonText("Clicked!");
  };

  return (
    <div>
      <div className={s.imgSliderWrapp}>
        <div
          className={s.container}
          ref={containerRef}
          onMouseMove={dragTheImg}
        >
          <div className={s.imgAfterWrap}>
            <img
              className={s.image}
              src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="After"
            />
          </div>
          <div className={s.imgBeforeWrap} ref={beforeRef}>
            <img
              src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3xwMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Before"
              className={s.image}
            />
          </div>
          <div className={s.sliderIndicator} ref={sliderRef}></div>
          <div className={s.heroContent} style={{ zIndex: 1 }}>
            <h1 className={s.heroContentTest}>Prints with more color</h1>
            <h1 className={s.heroContentTest}>AK-Printing</h1>
          </div>
          <button
            className={s.heroBtn}
            onClick={() => navigate("/login")}
            onMouseMove={maxTheImg}
            onMouseLeave={() => setIsMaxed(false)}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div className={s.blankSection}></div>
    </div>
  );
};

export default ImageSlider;
