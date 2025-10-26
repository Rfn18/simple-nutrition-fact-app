import { useEffect, useState } from "react"

function Headers() {
    const [value, setValue] = useState("");

    function handleOption(values) {
        setValue(values)
    }

    console.log(value)

    useEffect(() => {
        const op1 = document.getElementById("option1")
        const op2 = document.getElementById("option2")

        if (value == 1) {
            op1.classList.add("bg-amber-300" ,"text-white")
            op2.classList.remove("bg-amber-300" ,"text-white")
        } else if (value == 2) {
            op2.classList.add("bg-amber-300","text-white")
            op1.classList.remove("bg-amber-300" ,"text-white")
        }
    })
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
                <p className="cursor-pointer hover:bg-[#fab12f] hover:text-white py-1 px-2 rounded-3xl transition ease-in" id="option1" onClick={() => handleOption(1)}>Input Your Foods</p>
                <p className="cursor-pointer hover:bg-[#fab12f] hover:text-white py-1 px-2 rounded-3xl transition ease-in" id="option2" onClick={() => handleOption(2)}>Search With Image</p>
            </div>
        </header>
        </>
    )
}

export default Headers