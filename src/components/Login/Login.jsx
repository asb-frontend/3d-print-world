import React, { useState, useContext, useEffect } from "react";
import {
  logout,
} from "../../utils/appwrite/appwrite";
import { getInitials, getJoinedDate, getPhoneNum } from "../../utils/utils";
import { getAddresses } from "../../utils/appwrite/appwrite";
import { GlobalStateContext } from "../../context/GlobalState";
import { ShopperLoginStates, Pages } from "../../constants/enums/enums";
import { FaMailBulk, FaPhone, FaCalendarAlt } from "react-icons/fa";
import LoginForm from "../LoginForm/LoginForm";
import Button from "../Button/Button";
import s from "./Login.module.css";

const Login = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [initials, setInitials] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState([]);

  useEffect(() => {
    dispatch({ type: "CURRENT_PAGE", payload: Pages.LOGIN });
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      if (state.shopperState === ShopperLoginStates.LOGGED_IN) {
        setInitials(getInitials(state.loggedInUser?.name));
        setJoinedDate(getJoinedDate(state.loggedInUser?.$createdAt));
        setPhone(getPhoneNum(state.loggedInUser?.phone));
        setAddress(await getAddresses(state.loggedInUser.$id));
      }
    };
    fetchData();
  }, [
    state.loggedInUser?.name,
    state.loggedInUser?.$createdAt,
    state.loggedInUser?.phone,
    state.loggedInUser?.$id,
    state.shopperState,
  ]);

  return (
    <div>
      <p>
        {state.shopperState === ShopperLoginStates.LOGGED_IN
          ? `Logged in as ${state.loggedInUser?.name}`
          : "Not logged in"}
      </p>

      {state.shopperState !== ShopperLoginStates.LOGGED_IN && (
        <div className={s.loginForm}>
          <LoginForm/>
        </div>
      )}

      {state.shopperState === ShopperLoginStates.LOGGED_IN && (
        <div className={s.loginProfile}>
          <div className={s.profileHeader}>
            <div className={s.profileCircle}>{initials}</div>
            <div className={s.profileName}>{state.loggedInUser?.name}</div>
          </div>

          <div className={s.personalData}>
            <div className={s.profileSection}>
              <div className={s.iconRow}>
                <FaMailBulk className={s.icon} /> Email:
              </div>
              <div>{state.loggedInUser?.email}</div>
            </div>
            <div className={s.profileSection}>
              <div className={s.iconRow}>
                <FaPhone className={s.icon} /> Phone:
              </div>
              <div>{phone}</div>
            </div>
            <div className={s.profileSection}>
              <div className={s.iconRow}>
                <FaCalendarAlt className={s.icon} /> Addresses:
              </div>
              <div>
                {address.map((o) => {
                  return (
                    <div key={o.$id}>
                      - {`${o.address} , ${o.city} , ${o.zip}`}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={s.profileSection}>
              <div className={s.iconRow}>
                <FaCalendarAlt className={s.icon} /> Joined On:
              </div>
              <div>{joinedDate}</div>
            </div>
          </div>
          <Button
            className={s.logoutButton}
            type="button"
            onClick={() => logout(dispatch)}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
