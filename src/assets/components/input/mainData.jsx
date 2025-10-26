function MainData({ setNewFood, enterDown, addFood, handleUpdated }) {
  return (
    <>
      <textarea
        name="inputArea"
        id="inpText"
        className="w-[40%] h-[40dvh] border-2 border-[#eaeaea] bg-white rounded-md focus:outline-0 p-3 text-md "
        onChange={(e) => setNewFood(e.target.value)}
        onKeyDown={enterDown}
        placeholder={`1 cup rice,\n10 oz chickpeas`}
        required
      ></textarea>
      <button
        className="bg-[#fab12f] text-white font-bold rounded-4xl py-[.5em] px-[2em] cursor-pointer transition ease-in scale-100 hover:bg-white hover:text-[#fab12f] hover:scale-95 btnAnalyze"
        onClick={() => (addFood(), handleUpdated())}
      >
        Analyze
      </button>
    </>
  );
}

export default MainData;
