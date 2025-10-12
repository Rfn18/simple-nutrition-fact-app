import React, { useState, useEffect } from "react";
import MainData from "./mainData";
import MainResult from "./mainResult";

function Main({ handleLoading }) {
  const [food, setFood] = useState([]);
  const [newFood, setNewFood] = useState("");
  const [updated, setUpdated] = useState(false);
  const [data, setData] = useState([]);

  function addFood() {
    if (newFood.trim() !== "") {
      setFood((t) => [...t, newFood]);
      setNewFood("");
    }
  }

  function handleUpdated() {
    setUpdated(!updated);
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
        const app_id = "cbb235ae";
        const app_key = "b777602c20d30947ce181ca61e2b445d";

        try {
          handleLoading(true);
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
          const filtered = results.filter(Boolean);
          setData((t) => [...t, ...filtered]);
        } catch (err) {
          console.error(err);
        } finally {
          handleLoading(false);
        }
      }
      apiEdamam();
    }
  }, [updated]);

  return (
    <>
      <main className="flex flex-col items-center gap-4 w-full h-full mt-[2em] px-10">
        {data.length === 0 ? (
          <MainData
            setNewFood={setNewFood}
            enterDown={enterDown}
            addFood={addFood}
            handleUpdated={handleUpdated}
          />
        ) : (
          <MainResult
            setNewFood={setNewFood}
            enterDown={enterDown}
            addFood={addFood}
            handleUpdated={handleUpdated}
            datas={data}
          />
        )}
      </main>
    </>
  );
}

export default Main;
