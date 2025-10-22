function Headers() {
    return (
        <>
        <header className="flex items-center justify-around w-screen bg-[#515a79] text-white font-bold p-5">   
            <div className="flex container-logo items-center gap-2">
                <i className="fa-solid fa-camera text-2xl"></i>
                <h1 >Ai Nutrition Analysis</h1>
            </div>
            <div className="flex items-center container-profile gap-1">
                <p className="text-[12px]">Follow us</p>
                <a href="#" > <i class="fa-brands fa-tiktok text-2xl"></i></a>
                <a href="#"><i class="fa-brands fa-instagram text-2xl"></i></a>
                <a href="#"><i class="fa-solid fa-envelope text-2xl"></i></a>
            </div>
        </header>
        </>
    )
}

export default Headers