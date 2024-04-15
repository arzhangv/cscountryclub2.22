import "./App.css";
import React from "react";
import calabasas_country_club from "./assets/img.png";
import Companies from "./components/Companies";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="w-screen h-[2207px] bg-green-tertiary">
        <Home/>
        <Companies />
      </div>
    </>
  );
}

export default App;
