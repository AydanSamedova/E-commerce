import React from "react";

export default function SideBar({click}) {
  const list = [
    { icon: "fa-solid fa-shirt", value: "Moda" },
    { icon: "fa-regular fa-chess-queen", value: "Kozmetik" },
    { icon: "fa-solid fa-shoe-prints", value: "Spor ve Outdoor" },
    { icon: "fa-solid fa-hat-cowboy-side", value: " Kisisel Bakim" },
    { icon: "fa-solid fa-kitchen-set", value: "Mutfak" },
    { icon: "fa-solid fa-gamepad", value: "Oyuncak" },
    { icon: "fa-solid fa-book", value: "Kitap" },
    { icon: "fa-solid fa-house", value: "Ev ve yasam" },
    { icon: "fa-solid fa-plug-circle-plus", value: " Elektronik" },
    { icon: "fa-solid fa-car", value: "Arac" },
  ];
  return (

      <div className=" bg-white py-3 px-2 rounded-md shadow-xl shadow-slate-300">
        <ul>
          {list.map((el) => {
            return (
              <div className="flex items-center text-black hover:text-[#FF0000]  px-3 py-4  w-full hover:bg-[#FAF3F3] transition-all "
              onClick={click}>
                <i className={el.icon} style={{marginRight:'2rem'}}  ></i>
                <li className="w-full text-base font-semibold">{el.value}</li>
                <i className="fa-solid fa-angle-right text-sm"></i>
              </div>
            );
          })}
        </ul>
      </div>

  );
}
