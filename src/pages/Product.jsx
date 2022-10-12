import image1 from "../images/products/Rectangle 292.jpg";
import image2 from "../images/products/Rectangle 293.jpg";
import image3 from "../images/products/Rectangle 93.jpg";
import img from "../images/products/Rectangle 364 (1).jpg";
import imagedetail from '../images/products/Rectangle 333.jpg';
import imagedetail2 from '../images/products/Rectangle 336.jpg';

const images = [image1, image2, image3];
const detailImage=[imagedetail, imagedetail2, imagedetail, imagedetail2, imagedetail, imagedetail2]
export default function Product() {
  return (
    <div className="w-full bg-[#cecece80] ">
      <div className="bg-white w-[80%] flex  m-auto p-3">
        <div className="flex">
          <div className="bg-white h-5"></div>
          <div>
            {images.map((image) => {
              return <img src={image} alt="" />;
            })}
          </div>
          <div className="bg-white h-5"></div>
          <div className="image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="w-full">
          <div className="cardinfo">
            <div className="flex">
              <h3 className="text-xl font-semibold"> Koton</h3>
              <h3 className="text-xl font-base">
                Kadın Antrasit Kaban 0KAK0 6697EW
              </h3>
            </div>

            <span className="text-[#A5A5A5] text-xs font-semibold">
              Satici:{" "}
            </span>
            <span className="text-xs font-semibold">Koton</span>
            <span className="bg-green-500 rounded-md text-white px-1 text-xs">
              9.5
            </span>
            <div className="stars">
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </div>
            <div className="price my-1">
              <span className="line-through text-lg font-normal text-[#A5A5A5] mr-1">
                99.99
              </span>
              <span className="font-black text-lg text-[#FF0000]">
                59.99 TL
              </span>
            </div>

            <div>
              <div className="flex">
                <div className="w-[60%] border p-3">
                  <h3 className="text-sm font-semibold">Renk</h3>
                  <div className="flex">
                    {detailImage.map(img=>{return(
                         <img src={img} alt="" />
                    )})}
                   
                  </div>
                </div>
                <div className="w-[40%] ">
                  <div className="border">
                  <i class="fa-solid fa-cart-flatbed"></i>
                    <h4>Kargo Bedava</h4>
                  </div>
                  <div  className="border">
                  <i class="fa-solid fa-ticket"></i>
                    <h4>40% indirim</h4>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-[60%]">
                  <div className="flex column">
                    <div>
                    <div className="flex items-center">
                      <h3 className="text-sm font-semibold">Beden</h3>
                      <h6 className="text-[#A6A6A6] text-xs">Beden tablosu</h6>
                    </div>
                    <select className="border-[#CECECE] border-[1px] rounded-md py-2 w-[50%]">
                      <option selected="selected" value="volvo">
                        Beden seciniz
                      </option>
                      <option value="saab">S</option>
                      <option value="opel">M</option>
                      <option value="audi">L</option>
                    </select>
                    <span>Tahmini Teslimat:</span> <span> 12 - 26 Haziran</span>
                    </div>
                    <button>Hemen Al</button>
                  </div>

                  <div>
                    <div>
                      <button>-</button>
                      <input type="number" name="" id="" />
                      <button>+</button>
                    </div>

                    <button>Sepete Ekle</button>
                  </div>
                </div>
                <div className="w-[40%]">
                  <div>icon</div>
                  <div>icon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
