import React, { useState } from "react";
import "../styles/Login.css";

export let bearerToken = null;

const Login = ({handleRegisterClick, handleLoginSuccess }) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  
    // Kullanıcı adı ve şifre bilgilerini içeren bir nesne oluştur
    const credentials = {
      username: username,
      password: password
    };


    // API'ye istek gönder
    fetch("http://localhost:8080/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // API yanıtını işle
      console.log(data); // Örnek olarak konsola yazdırabilirsiniz  //BEARER TOKEN ı burada bize döndü!!
      bearerToken = data;
      handleLoginSuccess();
      // İşlemleri burada devam ettirin, örneğin kullanıcıyı oturum açmış olarak işaretleyin veya ana sayfaya yönlendirin
    })
    .catch((error) => {
      console.error("There was an error!", error);
      // Hata durumunu kullanıcıya göstermek için bir mekanizma ekleyebilirsiniz
    });
    console.log("Beare:" + bearerToken);
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLoginSubmit}>
        <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder='Username' onChange={handleUsernameChange} />
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required onChange={handlePasswordChange} />
          </div>

          <div className="remember-forgot">
            <label>
              <input type ="checkbox" /> Remember me 
            </label>
            <a href="#"> Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={handleRegisterClick}>Register </a></p>
          </div>
      </form>
    </div>
  );
};

export default Login;

