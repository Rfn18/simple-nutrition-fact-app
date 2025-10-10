import React, { useState, useEffect } from "react";

function Main() {
  const [food, setFood] = useState([]);
  const [newFood, setNewFood] = useState("");
  const [data, setData] = useState([]);

  function addFood() {
    if (newFood.trim() !== "") {
      setFood((t) => [...t, newFood]);
      setNewFood("");
    }
  }

  function enterDown(e) {
    if (e.key === "Enter") {
      addFood();
    }
  }

  useEffect(() => {
    if (food.length >= 1) {
      const lastLength = food.length - 1;
      const testData = food[lastLength].split("\n");

      async function apiEdamam() {
        const app_id = "86a7058f";
        const app_key = "88de8f3cb483a240711f5c0a0346a4e9";

        const results = await Promise.all(
          testData.map(async (item) => {
            if (!item.trim()) return null;
            const response = await fetch(
              `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(
                item
              )}`
            );
            return response.json();
          })
        );
        setData((t) => [...t, ...results.filter(Boolean)]);
      }
      apiEdamam();
    }
  }, [food]);
  return (
    <>
      <main className="flex flex-col items-center w-full h-full">
        <textarea
          name="inputArea"
          id="inpText"
          className="w-[80%] h-[40dvh] border-2 border-[#eaeaea] bg-white rounded-md focus:outline-0 p-3 text-md "
          onChange={(e) => setNewFood(e.target.value)}
          onKeyDown={enterDown}
          placeholder={`1 cup rice,\n10 oz chickpeas`}
        ></textarea>
        <button className="btnAnalyze" onClick={addFood}>
          Analyze
        </button>
      </main>
    </>
  );
}

export default Main;
