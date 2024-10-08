import React, { useState, useContext } from "react";
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { GlobalStateContext } from "../../context/GlobalState";
import Register from "../Register/Register";
import { create, login } from "../../utils/appwrite/appwrite";
import s from "./LoginForm.module.css"; // Import your CSS module

const LoginForm = () => {
  const { dispatch } = useContext(GlobalStateContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  const toggleForm = () => {
    setIsSignUpActive((prevState) => !prevState);
  };

  const updateFormData = (data) => {
    setFormData(data);
  };

  const handleSubmit = async () => {
    setErrorMessage(null)
    try {
      console.log("calling create")
      await create(
        formData.userId,
        formData.email,
        formData.password,
        `${formData.firstName} ${formData.lastName}`,
        formData.phoneNumber,
        dispatch
      );
    } catch (error) {
      setErrorMessage(error.message); // Set the error message for display
    }
  };

  return (
    <div className={`${s.container} ${isSignUpActive ? s.active : ""}`}>
      <div className={`${s.formContainer} ${s.signUp}`}>
        <div className={s.form}>
          <h1>Create Account</h1>
          <div className={s.socialIcons}>
            {/* TODO: Populate with urls once linked */}
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
          <Register updateFormData={updateFormData} />
          <button className={s.btn} onClick={handleSubmit}>
            Register
          </button>
          {errorMessage && (<div>{errorMessage}</div>)}
        </div>
      </div>
      <div className={`${s.formContainer} ${s.signIn}`}>
        <div className={s.form}>
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
          <input
            type="email"
            placeholder="Email"
            className={s.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={s.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={s.btn}
            onClick={() => {
              login(email, password, dispatch);
            }}
          >
            Login
          </button>
          <a href="#" className={s.link}>
            Forget Your Password?
          </a>
        </div>
      </div>
      <div className={s.toggleContainer}>
        <div className={s.toggle}>
          <div
            className={`${s.togglePanel} ${
              isSignUpActive ? s.toggleLeft : s.toggleRight
            }`}
          >
            <h1>{isSignUpActive ? "Welcome Back!" : "New Here?"}</h1>
            <p>
              {isSignUpActive
                ? "Login with your account to use all site features"
                : "Register with your personal details to use all site features"}
            </p>
            <button className={s.btnHidden} onClick={toggleForm}>
              {isSignUpActive ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div
            className={`${s.togglePanel} ${
              isSignUpActive ? s.toggleRight : s.toggleLeft
            }`}
          >
            <h1>{isSignUpActive ? "New Here?" : "Welcome Back!"}</h1>
            <p>
              {isSignUpActive
                ? "Login with your account to use all site features"
                : "Enter your personal details to use all site features"}
            </p>
            <button className={s.btnHidden} onClick={toggleForm}>
              {isSignUpActive ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
