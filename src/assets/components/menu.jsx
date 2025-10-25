import Headers from "../templates/headers";
function Menu() {
    return (
        <>
            <Headers />
            <main className="h-[60vh] w-full flex flex-col items-center mt-5">
                <h1 className="font-bold text-3xl mb-4">Menu</h1>
                <div className="flex gap-5 items-center justify-center container-menu">
                    <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-amber-100 hover:text-[#fab12f] transition ease-in bg-[#fab12f] rounded text-white p-4 w-[10em] h-[7em] photos">
                          <i className="fa-solid fa-camera text-2xl"></i>
                          <p>Scan Your Food</p>
                    </div>
                    <div className="flex flex-col justify-center items-center cursor-pointer  hover:bg-amber-100 hover:text-[#fab12f] transition ease-in bg-[#fab12f] rounded text-white p-4 w-[10em] h-[7em] search">
                        <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                        <p className="text-center">Search Foods</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Menu;