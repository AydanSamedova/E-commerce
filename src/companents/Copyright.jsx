import visa from '../images/visa-10.svg';
import master from '../images/mastercard-2.svg';

export default function Copyright() {
  return (
    <div className="w-full bg-[#221F23] text-white">
        <div className="flex justify-between container items-center px-24 py-4 m-auto">
         <div className="text-xs w-1/6 mr-1">© Telif Hakkı 2022-testwebsite.com</div>
         <div className="text-xs w-1/6">Kullanım Koşulları</div>
         <div className="text-xs w-1/6">KVK ve Gizlilik Politikası</div>
         <div className="w-1/6"></div>
         <div className="w-1/6"></div>
         <div className="flex items-center">
            <img src={master} alt="" className="w-28 h-10" />
            <img src={visa} alt=""  className="w-20 h-6"/>
         </div>
        </div>
    </div>
  )
}
