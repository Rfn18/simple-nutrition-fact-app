import React, { useState, useEffect } from "react";
import MainData from "./mainData";
import MainResult from "./mainResult";

import dotenv from "dotenv";

function Main({ handleLoading }) {
  const [food, setFood] = useState([]);
  const [newFood, setNewFood] = useState("");
  const [updated, setUpdated] = useState(false);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

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

      async function nurtitionixApi() {
        try {
          handleLoading(true);
          setLoad(true);
          const result = await Promise.all(
            testData.map(async (item) => {
              const res = await fetch(
                "https://trackapi.nutritionix.com/v2/natural/nutrients",
                {
                  method: "POST",
                  headers: {
                    "x-app-id": import.meta.env.VITE_APP_ID,
                    "x-app-key": import.meta.env.VITE_APP_KEY,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ query: item.toLocaleString() }),
                }
              );
              const data = await res.json();
              return data;
            })
          );
          const validResults = result.filter(Boolean);
          setData(validResults);
        } catch (err) {
          console.log(err);
          return;
        } finally {
          handleLoading(false);
          setLoad(false);
        }
      }
      nurtitionixApi();
    }
  }, [updated]);

  const handleSetFromResult = (item) => {
    setData(item);
  };

  if (data[0]?.message) {
    alert("We couldn't match any of your foods");
    setData([]);
    return;
  }

  const styles = () => {
    return load === false ? "flex " : "hidden ";
  };

  return (
    <>
      <main
        className={
          styles() +
          "flex-col items-center gap-4 w-full h-full mt-[2em] px-10 mainContainer"
        }
      >
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
            setDatas={handleSetFromResult}
          />
        )}
      </main>
    </>
  );
}

export default Main;
