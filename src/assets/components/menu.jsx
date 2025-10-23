import Headers from "../templates/headers";
function Menu() {
    return (
        <>
            <Headers />
            <main className="h-[60vh] w-full flex flex-col items-center mt-10">
                <h1 className="font-bold text-3xl ">Menu</h1>
                <div className="flex gap-5 items-center justify-center container-menu">
                    <div className="flex flex-col items-center photos">
                          <i className="fa-solid fa-camera text-2xl"></i>
                          <p>Scan Your Food</p>
                    </div>
                    <div className="flex flex-col items-center search">
                        <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                        <p>Search Foods Nutrition</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Menu;