import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import image1 from "../../images/Logo.jpg";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { GlobalStateContext } from "../../GlobalState";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { state } = useContext(GlobalStateContext);
  console.log(state);
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
            <></>
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
