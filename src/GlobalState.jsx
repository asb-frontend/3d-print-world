import React, { createContext, useReducer, useContext } from "react";
import {
  ShopperLoginStates,
  ShopperProgressStates,
  Pages
} from "./constants/enums/enums";

// Create a context
const GlobalStateContext = createContext({
  state: {
    shoppingCartItemCount: 0,
    shopperLogin: ShopperLoginStates.LOGGED_OUT,
    shopperState: ShopperProgressStates.BROWSING,
    shopperName: null,
    loggedInUser: null,
    currentPage: Pages.HOME,
  },
  dispatch: (action) => {},
});

const initialState = {
  shoppingCartItemCount: 0,
  shopperLogin: ShopperLoginStates.LOGGED_OUT,
  shopperState: ShopperProgressStates.BROWSING,
  shopperName: null,
  loggedInUser: null,
  currentPage: Pages.HOME,
};

// Define the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_CART":
      return {
        ...state,
        shoppingCartItemCount: state.shoppingCartItemCount + 1,
      };
    case "DECREMENT_CART":
      return {
        ...state,
        shoppingCartItemCount: state.shoppingCartItemCount - 1,
      };
    case "SET_SHOPPER_STATE":
      return { ...state, shopperState: action.payload };
    case "SET_LOGGED_IN_NAME":
      return { ...state, shopperName: action.payload };
    case "SET_LOGGED_IN_USER":
      return { ...state, loggedInUser: action.payload };
    case "CURRENT_PAGE":
      return { ...state, currentPage: action.payload }
    default:
      return state;
  }
};

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
