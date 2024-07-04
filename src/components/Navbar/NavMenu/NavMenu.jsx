import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingBasket, FaShoppingCart, FaPlug, FaAddressCard  } from "react-icons/fa";
import { CiShoppingCart  } from "react-icons/ci";
import { GlobalStateContext } from "../../../GlobalState";
import s from "./NavMenu.module.css"; // Adjust the import path

const NavMenu = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  return (
    <div className={state.navState ? s.navOpen : s.navClosed}>
      <ul className={s.navMenu}>
      <li className={s.navItem}>
          <NavLink exact="true" to="/" className={s.navLinks}>
            <FaHome />
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink exact="true" to="/store" className={s.navLinks}>
            <FaShoppingBasket  />
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink exact="true" to="/about" className={s.navLinks}>
            <FaPlug />
          </NavLink>
        </li>
      </ul>
      {!state.loggedInUser ? (
        <div className={s.navLoginContainer}>
          <div className={s.navItem}>
            <NavLink
              exact="true"
              to="/login"
              className={s.navLinks}
            >
              <FaAddressCard />
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={s.navLoginContainer}>
          <div
            className={s.navItem}
            onClick={() => {
              /* TODO: route to shopping cart page */
            }}
          >
            <NavLink
              exact="true"
              to="/shoppingCart"
              className={s.navLinks}
            >
              <FaShoppingCart />
            </NavLink>
          </div>
          <div className={s.navItem}>
            <NavLink
              exact="true"
              to="/login"
              className={s.navLinks}
            >
              <FaAddressCard />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
