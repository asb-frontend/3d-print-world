import React, { useContext, useEffect } from "react";
import s from "./Navbar.module.css";
import image1 from "../../images/Logo.jpg";
import { GlobalStateContext } from "../../context/GlobalState";
import NavMenu from "./NavMenu/NavMenu";


function NavBar() {
  const { state, dispatch } = useContext(GlobalStateContext);
  useEffect(() => {
    console.log(state); 
  }, [state]); 

  return (
    <>
      <nav className={state.navState ? `${s.navbar} ${s.navbarActive}` : `${s.navbar} ${s.navbarClosed}`}>
        <div className={s.navContainer} >
            <img className={state.navState ? s.logo : `${s.logo} ${s.logoActive}` } src={image1} alt={"AKPrintingLogo"} onClick={() => dispatch({type:"TOGGLE_NAV"})}/>
          <NavMenu></NavMenu>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
