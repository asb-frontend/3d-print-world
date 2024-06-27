import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import image1 from "../../images/Logo.jpg";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { GlobalStateContext } from "../../GlobalState";
import { CiShoppingCart } from "react-icons/ci";
import { logout } from "../../utils/appwrite";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { state, dispatch } = useContext(GlobalStateContext);
  useEffect(() => {
    console.log(state); // This will log state once per render cycle
  }, [state]); // Empty dependency array ensures it runs only once after mount

  return (
    <>
      <nav className={s.navbar}>
        <div className={s.navContainer}>
          <NavLink exact="true" to="/" className={s.navLogo}>
            <img className={s.logo} src={image1} alt={"AKPrintingLogo"} />
            <span>AK-Printing</span>
            <span className={s.icon}></span>
          </NavLink>

          <ul className={click ? `${s.navMenu} ${s.active}` : s.navMenu}>
            <li className={s.navItem}>
              <NavLink
                exact="true"
                to="/"
                className={s.navLinks}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                exact="true"
                to="/about"
                className={s.navLinks}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                exact="true"
                to="/store"
                className={s.navLinks}
                onClick={handleClick}
              >
                Store
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
                  onClick={handleClick}
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
                  //TODO route to shopping cart page
                }}
              >
                <NavLink
                  exact="true"
                  to="/shoppingCart"
                  className={s.navLinks}
                  onClick={handleClick}
                >
                <CiShoppingCart style={{ fontSize: '1.8rem' }}/>
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
          <div className={s.navIcon} onClick={handleClick}>
            {click ? (
              <span className={s.icon}>
                <HamburgetMenuOpen />
              </span>
            ) : (
              <span className={s.icon}>
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
