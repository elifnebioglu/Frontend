import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder='Username' requied/>
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' requied/>
          </div>

          <div className="remember-forgot">
            <label>
              <input type ="checkbox" /> Remember me 
            </label>
            <a href="#"> Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#">Register </a></p>

          </div>
      </form>
    </div>
  );
};

export default Login;