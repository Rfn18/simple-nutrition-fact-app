function Header() {
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-2 text-[#102E50]">
        <h1 className="font-[Poppins] font-bold text-3xl text-center ">
          Nutrition Analysis API
        </h1>
        <p className="text-center">
          Enter an ingredient list list for what you are cooking, like
          <span className="text-amber-500">"1 cup rice, 10 oz chickpeas"</span>,
          etc. <br /> Enter each ingredient on a new line.
        </p>
      </header>
    </>
  );
}

export default Header;
