import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/header";
import Main from "./assets/components/main";

function App() {
  return (
    <>
      <div className="nutritionFactApp">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
