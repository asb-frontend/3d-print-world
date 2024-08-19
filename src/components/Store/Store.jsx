import React from "react";
import ProductList from "../ProductList/ProductList";
import { getMockProductData } from "../../utils/mock/productManager";
import s from "./Store.module.css";

const Store = () => {
 
    const mockProductData = getMockProductData();

  return (
    <div className={s.store}>
      <h1>Welcome to Store</h1>
      <ProductList products={mockProductData.products} />
    </div>
  );
};

export default Store;