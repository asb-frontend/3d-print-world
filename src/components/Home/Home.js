// Home.js
import React from "react";
import ProductList from "../ProductList/ProductList";
import { getMockProductData } from "../../utils/mock/productManager";
import MosaicGallery from "../MosaicGallery/MosaicGallery"; // Adjust the import path as necessary
import s from "./Home.module.css";
import image1 from "../../images/Logo.jpg"
import image2 from "../../images/Gemini_Generated_Image_aloxygaloxygalox.jpg"
import image3 from "../../images/Gemini_Generated_Image_aloxyealoxyealox.jpg"
import image4 from "../../images/Gemini_Generated_Image_705wo9705wo9705w.jpg"

const Home = () => {
  const mockProductData = getMockProductData();
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  return (
    <div className={s.home}>
      <h1>Welcome to AK-PrinTing</h1>
      <div className={s.imageContainer}>
        <MosaicGallery images={images} interval={3000} />
      </div>
      <ProductList products={mockProductData.products} />
    </div>
  );
};

export default Home;