import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import image1 from "../../images/Logo.jpg";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <nav className={s.navbar}>
        <div className={s.navContainer}>
          <NavLink exact to="/" className={s.navLogo}>
            <img className={s.logo} src={image1} />
            <span>AK-Printing</span>
            <span className={s.icon}></span>
          </NavLink>

          <ul className={click ? `${s.navMenu} ${s.active}` : s.navMenu}>
            <li className={s.navItem}>
              <NavLink
                exact
                to="/"
                activeClassName={s.active}
                className={s.navLinks}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                exact
                to="/about"
                activeClassName={s.active}
                className={s.navLinks}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                exact
                to="/store"
                activeClassName={s.active}
                className={s.navLinks}
                onClick={handleClick}
              >
                Store
              </NavLink>
            </li>
          </ul>
          {!loggedInUser ? (
            <div className={s.navLoginContainer}>
              <div className={s.navLogin}>
                <NavLink
                  exact
                  to="/login"
                  activeClassName={s.active}
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
