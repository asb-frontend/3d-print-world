import React, { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalState";
import { ImagesContext } from "../../context/ImagesContext";
import Button from "../Button/Button";
import s from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const images = useContext(ImagesContext);
  const { state, dispatch } = useContext(GlobalStateContext);

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } });
  };

  return (
    <div className={s.shoppingCartContainer}>
      <h2>Shopping Cart</h2>
      <div className={s.shoppingCartItemList}>
        {state.shoppingCart.map((item) => (
          <div key={item.id} className={s.shoppingCartItem}>
            <div className={s.shoppingCartItemLeftSide}>
              <div
                style={{ backgroundImage: `url(${images[0]})` }}
                className={s.shoppingCartItemImage}
              />
              <div className={s.shoppingCartItemTitle}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            </div>
            <div className={s.shoppingCartItemManagement}>
              <span>Quanitity:</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => {
                  console.log(item.unitPrice)
                  const newQuantity = parseInt(e.target.value, 10);
                  if (isNaN(newQuantity) || newQuantity < 1) return;
                  console.log(item.unitPrice * newQuantity)

                  const newPrice = item.unitPrice * newQuantity;
              
                  dispatch({
                    type: "UPDATE_ITEM_QUANTITY",
                    payload: {
                      id: item.id,
                      price: newPrice,
                      unitPrice: item.unitPrice,
                      quantity: newQuantity,
                    },
                  });
                }}
              />
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
