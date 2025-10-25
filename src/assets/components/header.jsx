function Header() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-2 text-[#102E50]">
        <p className="text-center text-sm w-screen px-5 sm:text-[16px] sm:w-full">
          Enter an ingredient list list for what you are cooking, like
          <span className="text-amber-500">"1 cup rice, 10 oz chickpeas"</span>,
          etc. <br /> Enter each ingredient on a new line.
        </p>
      </section>
    </>
  );
}

export default Header;
