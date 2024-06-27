import React, {useContext, useState} from "react";
import { GlobalStateContext } from '../../GlobalState';
import s from "./Tile.module.css";

const Tile = ({ children, title, product }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(GlobalStateContext);

  const addToCart = (quanity) => {
    console.log(quanity);
    dispatch({ type: 'ADD_TO_CART', payload: { id: product.id, name: `${product.name} ${quanity > 1 ? 'x'+ quanity : ''}` , price: product.price * quanity, quantity: quanity } });
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
          <button onClick={() => addToCart(quantity)}>Add to Cart ({quantity})</button>
        </div>
      </div>
    </>
  );
};

export default Tile;
