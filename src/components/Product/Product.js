import React, { useState } from 'react';

const Product = ({ product, onAddToCart, name, image, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleAddToCart}>Add to Cart ({quantity})</button>
    </div>
  );
};

export default Product;