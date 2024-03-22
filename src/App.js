import React, { useState } from 'react';
import Background from "./components/Background";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AccountPage from "./components/AccountPage";
import MainPage from './components/MainPage';
import SuggestionPage from './components/SuggestionPage';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showAccountPage, setShowAccountPage] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  const [showFrontPage, setShowFrontPage] = useState(true); // FrontPage'i başlangıçta göster
  const [showMainPageContent, setShowMainPageContent] = useState(false); // MainPage içeriğini kontrol et
  const [showSuggestionPage, setShowSuggestionPageContent] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowFrontPage(false); // Login ekranı açıldığında FrontPage'i kapat
    setShowMainPageContent(false); // Diğer sayfalarda MainPage içeriğini kapat
  };

  const handleSignOutClick=() => {
    setShowLogin(true);
    setShowFrontPage(false); // Login ekranı açıldığında FrontPage'i kapat
    setShowMainPageContent(false); // Diğer sayfalarda MainPage içeriğini kapat
  }

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowFrontPage(false); // Register ekranı açıldığında FrontPage'i kapat
    setShowMainPageContent(false); // Diğer sayfalarda MainPage içeriğini kapat
  };
  
  const handleAccountClick = () => {
      setShowAccountPage(true);
      setShowFrontPage(false); // AccountPage açıldığında FrontPage'i kapat
      setShowMainPageContent(false); // Diğer sayfalarda MainPage içeriğini kapat
  };

  const handleMainPageClick = () => { 
    setShowMainPage(true);
    setShowFrontPage(false); // MainPage açıldığında FrontPage'i kapat
    setShowLogin(false); 
    setShowRegister(false);
    setShowAccountPage(false);
    setShowMainPageContent(true); // MainPage içeriğini göster
  };

  const handleSendClick = () => {
    setShowSuggestionPageContent(true);
    setShowMainPageContent(false); // Başarılı bir giriş durumunda MainPage'i göster
    setShowLogin(false); // Login sayfasını gizle
    setShowFrontPage(false); // FrontPage'i gizle
    setShowRegister(false);
    setShowAccountPage(false);
  }
  
  const handleLoginSuccess = () => {
    setShowMainPage(true); // Başarılı bir giriş durumunda MainPage'i göster
    setShowLogin(false); // Login sayfasını gizle
    setShowFrontPage(false); // FrontPage'i gizle
    setShowRegister(false);
    setShowAccountPage(false);
  };
  
  return (
    <div>
      <Background />
      {<Navbar handleAccountClick={handleAccountClick} handleMainPageClick={handleMainPageClick} handleSignOutClick={handleSignOutClick}/>}
      {showFrontPage && <FrontPage onLoginClick={handleLoginClick} />}
      {showLogin && <Login handleRegisterClick={handleRegisterClick} handleLoginSuccess={handleLoginSuccess} />}
      {showRegister && <Register/>}
      {showAccountPage && <AccountPage />}
      {showSuggestionPage && !showMainPageContent && <SuggestionPage/>}
      {showMainPageContent && !showFrontPage && !showLogin && !showRegister && !showAccountPage && <MainPage handleSendClick={handleSendClick}/>} {/* MainPage içeriğini göster */}
    </div>
  );
};

export default App;
