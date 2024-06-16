import React from 'react';
import Product from '../Product/Product';
import Tile from '../Tile/Tile'
import s from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={s.productList}>
      {products.map((product) => (
        <Tile>
          <Product key={product.id} product={product} />
        </Tile>
      ))}
    </div>
  );
};

export default ProductList;