function Headers() {
    return (
        <>
        <header className="flex flex-col items-center justify-around w-screen shadow-md text-[#102E50] text-2xl font-bold py-4">   
            <div className="grid grid-cols-3 justify-items-center w-[80%] border-b-1 border-[#ddd] pb-2">
                <div className="icon flex items-center gap-2 text-xl">
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
                <h1 >Nutrition Anayisis API</h1>
                <div className="form bg-[#eaeaea] text-sm w-45 flex items-center py-2 px-3 rounded-2xl">
                    <input type="text" className="w-full focus:outline-0 font-medium" placeholder="Im searching for..."/>
                    <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                </div>
            </div>
            <div className="container-menu flex gap-10 font-medium text-[16px] mt-2">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Profile</p>
            </div>
        </header>
        </>
    )
}

export default Headers