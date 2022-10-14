import image from "../images/products/Rectangle 114.jpg";
import image1 from "../images/products/Rectangle 114 (1).jpg";
import image2 from "../images/products/Rectangle 114 (2).jpg";
import image3 from "../images/products/Rectangle 114 (3).jpg";
import image4 from "../images/products/Rectangle 114 (4).jpg";
import image5 from "../images/products/Rectangle 114 (5).jpg";
import { useState } from "react";
import { Link } from "react-router-dom";


const images = [image, image1, image2, image3, image4, image5];
export default function Basket() {
  const [value, setValue] = useState(1);
  const [active, setActive] = useState(true);
  const closeClick = () => {
    setActive(!active);
  };
  const increase = () => {
    setValue((count) => count + 1);
  };
  const decrease = () => {
    setValue((count) => count - 1);
  };
  return (
    <>
      {active ? (
        <div className="absolute z-10 right-0  top-[4.50rem] w-72 border bg-white ">
          <div className="flex item-center justify-between shadow-sm p-4 ">
            <div className="flex font-semibold text-base">
              <h2 className="text-[#666666] mr-1">ÜRÜN SAYI: </h2>{" "}
              <span>6</span>
            </div>
            <div>
              {" "}
              <i className="fa-solid fa-xmark" onClick={closeClick}></i>
            </div>
          </div>
          {images.map((img, idx) => {
            return (
              <div className="flex m-4 border-b pb-3" key={idx}>
                <div className="w-1/2 border">
                  <img
                    src={img}
                    alt="images"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="info px-4 ">
                  <div className="flex justify-between">
                    <h2 className="text-[#3E3E3E] font-semibold text-xs">
                      Tonny Black
                    </h2>
                    <i className="fa-solid fa-xmark text-[#CECECE] "></i>
                  </div>

                  <h3 className="text-xs font-normal text-[#666666] my-1">
                    Beyaz Cilt Kadın Sneaker BLS-Q-1
                  </h3>
                  <span className="text-red font-bold text-sm ">110,49 TL</span>
                  <div className="flex my-1">
                    <button
                      onClick={decrease}
                      className="border rounded-bl-md rounded-tl-md px-2  text-2xl text-[#A6A6A6] font-normal"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={value}
                      className="text-center text-sm border-[#E6E6E6] outline-0 border bg-[#E6E6E6] w-1/4"
                    />
                    <button
                      onClick={increase}
                      className="border  rounded-tr-md rounded-br-md px-2  text-2xl text-[#A6A6A6] font-normal"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-white z-100 w-full absolute border-b border-t bottom-28 p-3">
            <div className="flex justify-between my-3">
              <h2 className="text-[#666666] text-lg font-bold uppercase">Toplam:</h2>
              <h3 className="text-red  black font-black text-2xl">498,42TL</h3>
            </div>
            <Link to={"/product/1"}>
              <button className="w-full bg-red text-white rounded-md text-lg font-bold py-1">Sepete git</button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
