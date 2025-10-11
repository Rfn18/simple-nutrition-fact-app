import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/header";
import Main from "./assets/components/main";

function App() {
  const [loading, setLoading] = useState(false)
  const setLoad = (item) => {
    setLoading(item)
  }

  console.log(loading)
  return (
    <>
      <div className="nutritionFactApp">
        { 
          !loading ? (
            <>
              <Header />
              <Main handleLoading={setLoad}/>
            </>
           ) : (
            <>
              <div className="container-spinner w-full flex justify-center">
                <i className="fa-solid fa-spinner text-8xl text-[#fab12f] animate-spin"></i>
              </div>
            </>)
        }
      </div>
    </>
  );
}

export default App;
