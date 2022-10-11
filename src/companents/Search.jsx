import React from "react";

export default function Search() {
  return (
    <>
      <div className="input-group rounded-3xl flex items-center justify-between w-full py-1 px-3 bg-gray-50" style={{border:'1px solid rgba(196, 196, 196, 0.3)'}}>
        <div>      <i className="fa-solid fa-magnifying-glass text-base text-gray-400 mr-3"></i>
        <input
          type="search"
          className="form-control border-0 outline-0 bg-transparent"
          placeholder="Aradığınız hərşey burada"
        /></div>

        <button className="rounded-2xl font-xs bg-red  py-1 px-2  text-white font-semibold">

          Arama yap</button>
      </div>
    </>
  );
}
