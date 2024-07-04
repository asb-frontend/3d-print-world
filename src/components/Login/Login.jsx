import React, { useState, useContext, useEffect } from "react";
import { account, ID, login, logout } from "../../utils/appwrite";
import { GlobalStateContext } from "../../GlobalState";
import { ShopperLoginStates, Pages } from "../../constants/enums/enums";
import Button from "../Button/Button";
import s from "./Login.module.css";

const Login = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch({ type: "CURRENT_PAGE", payload: Pages.LOGIN });
  }, [dispatch]);

  return (
    <div>
      <p>
        {state.shopperState === ShopperLoginStates.LOGGED_IN
          ? `Logged in as ${state.loggedInUser?.name}`
          : "Not logged in"}
      </p>

      <form>
        {state.shopperState !== ShopperLoginStates.LOGGED_IN && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button onClick={() => login(email, password, dispatch)}>
              Login
            </Button>
            <br />

            <Button
              onClick={async () => {
                try {
                  await account.create(ID.unique(), email, password, name);
                  login(email, password);
                } catch {
                  console.error("Error registering");
                }
              }}
            >
              Register
            </Button>
          </>
        )}

        {state.shopperState === ShopperLoginStates.LOGGED_IN && (
          <Button type="button" onClick={() => logout(dispatch)}>
            Logout
          </Button>
        )}
      </form>
    </div>
  );
};

export default Login;
