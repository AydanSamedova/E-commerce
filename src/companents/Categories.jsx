import { useState } from "react";
import uniqid from 'uniqid';
const keywords = [
  "Kadın",
  "Erkek",
  "Çocuk",
  "Ayakkabı & Çanta",
  "Saat & Aksesuar",
  "Spor & Outdoor",
  "Kitab & Hobi",
  "Oto & Bahçe",
  "Elektronik",
  "Süpermarket",
  "Süper Fırsatlar",
  "Kampanyalar",
  "İndirim",
  "Blog",
  "Markalar",
];

export default function Categories() {
    const [active, setActive] =useState("Kadın")
    const handleClick = (value) => {
		setActive(value);
	};
  return <div className="flex w-full py-3 px-5  items-center justify-between">
    <div className="border-[1px] border-slate-50 rounded-md mr-4" style={{boxShadow:'0px 3px 7px rgba(217, 7, 9, 0.2)'}} >
    <i className="fa-solid fa-bars text-red p-2"></i>
    </div>
    {keywords.map(keyword =>{
				return (
					<span
						key={uniqid()}
                        onClick={() => handleClick(keyword)}
                        className='text-base mx-1 font-semibold cursor-pointer'
						style={active === keyword ? {color:"rgba(255, 0, 0, 1)"} : {color:"black"}}
					>
						{keyword}
					</span>
				);})}
  </div>;
}
