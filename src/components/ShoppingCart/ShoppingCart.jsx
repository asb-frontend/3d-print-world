import React, { useContext } from 'react';
import { GlobalStateContext } from '../../GlobalState';

const ShoppingCart = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.shoppingCart.map(item => (
          <li key={item.id}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;