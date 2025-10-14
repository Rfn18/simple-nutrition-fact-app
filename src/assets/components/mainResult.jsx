import { useState, useEffect } from "react";

function MainResult({ setNewFood, enterDown, addFood, handleUpdated, datas }) {
  const [ingr, setIngr] = useState();
  const [res, setRes] = useState([]);
  const [nuFact, setNuFact] = useState( );

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

  console.log(res)

  useEffect(() => {
    const factValue = res?.map((items) => {
      return {calories: items.nf_calories, fat: {total_fat: items.nf_total_fat, saturated_fat: items.nf_saturated_fat}, cholestrol: items.full_nutrients[64].value, sodium: items.nf_sodium, carbohidrate: {total_carbohidrate: items.nf_total_carbohydrate, dietary_fiber: items.nf_dietary_fiber, total_sugar: items.nf_sugars},protein: items.nf_protein};
    });
    
  const total = factValue?.reduce((acc, item) => {
    acc.calories += item.calories || 0;
    acc.fat.total_fat += item.fat?.total_fat || 0;
    acc.fat.saturated_fat += item.fat?.saturated_fat || 0;
    acc.cholestrol += item.cholestrol || 0;
    acc.sodium += item.sodium || 0;
    acc.carbohidrate.total_carbohidrate += item.carbohidrate?.total_carbohidrate || 0;
    acc.carbohidrate.dietary_fiber += item.carbohidrate?.dietary_fiber || 0;
    acc.carbohidrate.sugar += item.carbohidrate?.total_sugar || 0;
    acc.protein += item.protein || 0;
    return acc;
  }, { calories: 0, fat: {total_fat: 0, saturated_fat: 0}, cholestrol: 0, sodium: 0, carbohidrate: {total_carbohidrate: 0, dietary_fiber: 0, total_sugar: 0},protein: 0});

  console.log(total);
  }, [res]);

  return (
    <>
      <div className="flex when-result">
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
              onClick={() => (addFood(), handleUpdated())}
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
                <td>1774</td>
              </tr>
              <tr className="font-bold text-end thick-row">
                <td colSpan={2}>
                  <d className="text-[12px]">% Daily Value*</d>
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
                <th className="sub-nutrition">
                  Saturated Fat <span>2 g</span>
                </th>
                <td>10%</td>
              </tr>
              <tr>
                <th className="sub-nutrition">
                  Trans Fat <span>0 g</span>
                </th>
                <td></td>
              </tr>
              <tr>
                <th>
                  <b>
                    Cholesterol <span>0 mg</span>
                  </b>
                </th>
                <td>0 %</td>
              </tr>
              <tr>
                <th>
                  <b>
                    Sodium <span>70 mg</span>
                  </b>
                </th>
                <td>3 %</td>
              </tr>
              <tr>
                <th>
                  <b>
                    Total Carbohydrate <span>333.2 g</span>
                  </b>
                </th>
                <td>111 %</td>
              </tr>
              <tr>
                <th className="sub-nutrition">
                  Dietary Fiber <span>34.6 g</span>
                </th>
                <td>138 %</td>
              </tr>
              <tr>
                <th className="sub-nutrition">
                  Total Sugars <span>30.3 g</span>
                </th>
                <td></td>
              </tr>
              <tr>
                <th>
                  <b>
                    Protein <span>71 g</span>
                  </b>
                </th>
                <td>142 %</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Vitamin D<span>0 µg</span></th>
                <td>0%</td>
              </tr>
              <tr>
                <th>
                Calcium <span>179.8 mg</span>
                </th>
                <td>18%</td>
              </tr>
              <tr>
                <th>
                  Iron<span>13.8 mg</span>
                </th>
                <td>77%</td>
              </tr>
              <tr>
                <th>
                  Potassium <span>2203.2 mg</span>
                </th>
                <td>47%</td>
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
