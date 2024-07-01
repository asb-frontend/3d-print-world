import React, { createContext, useReducer } from "react";
import {
  ShopperLoginStates,
  ShopperProgressStates,
  Pages
} from "./constants/enums/enums";

// Create a context
const GlobalStateContext = createContext({
  state: {
    navState: false,
    shoppingCartItemCount: 0,
    shopperLogin: ShopperLoginStates.LOGGED_OUT,
    shopperState: ShopperProgressStates.BROWSING,
    shopperName: null,
    loggedInUser: null,
    currentPage: Pages.HOME,
    shoppingCart: [], // Array to hold cart items
  },
  dispatch: (action) => {},
});

const initialState = {
  navState: true,
  shoppingCartItemCount: 0,
  shopperLogin: ShopperLoginStates.LOGGED_OUT,
  shopperState: ShopperProgressStates.BROWSING,
  shopperName: null,
  loggedInUser: null,
  currentPage: Pages.HOME,
  shoppingCart: [], // Array to hold cart items
};

// Define the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return{
        ...state,
        navState: !state.navState
      }
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
      return { ...state, currentPage: action.payload };
    case 'ADD_TO_CART':
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(item => item.id !== action.payload.id),
      };
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
