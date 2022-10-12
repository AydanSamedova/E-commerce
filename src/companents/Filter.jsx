
import uniqid from "uniqid";

const options = [
  {
    label: "Ilgili Kategoriler",
  },
  {
    label: "Cinsiyet",
  },
  {
    label: "Beden",
  },
  {
    label: "Yas orani",
  },
  {
    label: "Renk",
  },
  {
    label: "Fiyat Araligi",
  },
];

export default function Filter() {
  return (
    <div className="w-[20%] px-2">
      {options.map((option) => {
        return (
          <div key={uniqid()}>
            <h2 className="text-base font-semibold text-[#FF0000]">
              {option.label}
            </h2>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}
