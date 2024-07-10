import React, { useState, useEffect, useContext } from "react";
import { create } from "../../utils/appwrite/appwrite";
import { GlobalStateContext } from "../../GlobalState";
import Button from "../Button/Button";
import s from "./Register.module.css";

const Register = () => {
  const { dispatch } = useContext(GlobalStateContext);
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    create(
      formData.userId,
      formData.email,
      formData.password,
      `${formData.firstName} ${formData.lastName}`,
      formData.phoneNumber,
      dispatch
    );
  };

  return (
    <div className={s.registerContainer}>
      <div className={s.registerForm}>
        <div className={s.registerField}>
          <label>User Id:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <Button
        className={s.registerButton}
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
