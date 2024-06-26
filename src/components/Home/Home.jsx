// Home.js
import React, { useContext, useEffect } from "react";
import { GlobalStateContext } from "../../GlobalState";
import MosaicGallery from "../MosaicGallery/MosaicGallery"; // Adjust the import path as necessary
import Button from "../Button/Button"
import s from "./Home.module.css";
import image1 from "../../images/Logo.jpg"
import image2 from "../../images/Gemini_Generated_Image_aloxygaloxygalox.jpg"
import image3 from "../../images/Gemini_Generated_Image_aloxyealoxyealox.jpg"
import image4 from "../../images/Gemini_Generated_Image_705wo9705wo9705w.jpg"
import { Pages } from "../../constants/enums/enums";

const Home = () => {
  const { dispatch } = useContext(GlobalStateContext);

  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  useEffect(() =>{
    dispatch({ type: 'CURRENT_PAGE', payload: Pages.HOME})
  }, [dispatch]);

  return (
    <div className={s.home}>
      <h1 className="title">Welcome to AK-Printing</h1>
      <p className="subtitle">Making your life easier, one print at a time.</p>
      <Button className="button">Get Started</Button>
      <div className={s.imageContainer}>
        <MosaicGallery images={images} interval={3000} />
      </div>
    </div>
  );
};

export default Home;