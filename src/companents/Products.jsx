import SingleProduct from "./SingleProduct";
import {useContext} from 'react';
import {Cards} from '../service/Context';



const selected = [" Kadin", "Atlet", "Bare", " Bluz"];


export default function Products() {
  const {cards} = useContext(Cards)
  
  return (

    <div className="w-[80%] py-3 px-4">
      <div className="w-full flex ">
        {selected.map((select, id) => {
          return (
            <div className="flex items-center justify-evenly bg-white rounded-lg border-[1px] mx-1 px-4 border-[#BBBBBB]">
              <h3 className="text-black text-xs font-semibold text-center py-3" key={id}>
                {select}
              </h3>
              <i className="fa-solid fa-xmark mx-2 text-[#BBBBBB] text-sm "></i>
            </div>
          );
        })}
      </div>

      <div className="w-full grid grid-cols-4 gap-4">
        {cards?.map((card) => {
          return (
            <>
             
                <SingleProduct
                  image={card.image}
                  discount={card.discount}
                  delivery={card.delivery}
                 id={card.id}
                 card={card}
                />
            
            </>
          );
        })}
      </div>
    </div>
  );
}
