import React, { useState, useEffect } from "react";

function Main({ handleLoading }) {
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

      const fetching = async () => {
        handleLoading(true);
        try {
          await new Promise((t) => setTimeout(t, 1000));
        } catch (err) {
          console.error();
        } finally {
          handleLoading(false);
        }
      };
      fetching();

      // async function apiEdamam() {
      //   const app_id = "86a7058f";
      //   const app_key = "88de8f3cb483a240711f5c0a0346a4e9";

      //   const results = await Promise.all(
      //     testData.map(async (item) => {
      //       if (!item.trim()) return null;
      //       const response = await fetch(
      //         `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(
      //           item
      //         )}`
      //       );
      //       return response.json();
      //     })
      //   );
      //   setData((t) => [...t, ...results.filter(Boolean)]);
      // }
      // apiEdamam();
    }
  }, [food]);

  function MainData() {
    return (
      <>
        <textarea
          name="inputArea"
          id="inpText"
          className="w-[80%] h-[40dvh] border-2 border-[#eaeaea] bg-white rounded-md focus:outline-0 p-3 text-md "
          onChange={(e) => setNewFood(e.target.value)}
          onKeyDown={enterDown}
          placeholder={`1 cup rice,\n10 oz chickpeas`}
        ></textarea>
        <button
          className="bg-[#fab12f] text-white font-bold rounded-4xl py-[.5em] px-[2em] cursor-pointer transition ease-in scale-100 hover:bg-white hover:text-[#fab12f] hover:scale-95 btnAnalyze"
          onClick={addFood}
        >
          Analyze
        </button>
      </>
    );
  }

  return (
    <>
      <main className="flex justify-between items-center w-full h-full mt-[2em] px-10">
        {/* <MainData /> */}
        <div className="flex flex-col justify-center items-center gap-5 w-2xl containerItems">
          <textarea
            name="inputArea"
            id="inpText"
            className="w-[80%] h-[40dvh] border-2 border-[#ddd] bg-white rounded-md focus:outline-0 p-3 text-md "
            onChange={(e) => setNewFood(e.target.value)}
            onKeyDown={enterDown}
            placeholder={`1 cup rice,\n10 oz chickpeas`}
          ></textarea>
          <div className="flex gap-3 container-button">
            <button
              className="bg-[#fab12f] text-white font-bold text-sm rounded-4xl py-[.5em] px-[20px] w-30 cursor-pointer transition ease-in scale-100 hover:bg-white hover:text-[#fab12f] hover:scale-95 btnAnalyze"
              onClick={addFood}
            >
              Analyze
            </button>
            <button className="bg-[#fab12f] text-white font-bold text-sm rounded-4xl py-[.5em] px-[20px] w-30 cursor-pointer transition ease-in scale-100 hover:bg-white hover:text-[#fab12f] hover:scale-95 btnAnalyze">
              New recipe
            </button>
          </div>
          <div className="w-[80%] border-2 border-[#ddd] bg-white rounded-md container-ingridients">
            <table className="justify-self-center w-full">
              <thead className="">
                <th>Qty</th>
                <th>Unit</th>
                <th>Food</th>
                <th>Calories</th>
                <th>Weight</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Cup</td>
                  <td>Rice</td>
                  <td>200</td>
                  <td>230g</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Cup</td>
                  <td>Rice</td>
                  <td>200</td>
                  <td>230g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-60 bg-white container-card-nutrition">
          <h1>Nutrition Facts</h1>
          <table>
            <thead>
              <th>Amount Per Serving</th>
            </thead>
            <tr>
              <th>
                <b>Calories</b>
              </th>
              <td>1174</td>
            </tr>
            <tr className="thick-row">
              <td>
                <d>% Daily Value*</d>
              </td>
            </tr>
            <tr>
              <th>
                <b>
                  Total Fat <span>18.3 g</span>
                </b>
              </th>
              <td>28%</td>
            </tr>
            <tr>
              <th>
                Saturated Fat <span>2 g</span>
              </th>
              <td>10%</td>
            </tr>
            <tr>
              <th>
                Trans Fat <span>0 g</span>
              </th>
              <td></td>
            </tr>
            <tr>
              <th>
                <b>
                  Cholesterol <span>0 mg</span>
                </b>
                <td>0 %</td>
              </th>
            </tr>
            <tr>
              <th>
                <b>
                  Sodium <span>70 mg</span>
                </b>
                <td>3 %</td>
              </th>
            </tr>
            <tr>
              <th>
                <b>
                  Total Carbohydrate <span>333.2 g</span>
                </b>
                <td>111 %</td>
              </th>
            </tr>
            <tr>
              <th>
                Dietary Fiber <span>34.6 g</span>
                <td>138 %</td>
              </th>
            </tr>
            <tr>
              <th>
                Total Sugars <span>30.3 g</span>
                <td></td>
              </th>
            </tr>
            <tr>
              <th>
                <b>
                  Protein <span>71 g</span>
                </b>
                <td>142 %</td>
              </th>
            </tr>
          </table>
        </div>
      </main>
    </>
  );
}

export default Main;
