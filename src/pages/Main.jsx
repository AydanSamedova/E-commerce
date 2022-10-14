import ProductsFilterInfo from "../companents/ProductsFilterInfo";
import Filter from "../companents/Filter";
import Products from "../companents/Products";


export default function Main() {
  return (
    <div className="w-full bg-[#CECECE] z-0">
      <div className="w-[80%] m-auto">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-lg font-semibold">Koton</h2>
          <div className="text-[#A5A5A5] flex items-center">
            <h3 className="font-normal">Ana Sayfa</h3>
            <i className="fa-solid fa-chevron-right  mx-2 text-[#53535380] text-[0.55rem]"></i>
            <h3 className="font-normal">Tum Butikler</h3>
            <i className="fa-solid fa-chevron-right  mx-2 text-[#53535380] text-[0.55rem] "></i>
            <h3 className="text-[#606060] font-normal">Koton</h3>
          </div>
        </div>
        <ProductsFilterInfo />
        <div className="flex py-3">
          <Filter />
          <Products  />
        </div>
      </div>
    </div>
  );
}
