import { useState, useEffect } from "react";

function MainResult({ setNewFood, enterDown, addFood, handleUpdated, datas, setDatas }) {
  const [ingr, setIngr] = useState();
  const [res, setRes] = useState([]);
  const [nuFact, setNuFact] = useState();
  const [percentDailyValue, setPercentDailyValue] = useState();

  useEffect(() => {
    if (datas.lenght >= 1) return;
    const foods = datas.map((items) => {
      return items.foods;
    });
    setIngr(foods);
  }, [datas]);

  useEffect(() => {
    const foods = ingr?.map((items) => {
      return items[0];
    });
    setRes(foods);
  }, [ingr]);

  useEffect(() => {
    const factValue = res?.map((items) => {
      return {
        calories: items.nf_calories,
        fat: {
          total_fat: items.nf_total_fat,
          saturated_fat: items.nf_saturated_fat,
          trans_fat: items.full_nutrients[83].value || 0,
        },
        cholestrol: items.nf_cholesterol,
        sodium: items.nf_sodium,
        carbohidrate: {
          total_carbohidrate: items.nf_total_carbohydrate,
          dietary_fiber: items.nf_dietary_fiber,
          total_sugar: items.nf_sugars,
        },
        protein: items.nf_protein,
        vitD: items.full_nutrients[20].value || 0,
        calsium: items.full_nutrients[18].value || 0,
      };
    });

    const total = factValue?.reduce(
      (acc, item) => {
        acc.calories += item.calories || 0;
        acc.fat.total_fat += item.fat?.total_fat || 0;
        acc.fat.saturated_fat += item.fat?.saturated_fat || 0;
        acc.fat.trans_fat += item.fat?.trans_fat || 0;
        acc.cholestrol += item.cholestrol || 0;
        acc.sodium += item.sodium || 0;
        acc.carbohidrate.total_carbohidrate +=
          item.carbohidrate?.total_carbohidrate || 0;
        acc.carbohidrate.dietary_fiber += item.carbohidrate?.dietary_fiber || 0;
        acc.carbohidrate.total_sugar += item.carbohidrate?.total_sugar || 0;
        acc.protein += item.protein || 0;
        acc.vitD += item.vitD || 0;
        acc.calsium += item.calsium || 0;
        return acc;
      },
      {
        calories: 0,
        fat: { total_fat: 0, saturated_fat: 0, trans_fat: 0 },
        cholestrol: 0,
        sodium: 0,
        carbohidrate: {
          total_carbohidrate: 0,
          dietary_fiber: 0,
          total_sugar: 0,
        },
        protein: 0,
        vitD: 0,
        calsium: 0,
      }
    );

    const totalPercentProtein = (total?.protein / 50) * 100;
    const totalPercentFat = (total?.fat.total_fat / 78) * 100;
    const totalPercentSaturatedFat = (total?.fat.saturated_fat / 20) * 100;
    const totalPercentCholesterol = (total?.cholestrol / 300) * 100;
    const totalPercentCarbohydrate =
      (total?.carbohidrate.total_carbohidrate / 275) * 100;
    const totalPercentDietaryFiber =
      (total?.carbohidrate.dietary_fiber / 28) * 100;
    const totalPercentSugar = (total?.carbohidrate.total_sugar / 50) * 100;
    const totalPercentSodium = (total?.sodium / 2300) * 100;
    const totalPercentCalcium = (total?.calsium / 1300) * 100;
    const totalPercentVitD = (total?.vitD / 20) * 100;

    const percentValue = {
      protein: Math.floor(totalPercentProtein),
      total_fat: Math.floor(totalPercentFat),
      saturated_fat: Math.floor(totalPercentSaturatedFat),
      cholesterol: Math.floor(totalPercentCholesterol),
      carbohydrate: Math.floor(totalPercentCarbohydrate),
      dietary_fiber: Math.floor(totalPercentDietaryFiber),
      total_sugar: Math.floor(totalPercentSugar),
      sodium: Math.floor(totalPercentSodium),
      calcium: Math.floor(totalPercentCalcium),
      vitamin_D: Math.floor(totalPercentVitD),
    };

    setNuFact(total);
    setPercentDailyValue(percentValue);
  }, [res]);

  return (
    <>
      <div className="flex items-start when-result">
        <div className="flex flex-col justify-center items-center gap-5 w-2xl containerItems">
          <textarea
            name="inputArea"
            id="inpText"
            className="w-[80%] h-[40dvh] border-2 border-[#ddd] bg-white rounded-md focus:outline-0 p-3 text-md "
            onChange={(e) => setNewFood(e.target.value)}
            onKeyDown={enterDown}
            placeholder={`1 cup rice,\n10 oz chickpeas`}
            required
          ></textarea>
          <div className="flex gap-3 container-button">
            <button
              className="bg-[#fab12f] text-white font-bold text-sm rounded-4xl py-[.5em] px-[20px] w-30 cursor-pointer transition ease-in scale-100 hover:bg-white hover:text-[#fab12f] hover:scale-95 btnAnalyze"
              onClick={() => (addFood(), handleUpdated())}
            >
              Analyze
            </button>
            <button className="bg-[#fab12f] text-white font-bold text-sm rounded-4xl py-[.5em] px-[20px] w-30 cursor-pointer transition ease-in scale-100 hover:bg-white hover:text-[#fab12f] hover:scale-95 btnAnalyze"
              onClick={() => (setDatas([]))}
            >
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
                {Array.isArray(res) &&
                  res.map((items, i) => (
                    <tr key={i}>
                      <td>{items.serving_qty}</td>
                      <td>{items.serving_unit}</td>
                      <td>{items.food_name}</td>
                      <td>{items.nf_calories}</td>
                      <td>{items.serving_weight_grams} g</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-85 bg-white p-5 container-card-nutrition rounded-2xl">
          <h1 className="text-3xl font-bold text-center mt-5 mb-3 pb-3 border-b-10 border-[#eaeaeaea]">
            Nutrition Facts
          </h1>
          <table>
            <thead>
              <th>Amount Per Serving</th>
            </thead>
            <tbody>
              <tr className="font-bold border-b-5 border-[#eaeaeaea] calories-padding">
                <th>
                  <b>Calories</b>
                </th>
                <td>{Number(nuFact?.calories.toFixed(1))}</td>
              </tr>
              <tr className="font-bold text-end thick-row">
                <td colSpan={2}>
                  <d className="text-[12px]">% Daily Value*</d>
                </td>
              </tr>
              <tr>
                <th>
                  <b>
                    Total Fat <span>{Number(nuFact?.fat.total_fat.toFixed(1))} g</span>
                  </b>
                </th>
                <td>{percentDailyValue?.total_fat}%</td>
              </tr>
              <tr>
                <th className="sub-nutrition">
                  Saturated Fat <span>{Number(nuFact?.fat.saturated_fat?.toFixed(1))} g</span>
                </th>
                <td>{percentDailyValue?.saturated_fat}%</td>
              </tr>
              <tr>
                <th className="sub-nutrition">
                  Trans Fat <span>{nuFact?.fat.trans_fat} g</span>
                </th>
                <td></td>
              </tr>
              <tr>
                <th>
                  <b>
                    Cholesterol <span>{Number(nuFact?.cholestrol?.toFixed(1))} mg</span>
                  </b>
                </th>
                <td>{percentDailyValue?.cholesterol}%</td>
              </tr>
              <tr>
                <th>
                  <b>
                    Sodium <span>{Number(nuFact?.sodium.toFixed(1))} mg</span>
                  </b>
                </th>
                <td>{percentDailyValue?.sodium}%</td>
              </tr>
              <tr>
                <th>
                  <b>
                    Total Carbohydrate <span>{Number(nuFact?.carbohidrate.total_carbohidrate.toFixed(1))} g</span>
                  </b>
                </th>
                <td>{percentDailyValue?.carbohydrate}%</td>
              </tr>
              <tr>
                <th className="sub-nutrition">
                  Dietary Fiber <span>{Number(nuFact?.carbohidrate.dietary_fiber?.toFixed(1))} g</span>
                </th>
                <td>{percentDailyValue?.dietary_fiber}%</td>
              </tr>
              <tr>
                <th className="sub-nutrition">
                  Total Sugars <span>{Number(nuFact?.carbohidrate.total_sugar?.toFixed(1))} g</span>
                </th>
                <td>{percentDailyValue?.total_sugar}%</td>
              </tr>
              <tr>
                <th>
                  <b>
                    Protein <span>{Number(nuFact?.protein.toFixed(1))} g</span>
                  </b>
                </th>
                <td>{percentDailyValue?.protein}%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>
                  Vitamin D <span>{Number(nuFact?.vitD.toFixed(1))} µg</span>
                </th>
                <td>{percentDailyValue?.vitamin_D}%</td>
              </tr>
              <tr>
                <th>
                  Calcium <span>{Number(nuFact?.calsium?.toFixed(1))} mg</span>
                </th>
                <td>{percentDailyValue?.calcium}%</td>
              </tr>
              <tr>
                <td className="persentInfo" colSpan={2}>
                  *Percent Daily Values are based on a 2000 calorie diet
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default MainResult;
