import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Background from "./components/Background";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
      setShowLogin(true);
    };

  return (
    <div >
        <Background />
        {!showLogin && <FrontPage onLoginClick={handleLoginClick} />}
        {showLogin && <Login />}
    </div>
    
  );
};

export default  App;