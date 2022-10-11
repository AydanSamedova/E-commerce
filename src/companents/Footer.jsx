import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bg-[#26282B] text-white">
    <div className="flex justify-between container px-28 py-7 m-auto" >
    <div>
            <h2 className="text-lg font-semibold mb-5" >Biz Kimiz</h2>
            <ul>
                <li className="text-sm font-normal">Hakkimizda</li>
                <li className="text-sm my-6 font-normal">Kariyer</li>
                <li className="text-sm my-6 font-normal">Iletisim</li>
                <li className="text-sm font-normal">Bizde satis yap</li>
            </ul>
        </div>
        <div>
            <h2 className="text-lg font-semibold  mb-5">Yardim</h2>
            <ul>
                <li className="text-sm font-normal">Skca sorulan sorular</li>
                <li className="text-sm my-6 font-normal">Canli yardim</li>
                <li className="text-sm my-6 font-normal">Nasil iade ederim</li>
                <li className="text-sm font-normal">Nasil siparis verilir</li>
            </ul>
        </div>
       
        <div>
            <h2 className="text-lg font-semibold  mb-5">Kampanyalar</h2>
            <ul>
                <li className="text-sm  font-normal">Ozel kampanyalar</li>
                <li className="text-sm my-6 font-normal">Bayram kampanyalari</li>
                <li className="text-sm my-6 font-normal">Aktiv Kampanyalar</li>
                <li className="text-sm font-normal">VIP uyelik</li>
            </ul>
        </div>
        <div>
            <h2 className="text-lg font-semibold mb-5">Sosyal Medya</h2>
            <li className="flex items-center  list-none text-sm font-normal"><i className="fa-brands fa-facebook-f mr-3 text-base circle-icon bg-cyan-500"></i> <h3>Facebook</h3></li>
            <li className="flex  items-center list-none text-sm my-3 font-normal"><i className="fa-brands fa-instagram mr-3 text-base  circle-icon bg-red-500"></i> <h3>Instagram</h3></li>
            <li className="flex  items-center list-none text-sm my-3 font-normal"><i className="fa-brands fa-twitter mr-3 text-base  circle-icon bg-blue-500"></i> <h3>Twitter</h3></li>
            <li className="flex  items-center list-none text-sm font-normal"><i className="fa-brands fa-youtube mr-3 text-base  circle-icon bg-red-600"></i> <h3>Youtube</h3></li>
           
        </div>
        <div>
            <h2 className="text-lg font-semibold  mb-3">Indirimler ve yenilikler icin abone olun</h2>
            <div className="flex">
                <input type="text" className="outline-0 border-0 px-3 py-3 rounded-sm"  placeholder="E-mail"/>
                <button className="bg-red text-white mx-2 px-5 py-3 rounded-sm">Abone ol</button>
            </div>
            <h3 className="text-sm my-6">Bültene kaydolarak Gizlilik Politikası <br/> Gizlilik Politikasını kabul etmiş olursunuz</h3>
        </div>
    </div>
</div>
  )
}
