import { useState } from "react";
import price from "../images/price.svg";


export default function SingleProduct({ image, discount, delivery }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="card mt-3 hover:shadow-white shadow-md ">
      <div className="rounded-md  relative">
        <div className=" absolute right-0  top-4 bg-white py-[0.10rem] px-2 rounded-bl-xl rounded-tl-xl">
          <i
            className="fa-solid fa-heart"
            style={active ? { color: "red" } : null}
            onClick={handleClick}
          ></i>
        </div>
        {delivery ? (
          <div className=" absolute uppercase text-center left-0 text-[10px] font-semibold  bottom-40 bg-red text-white py-[0.10rem] px-3 rounded-br-3xl">
            Hızlı <br /> Teslimat
          </div>
        ) : null}

        {discount ? (
          <div className="absolute  text-sm left-2 font-black  top-2 text-white ">
            <h3 className="absolute text-center py-1">50% indirim</h3>

            <img src={price} alt="" />
          </div>
        ) : null}

        <img
          src={image}
          alt="product"
          className="w-full h-full object-cover  rounded-md"
        />
        {/* card hover */}
        <div className="card-hover opacity-0">
          <div className="search absolute text-white opacity-50 top-1/4 left-20">
            <i className="fa-solid fa-magnifying-glass-plus  text-[3rem]"></i>
          </div>

          <div className="flex items-center justify-around top-52 bg-slate-50 opacity-80 absolute p-2 rounded-sm w-[90%] left-3">
            <span className="text-[#ACACAC] text-sm font-semibold">S</span>
            <span className="text-[#ACACAC] text-sm font-semibold">M</span>
            <span className="text-[#ACACAC] text-sm font-semibold">L</span>
            <span className="text-[#ACACAC] text-sm font-semibold">XL</span>
            <span className="text-[#ACACAC] text-sm font-semibold">XXL</span>
          </div>
        </div>
        <div className="bg-white rounded-b-md px-5 py-2">
          <h3 className="font-semibold text-normal">Lorem, ipsum dolor.</h3>
          <div className="stars my-1">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
          </div>
          <h3 className="text-xs font-base text-[#666666]">
            SUNY.P1FX Turkuaz Kız Çocuk Deniz...
          </h3>
          <div className="price my-1">
            <span className="line-through text-xs font-semibold text-[#A5A5A5] mr-1">
              99.99
            </span>
            <span className="font-bold text-[15sm] color-[#1A1A1A]">
              59.99 TL
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-[#F6E7D8] w-3 h-3 rounded-lg border-gray-400 border-[1px] mr-2"></span>
            <span className="bg-[#EFDBDB] w-2 h-2 rounded-lg border-gray-400 border-[1px]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
