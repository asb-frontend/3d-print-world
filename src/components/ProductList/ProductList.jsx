import React from 'react';
import Product from '../Product/Product';
import Tile from '../Tile/Tile'
import { getMockProductData } from "../../utils/mock/productManager"; // Adjust the path as necessary
import s from "./ProductList.module.css";

const ProductList = ({ products }) => {
  products = getMockProductData().products;

  return (
    <div className={s.productList}>
      {products.map((product) => (
        <Tile key={product.id}>
          <Product key={product.id} product={product} />
        </Tile>
      ))}
    </div>
  );
};

export default ProductList;