import Search from "./Search";
import flag from "../images/turkey-flag-icon.svg";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className="w-full py-3 px-5 border-b-2 border-gray-50 ">
      <div className="flex items-center ">
        <Link to="/" className="text-4xl text-red font-extrabold w-32 cursor-pointer">
          LOGO
        </Link>
        <div className="flex items-center ">
          <span className="text-sm  mx-6  cursor-pointer">Mağazanı yarat</span>
          <span className="text-sm cursor-pointer">Yardım</span>
          <div className="flex items-center text-sm mx-10">
            <img src={flag} alt="" className="w-5 h-5 mx-1" />
            <span>Istanbul</span>
            <span className="border-x-2 px-1 mx-1">TR</span>
            <div className="flex items-center cursor-pointer">
              <span>TRY </span>
              <i
                className="fa-solid fa-chevron-down mx-1 text-[0.55rem]"
              
              ></i>
            </div>
          </div>
        </div>

        <div className="w-[35%]">
          <Search />
        </div>

        <div className="flex mx-9">
          <div className="flex flex-col items-center relative cursor-pointer">
            <i className="fa-solid fa-box text-gray-300 text-xl"></i>
            <h3 className="text-sm">Siparislerim</h3>
          </div>
          <div className="flex flex-col items-center relative cursor-pointer mx-8">
            <i className="fa-solid fa-heart text-gray-300 text-xl"></i>
            <h3 className="text-sm">Favorilerim</h3>
          </div>
          <div className="flex flex-col items-center relative cursor-pointer">
            <i className="fa-solid fa-basket-shopping text-gray-300 text-xl"></i>{" "}
            <h3 className="text-sm">Sepetim</h3>
            <span className="bg-red text-white w-4 h-4 rounded-lg font-xs absolute right-0">
              <h6 className="text-xs text-center">2</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
