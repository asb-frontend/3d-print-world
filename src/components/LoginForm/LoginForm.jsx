import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

import s from "./LoginForm.module.css"; // Import your CSS module

const LoginForm = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const toggleForm = () => {
    setIsSignInActive((prevState) => !prevState);
  };

  return (
    <div className={`${s.container} ${isSignInActive ? s.active : ""}`}>
      <div className={`${s.formContainer} ${s.signUp}`}>
        <form className={s.form}>
          <h1>Create Account</h1>
          <div className={s.socialIcons}>
            <a href="#" className={s.icon}>
              <FaGoogle />
            </a>
            <a href="#" className={s.icon}>
              <FaFacebookF />
            </a>
            <a href="#" className={s.icon}>
              <FaGithub />
            </a>
            <a href="#" className={s.icon}>
              <FaLinkedin />
            </a>
          </div>
          <span className={s.formText}>or use your email for registration</span>
          <input type="text" placeholder="Name" className={s.input} />
          <input type="email" placeholder="Email" className={s.input} />
          <input type="password" placeholder="Password" className={s.input} />
          <button className={s.btn}>Login</button>
        </form>
      </div>
      <div className={`${s.formContainer} ${s.signIn}`}>
        <form className={s.form}>
          <h1>Login</h1>
          <div className={s.socialIcons}>
          <a href="#" className={s.icon}>
              <FaGoogle />
            </a>
            <a href="#" className={s.icon}>
              <FaFacebookF />
            </a>
            <a href="#" className={s.icon}>
              <FaGithub />
            </a>
            <a href="#" className={s.icon}>
              <FaLinkedin />
            </a>
          </div>
          <span className={s.formText}>or use your email and password</span>
          <input type="email" placeholder="Email" className={s.input} />
          <input type="password" placeholder="Password" className={s.input} />
          <button className={s.btn}>Login</button>
          <a href="#" className={s.link}>
            Forget Your Password?
          </a>
        </form>
      </div>
      <div className={s.toggleContainer}>
        <div className={s.toggle}>
          <div
            className={`${s.togglePanel} ${
              isSignInActive ? s.toggleLeft : s.toggleRight
            }`}
          >
            <h1>{isSignInActive ? "Welcome Back!" : "New Here?"}</h1>
            <p>
              {isSignInActive
                ? "Login with your account to use all site features"
                : "Register with your personal details to use all site features"}
            </p>
            <button className={s.btnHidden} onClick={toggleForm}>
              {isSignInActive ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div
            className={`${s.togglePanel} ${
              isSignInActive ? s.toggleRight : s.toggleLeft
            }`}
          >
            <h1>{isSignInActive ? "New Here?" : "Welcome Back!"}</h1>
            <p>
              {isSignInActive
                ? "Login with your account to use all site features"
                : "Enter your personal details to use all site features"}
            </p>
            <button className={s.btnHidden} onClick={toggleForm}>
              {isSignInActive ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
