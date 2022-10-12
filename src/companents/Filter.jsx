import uniqid from "uniqid";
const gender = [
  { item: "erkek", stock: 3 },
  { item: "kadin", stock: 41 },
  { item: "cocuk", stock: 23 },
];
const size = [
  { item: "S", stock: 3 },
  { item: "XS", stock: 23 },
  { item: "M", stock: 24 },
  { item: "L", stock: 25 },
  { item: "XL", stock: 7 },
];
const age = [
  { item: "3-6 AY", stock: 3 },
  { item: " 6-9 AY", stock: 7 },
  { item: " 9-12 AY", stock: 27 },
  { item: "18-24 AY", stock: 5 },
  { item: "2-3 Yaş ", stock: 9 },
];
const colors = [
  { item: "qirmizi", back: "red" },
  { item: "sari", back: "yellow" },
  { item: "siyah", back: "black" },
  { item: "beyaz", back: "white" },
  { item: "pembe", back: "pink" },
  { item: "Yesil", back: "green" },
  { item: "mavi", back: "blue" },
];
const price = [
  "0 TL - 20 TL",
  " 20 TL - 30 TL",
  " 30 TL - 50 TL",
  " 50 TL - 70 TL",
  " 70 TL - 125 TL",
  " 125 TL - 400 TL",
];
const categories = [
  { item: "kazak", stock: 3 },
  { item: "Pantolon", stock: 41 },
  { item: "Jean", stock: 32 },
  { item: "Kaban", stock: 17 },
  { item: "T-shirt", stock: 19 },
  { item: "Elbise", stock: 1 },
];

export default function Filter() {
  return (
    <div className="w-[20%] px-2">
      <div className="border-b-2 border-[#EDEDED] my-2 py-2">
        <h2 className="text-[#FF0000] text-base font-semibold my-1">
          Ilgili Kategoriler
        </h2>
        {categories.map((categorie) => {
          return (
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-normal my-1">{categorie.item}</h3>
              <span className="text-[#696969] text-sm font-normal">
                {categorie.stock}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-[#EDEDED] my-2 py-2">
        <h2 className="text-[#FF0000] text-base font-semibold my-1">
          Cinsiyet
        </h2>
        {gender.map((element) => {
          return (
            <div className="flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  className="border-[#D7D7D7] border-[1px] rounded-md  mr-3"
                />
                <h3 className="text-sm font-normal my-1">{element.item}</h3>
              </div>

              <span className="text-[#696969] text-sm font-normal">
                {element.stock}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-[#EDEDED] my-2 py-2">
        <h2 className="text-[#FF0000] text-base font-semibold my-1">Beden</h2>
        {size.map((element) => {
          return (
            <div className="flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  className="border-[#D7D7D7] border-[1px] rounded-md  mr-3"
                />
                <h3 className="text-sm font-normal my-1">{element.item}</h3>
              </div>

              <span className="text-[#696969] text-sm font-normal">
                {element.stock}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-[#EDEDED] my-2 py-2">
        <h2 className="text-[#FF0000] text-base font-semibold my-1">
          Yas Orani
        </h2>
        {age.map((element) => {
          return (
            <div className="flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  className="border-[#D7D7D7] border-[1px] rounded-md  mr-3"
                />
                <h3 className="text-sm font-normal my-1">{element.item}</h3>
              </div>

              <span className="text-[#696969] text-sm font-normal">
                {element.stock}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-[#EDEDED] my-2 py-2">
        <h2 className="text-[#FF0000] text-base font-semibold my-1">Renk</h2>
        {colors.map((categorie) => {
          return (
            <div className="flex items-center ">
              <span
                style={{ background: categorie.back }}
                className="w-4 h-4 rounded-md mr-3"
              ></span>
              <h3 className="text-sm font-normal my-1">{categorie.item}</h3>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-[#EDEDED] my-2 py-2">
        <h2 className="text-[#FF0000] text-base font-semibold my-1">
          Fiyat Araligi
        </h2>
        <div className="flex my-3">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[#A5A5A5] font-normal text-sm">
              Min TL
            </label>
            <input type="number" className="w-14 outline-0 border-[1px] border-[#E6E6E6]" />
          
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-[#A5A5A5] font-normal text-sm">
              Max TL
            </label>
            <input className="w-14 outline-0 border-[1px] border-[#E6E6E6]" type="number" />
          </div>
          <button className="bg-red text-white ml-3">
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {price.map((element) => {
          return (
            <div className="flex items-center ">
              <div className="flex">
                <input
                  type="checkbox"
                  className="border-[#D7D7D7] border-[1px] rounded-md  mr-3"
                />
              </div>

              <span className="text-sm font-normal">{element}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
