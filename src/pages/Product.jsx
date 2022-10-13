import image1 from "../images/products/Rectangle 292.jpg";
import image2 from "../images/products/Rectangle 293.jpg";
import image3 from "../images/products/Rectangle 93.jpg";
import img from "../images/products/400x600 - 1200x1800.jpg";
import imagedetail from "../images/products/Rectangle 333.jpg";
import imagedetail2 from "../images/products/Rectangle 336.jpg";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../service/Context";

const images = [image1, image2, image3];
const detailImage = [
  imagedetail,
  imagedetail2,
  imagedetail,
  imagedetail2,
  imagedetail,
  imagedetail2,
];
export default function Product() {
  const { cards } = useContext(Cards);
  const [active, setActive] = useState(false);
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  //console.log(id);

  useEffect(() => {
    if (id){
      cards?.map((o) => o?.id==id ?setProduct(o):null);
    }
  },[id]);

   //console.log(product);

  const handleChange = () => {
    setActive(!active);
  };
  return (
    <div className=" bg-[#cecece80] p-8">
      <div className="bg-white w-[80%] flex  m-auto p-6">
        <div className="flex">
          <div className="flex flex-col justify-center px-2">
            <button className="bg-white h-5 outline-0  shadow-md">
              <i className="fa-solid fa-angle-up"></i>
            </button>
            <div>
              {images.map((image, id) => {
                return (
                  <img
                    src={image}
                    alt="single"
                    className="cursor-pointer"
                    key={id}
                  />
                );
              })}
            </div>
            <button className="bg-white h-5 outline-0 shadow-md">
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>

          <div className="singleimage mx-2 cursor-pointer">
            <img src={product.image} alt="single " className="h-full object-cover w-full" />
          </div>
        </div>
        <div className="w-full px-2">
          <div className="cardinfo">
            <div className="flex">
              <h3 className="text-xl font-semibold underline mr-[5px]">
                {" "}
                Koton{" "}
              </h3>
              <h3 className="text-xl font-base cursor-pointer">
                Kadın Antrasit Kaban 0KAK0 6697EW
              </h3>
            </div>

            <span className="text-[#A5A5A5] text-xs font-semibold">
              Satici:{" "}
            </span>
            <span className="text-xs font-semibold">Koton</span>
            <span className="bg-green-500 rounded-md text-white px-2 mx-1 text-xs">
              9.5
            </span>
            <div className="stars">
              <span className="text-[#1A1A1A] text-sm font-semibold mr-1">
                4.5
              </span>

              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
            </div>
            <div className="price my-1">
              <span className="line-through text-lg font-normal text-[#A5A5A5] mr-1">
                99.99
              </span>
              <span className="font-black text-lg text-[#FF0000]">
                59.99 TL
              </span>
            </div>
          </div>

          <div>
            <div
              className="grid gap-3  my-3"
              style={{ gridTemplateColumns: "6fr 1fr 1fr" }}
            >
              <div className="images border rounded-md h-full px-3 py-2">
                {" "}
                <h3 className="text-sm font-semibold my-2">Renk</h3>
                <div className="flex">
                  {detailImage.map((img, id) => {
                    return (
                      <img
                        src={img}
                        alt="clothes"
                        className="mr-3 rounded-md cursor-pointer"
                        key={id}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="border rounded-md flex items-center justify-center flex-col">
                <i className="fa-solid fa-cart-flatbed text-3xl text-orange-600"></i>
                <h4 className="text-sm font-semibold text-[#477294] text-center">
                  Kargo <br /> Bedava
                </h4>
              </div>
              <div className="border rounded-md flex items-center justify-center flex-col">
                <i className="fa-solid fa-ticket text-3xl text-orange-600"></i>
                <h4 className="text-sm font-semibold text-[#477294] text-center">
                  40% <br /> indirim
                </h4>
              </div>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-3 ">
            <div className="flex items-center w-full justify-between my-1 px-1">
              <h3 className="text-sm font-semibold">Beden</h3>
              <h6 className="text-[#A6A6A6] text-xs px-1">Beden tablosu</h6>
            </div>
            <h3 className="text-sm font-semibold">Adet</h3>
          </div>

          <div
            className="grid gap-3 grid-cols-3 "
            style={{ gridTemplateColumns: "6fr 1fr 1fr" }}
          >
            <div className="flex  h-full items-center justify-between ">
              <div className="flex flex-col w-[43%] ">
                <div>
                  <select className="w-full border rounded-md  outline-0 p-2">
                    <option
                      selected="selected"
                      className="font-normal text-base text-[#A6A6A6]"
                    >
                      Beden seciniz
                    </option>
                    <option
                      className="font-normal text-base text-[#A6A6A6]"
                      value="S"
                    >
                      S
                    </option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="L">XL</option>
                  </select>
                </div>
              </div>
              <div>
                <button className="bg-white rounded-tl-sm rounded-bl-sm  border-[1px] border-[#E6E6E6] py-2 px-3">
                  -
                </button>

                <input
                  type="number"
                  value="1"
                  className="outline-0 text-center border-[#E6E6E6] border-[1px] bg-[#E6E6E6] py-2"
                />
                <button className="bg-white rounded-tr-sm rounded-br-sm border-[1px] border-[#E6E6E6] py-2 px-3">
                  +
                </button>

                <div></div>
              </div>
            </div>
            <div className="border rounded-md  items-center justify-center flex p-2">
              <i className="fa-regular fa-bell text-2xl text-gray-500 cursor-pointer"></i>
            </div>
            <div className="border rounded-md items-center justify-center flex p-2">
              <i className="fa-regular fa-heart text-2xl text-gray-500 cursor-pointer"></i>
            </div>
          </div>
          <div
            className="grid gap-3 grid-cols-3 "
            style={{ gridTemplateColumns: "6fr 1fr 1fr" }}
          >
            <div>
              <span className="text-[#A5A5A5] text-xs font-semibold">
                Tahmini Teslimat:
              </span>{" "}
              <span className="text-xs font-semibold"> 12 - 26 Haziran</span>
            </div>
            <div>
              <h3 className="text-[#1A1A1A] text-xs text-center font-semibold">
                {" "}
                Fiyat Alarmi
              </h3>
            </div>
            <div className="text-[#1A1A1A] text-xs text-center font-semibold flex">
              <h3 className="text-[#A5A5A5]">Favori:</h3> <span>1923</span>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-3 my-3">
            <button className="bg-[#0BC15C] rounded-2xl text-white text-base font-semibold py-2 cursor-pointer">
              Hemen Al
            </button>
            <button
              onClick={handleChange}
              className="flex items-center justify-center text-white text-base font-semibold rounded-2xl w-full py-2 cursor-pointer"
              style={
                active ? { background: "#0BC15C" } : { background: "#FF0000" }
              }
            >
              <i
                className="fa-solid fa-check mx-1"
                style={active ? { display: "block" } : { display: "none" }}
              ></i>
              {active ? "Sepetde !" : "Sepete ekle"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
