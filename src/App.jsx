import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/header";
import Main from "./assets/components/main";

function App() {
  const [loading, setLoading] = useState(false);
  const setLoad = (item) => {
    setLoading(item);
  };
  return (
    <>
      <div className="nutritionFactApp">
        <Header />
        <Main handleLoading={setLoad} />
        {loading && (
          <div className="flex flex-col justify-center h-full loading">
            <div className="container-spinner w-full flex justify-center">
              <i className="fa-solid fa-spinner text-8xl text-[#fab12f] animate-spin"></i>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
