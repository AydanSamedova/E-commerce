import tshirt from "../images/hmtshirt 1.png";
import HM from "../images/Vector.png";
import off from "../images/OFF.png";
import image30 from "../images/30.png";
import image from "../images/%.png";
import { Link } from "react-router-dom";

const btns = ["Kadın", "Erkek", "Çocuk"];
const titles = [
  "Giyim",
  "Spor & Outdoor",
  "Ayakkabı",
  "Aksesuar & Canta",
  "Kisisel & Kozmetik",
  "Luks & Designer",
  "Ic Giyim",
  "Kazak & Hirka",
];
export default function Navigation() {
  return (
    <div className="bg-white ml-4">
      <div className="grid grid-cols-5 px-4">
        {btns.map((btn) => {
          return (
            <button className="text-base font-semibold  text-red hover:text-white bg-white hover:bg-[#FF0000] border border-[#FF0000] hover:border-0 text-red rounded-md py-2 mr-5 transition-all">
              {btn}
            </button>
          );
        })}
      </div>
      <div className="flex  p-6   ">
        <div className="w-full grid grid-cols-4 gap-4">
          {titles.map((title) => {
            return (
              <div>
                <h2 className="font-semibold text-xl">{title}</h2>
                <ul>
                  <li className="text-[#000000B2] hover:text-[#FF0000]  font-normal text-base my-1 transition-all">
                    <Link> Lorem, ipsum.</Link>
                  </li>
                  <li className="text-[#000000B2] hover:text-[#FF0000] font-normal text-base my-1 transition-all">
                    <Link> Lorem, ipsum.</Link>
                  </li>
                  <li className="text-[#000000B2] hover:text-[#FF0000] font-normal text-base my-1 transition-all">
                    <Link> Lorem, ipsum.</Link>
                  </li>
                  <li className="text-[#000000B2] hover:text-[#FF0000] font-normal text-base my-1 transition-all">
                    <Link> Lorem, ipsum.</Link>
                  </li>
                  <li className="text-[#000000B2] hover:text-[#FF0000] font-normal text-base my-1 transition-all">
                    <Link> Lorem, ipsum.</Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div
          className=" w-[30%]   relative rounded-md mx-5"
          style={{
            background: "linear-gradient(90deg, #fd2b2b 0%, #ffa8a8 100%)",
          }}
        >
          <img src={tshirt} alt="menuImage" />
          <img src={HM} alt="hm" className="absolute top-2 left-10" />
          <img
            src={image30}
            alt="30"
            className="absolute bottom-[5.50rem] w-[80%] left-3"
          />
          <img src={off} alt="off" className="absolute bottom-0 " />
          <img
            src={image}
            alt="images"
            className="absolute bottom-20 right-0"
          />
        </div>
      </div>
    </div>
  );
}
