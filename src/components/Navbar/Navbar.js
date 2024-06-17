import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return (
    <>
      <nav className={s.navbar}>
        <div className={s.navContainer}>
          <NavLink exact to="/" className={s.navLogo}>
            <span>AK-Printing</span>
            <span className={s.icon}>
            </span>
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
            {/* <li className={s.navItem}>
              <NavLink
                exact
                to="/blog"
                activeClassName={s.active}
                className={s.navLinks}
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                exact
                to="/contact"
                activeClassName={s.active}
                className={s.navLinks}
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li> */}
          </ul>
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
