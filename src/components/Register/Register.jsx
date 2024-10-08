import React, { useState, useEffect } from "react";
import s from "./Register.module.css";

const Register = ({ updateFormData }) => {
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    updateFormData(formData); // Update parent component with form data
  }, [formData, updateFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={s.registerContainer}>
      <div className={s.registerForm}>
        <div className={s.registerField}>
          <input
            className={s.input}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <input
            className={s.input}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <input
            className={s.input}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <input
            className={s.input}
            type="text"
            name="userId"
            placeholder="User Id"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.registerField}>
          <input
            className={s.input}
            type="text"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
