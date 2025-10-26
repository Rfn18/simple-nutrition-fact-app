import React, { useState } from "react";

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
        <button className="bg-[#fab12f] text-md font-bold py-1 px-20 rounded-4xl text-white z-1 mt-4 cursor-pointer">
          Done
        </button>
        {preview ? <img src={preview} alt="test" /> : null}
      </div>
    </>
  );
}

export default MainImg;
