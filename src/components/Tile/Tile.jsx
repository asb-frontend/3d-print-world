import React, {useState} from "react";
import s from "./Tile.module.css";

const Tile = ({ children, title, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (event, product) => {
    // Optional: Prevent default behavior for button clicks (if applicable)
    if (event) {
      event.preventDefault();
    }
  
    const quan = quantity /* Get quantity from component state or input value */;
  
    // Validate quantity (optional)
    if (quan <= 0) {
      console.error("Invalid quantity. Please enter a positive number.");
      return;
    }  
    // Assuming onAddToCart is a prop that dispatches an action (Redux example)
    if (onAddToCart) {
      onAddToCart();
    } else {
      console.error("onAddToCart prop not provided. Cart functionality might be broken.");
    }
  };

  return (
    <>
      <div className={s.tile}>
        <div className={s.tileTitle}>{title}</div>
        <div className={s.tileContent}>{children}</div>
        <div className={s.tileButton}>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button onClick={handleAddToCart}>Add to Cart ({quantity})</button>
        </div>
      </div>
    </>
  );
};

export default Tile;
