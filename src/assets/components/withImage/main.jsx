import React, { useState } from "react";
import axios from "axios";

function MainImg() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  function handleClick() {
    if (image !== null) {
      console.log(image)
        axios.post("http://127.0.0.1:3000/image", {
          image: "test" 
        })
        .then(function (response) {
          console.log(response)
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }

  return (
    <>
      <div className="container-sImage flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center mt-2 w-120 h-50 bg-white rounded-3xl shadow-xl">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="inpImage"
            onChange={handleImageChange}
          />
          <label
            htmlFor="inpImage"
            className="flex flex-col items-center justify-center gap-2 space-y-3 w-[90%] h-[80%] border-2 rounded-[16px] border-dashed border-[#ddd] cursor-pointer font-medium text-sm "
          >
            <i className="fa-solid fa-image text-5xl"></i>
            <p>
              Drop Your Image Here, Or{" "}
              <span className="text-[#fab12f]">Browse</span>
            </p>
          </label>
        </div>
        <button className="bg-[#fab12f] text-white font-bold rounded-4xl py-[.5em] px-[2em] cursor-pointer transition ease-in scale-100 hover:bg-white hover:text-[#fab12f] hover:scale-95 mt-5" onClick={handleClick}>
          Done
        </button>
        {preview ? <img src={preview} alt="test" /> : null}
      </div>
    </>
  );
}

export default MainImg;
