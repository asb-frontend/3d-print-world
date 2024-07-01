import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaPlug } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { GlobalStateContext } from "../../../GlobalState";
import { logout } from "../../../utils/appwrite";
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
            <FaShoppingCart />
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
          <div className={s.navLogin}>
            <NavLink
              exact="true"
              to="/login"
              className={s.navLinks}
            >
              Login
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={s.navLoginContainer}>
          <div
            className={s.navCart}
            onClick={() => {
              /* TODO: route to shopping cart page */
            }}
          >
            <NavLink
              exact="true"
              to="/shoppingCart"
              className={s.navLinks}
            >
              <CiShoppingCart style={{ fontSize: "1.8rem" }} />
            </NavLink>
          </div>
          <div
            className={s.navLogin}
            onClick={() => {
              logout(dispatch);
            }}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
