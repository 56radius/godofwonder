import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Adjust the timeout value as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">{showSplash ? <SplashScreen /> : <HomeScreen />}</div>
  );
}

export default App;
