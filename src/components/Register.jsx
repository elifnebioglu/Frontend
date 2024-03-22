import React, { useState } from "react";
import "../styles/Register.css";

const Register = ({ handleRegsiterSuccess }) => {
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Şifre teyidi kontrolü yapıldıktan sonra API çağrısı yapılır
    const { confirmPassword, ...dataToSend } = formData; // confirmPassword'u dataToSend'dan kaldır
    console.log("datalar")
    console.log(dataToSend); // Form verilerini konsola yazdır
    // Fetch veya başka bir işlem burada gerçekleştirilebilir
    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        handleRegsiterSuccess();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper1">
      <form onSubmit={handleRegisterSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            name="login"
            placeholder="Username"
            value={formData.login}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
