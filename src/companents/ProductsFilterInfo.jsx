import Dropdown from "../service/Dropdown";
import { useState } from "react";
import uniqid from "uniqid";

const keywords = ["Tümü", " Yeni gelenler", "İndirimler", "Çok satanlar"];
export default function ProductsFilterInfo() {
  const [active, setActive] = useState("Tümü");
  return (
    <div className="bg-white rounded-2xl flex px-4 py-3 justify-between items-center">
      <div className="flex items-center ">
        <i className="fa-solid fa-store text-[#A5A5A5] mx-2"></i>
        <h3 className="text-sm font-semibold">Ürün sayı : </h3>{" "}
        <span className="text-red text-sm font-semibold"> 23234</span>
      </div>
      <div className="w-[60%] flex ">
        {keywords.map((keyword) => {
          return (
            <div
              key={uniqid()}
              onClick={() => setActive(keyword)}
              className=" border-[1px] rounded-lg mx-1 border-[#C4C4C4B2] "
              style={
                active === keyword
                  ? { borderColor: "rgba(255, 0, 0, 1)" }
                  : null
              }
            >
              <h3
                className=" text-[#666666] text-sm font-normal w-32 text-center  py-3"
                style={
                  active === keyword ? { color: "rgba(255, 0, 0, 1)" } : null
                }
              >
                {keyword}
              </h3>
            </div>
          );
        })}
      </div>
      <Dropdown />
    </div>
  );
}
