import SingleProduct from "./SingleProduct";
import uniqid from "uniqid";
import image from '../images/products/Rectangle 364 (13).jpg'
import image1 from "../images/products/Rectangle 364 (1).jpg";
import image2 from "../images/products/Rectangle 364 (2).jpg";
import image3 from "../images/products/Rectangle 364 (3).jpg";
import image4 from "../images/products/Rectangle 364 (4).jpg";
import image5 from "../images/products/Rectangle 364 (5).jpg";
import image6 from "../images/products/Rectangle 364 (6).jpg";
import image7 from "../images/products/Rectangle 364 (7).jpg";
import image9 from "../images/products/Rectangle 364 (9).jpg";
import image10 from "../images/products/Rectangle 364 (10).jpg";
import image11 from "../images/products/Rectangle 364 (11).jpg";
import image12 from "../images/products/Rectangle 364.png";

const selected = [" Kadin", "Atlet", "Bare", " Bluz"];

const images = [
  { image: image1, discount: true , delivery:true},
  { image: image2, discount: false ,delivery:true},
  { image: image3, discount: true ,delivery:true},
  { image: image4, discount: true ,delivery:false},
  { image: image5, discount: false ,delivery:true},
  { image: image6, discount: false ,delivery:false},
  { image: image7, discount: true ,delivery:true},
  { image: image, discount: false ,delivery:false},
  { image: image9, discount: false ,delivery:false},
  { image: image10, discount: false ,delivery:false},
  { image: image11, discount: false ,delivery:false},
  { image: image12, discount: false ,delivery:false},
];
export default function Products() {
  return (
    <div className="w-[80%] py-3 px-4">
      <div className="w-full flex ">
        {selected.map((select) => {
          return (
            <div className="flex items-center justify-evenly bg-white rounded-lg border-[1px] mx-1 px-4 border-[#BBBBBB]">
              <h3 className="text-black text-xs font-semibold text-center py-3">
                {select}
              </h3>
              <i className="fa-solid fa-xmark mx-2 text-[#BBBBBB] text-sm "></i>
            </div>
          );
        })}
      </div>

      <div className="w-full grid grid-cols-4 gap-4">
        {images.map((card) => {
          return <SingleProduct image={card.image} discount={card.discount} delivery={card.delivery} key={uniqid()} />;
        })}
      </div>
    </div>
  );
}
