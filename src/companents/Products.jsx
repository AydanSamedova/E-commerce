import SingleProduct from "./SingleProduct";
import uniqid from "uniqid";

export default function Products() {
  return (
    <div className="w-[80%] py-3 px-4">
      <div className="w-full flex ">
        <div className="flex items-center justify-evenly bg-white rounded-lg border-[1px] mx-1 px-4 border-[#BBBBBB]">
          <h3 className="text-black text-xs font-semibold text-center py-3">
            Kadin
          </h3>
          <i className="fa-solid fa-xmark mx-2 text-[#BBBBBB] text-sm "></i>
        </div>
        <div className="flex items-center justify-evenly bg-white rounded-lg border-[1px] mx-1 px-4 border-[#BBBBBB]">
          <h3 className="text-black text-xs font-semibold text-center py-3">
            Atlet
          </h3>
          <i className="fa-solid fa-xmark mx-2 text-[#BBBBBB] text-sm "></i>
        </div>
        <div className="flex items-center justify-evenly bg-white rounded-lg border-[1px] mx-1 px-4 border-[#BBBBBB]">
          <h3 className="text-black text-xs font-semibold text-center py-3">
          Bere
          </h3>
          <i className="fa-solid fa-xmark mx-2 text-[#BBBBBB] text-sm "></i>
        </div>
        <div className="flex items-center justify-evenly bg-white rounded-lg border-[1px] mx-1 px-4 border-[#BBBBBB]">
          <h3 className="text-black text-xs font-semibold text-center py-3">
          Bluz
          </h3>
          <i className="fa-solid fa-xmark mx-2 text-[#BBBBBB] text-sm "></i>
        </div>

      </div>

      <div className="w-full grid grid-cols-4 gap-4">
       
           
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
              <SingleProduct key={uniqid()} />
                <SingleProduct key={uniqid()} />
            
          

      
      </div>
    </div>
  );
}
