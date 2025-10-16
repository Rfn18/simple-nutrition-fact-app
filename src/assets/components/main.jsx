import React, { useState, useEffect } from "react";
import MainData from "./mainData";
import MainResult from "./mainResult";

function Main({ handleLoading }) {
  const [food, setFood] = useState([]);
  const [newFood, setNewFood] = useState("");
  const [updated, setUpdated] = useState(false);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false)

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

      console.log(testData.toLocaleString());
      async function nurtitionixApi() {
        try {
          handleLoading(true);
          setLoad(true)
          const result = await Promise.all(
            testData.map(async (item) => {
              const res = await fetch(
                "https://trackapi.nutritionix.com/v2/natural/nutrients",
                {
                  method: "POST",
                  headers: {
                    "x-app-id": "2d3e9978",
                    "x-app-key": "30d9676fca4af72866e0ada43f530f25",
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
          console.error(err);
        } finally {
          handleLoading(false);
          setLoad(false)
        }
      }
      nurtitionixApi();
    }
  }, [updated]);

  const handleSetFromResult = (item) => {
    setData(item)
  }

  const styles = () => {
    return load === false ? "flex " : "hidden " 
  }

  return (
    <>
      <main className={styles() + "flex-col items-center gap-4 w-full h-full mt-[2em] px-10 mainContainer"}>
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
