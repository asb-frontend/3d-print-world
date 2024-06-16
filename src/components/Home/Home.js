import React from "react";
import ProductList from "../ProductList/ProductList";
import { getMockProductData } from "../../utils/mock/productManager";
import s from "./Home.module.css";

const Home = ({}) => {
  const mockProductData = getMockProductData();
  return (
    <div className={s.home}>
      <h1>Welcome to AK-PrinTing</h1>
      <div className={s.imageContainer}>
        <div className={s.homeImage} />
      </div>
      <ProductList products={mockProductData.products} />
    </div>
  );
};

export default Home;
