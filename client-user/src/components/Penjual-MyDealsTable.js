import React from 'react'
import { Link } from 'react-router-dom'

export default function PenjualMyDealsTable(props) {

    const { mockDeals, changeMode } = props

    return (
        <div>
            
            <div className="flex flex-row justify-between">
                <p className="mb-1 text-left font-bold text-rust-600 text-xl">Product yang kamu lepas ke Pembeli</p>
                
                <Link
                    to="/deals/pembeli"
                    className="flex flex-row cursor-pointer max-h-max h-4 text-teal-600 hover:text-teal-400 transition duration-150 ease-in-out"
                >
                    <p className="mb-1 text-left font-bold text-sm">Mode Pembeli: MyDeals</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>

            </div>
            <p className="mb-6 text-left font-normal text-gray-500 text-sm">Pembayaran diproses oleh 3rd party payment gateway.</p>

                <div className="mt-8">
                <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                        
                        {/* TRANSAKSI BERLANGSUNG – MENUNGGU PEMBAYARAN DARI PEMBELI (Text) */}
                        {mockDeals.map((deal, index) => {
                            return (
                            <li className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2elDtfiP76kGYe01IClR5w8KX5EfIodL1A&usqp=CAU" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover" />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">

                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href="#">
                                                Jam tangan Rolex bekas
                                                </a>
                                                <p className="mt-1 text-left text-xs text-gray-500 font-normal">di-Bid oleh <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">Pembeli #2121</span></p>
                                            </h3>
                                            <p className="ml-4">
                                                <span className="text-sm font-light text-gray-500">Jumlah yang akan kamu terima: </span>Rp{deal.deal_price}
                                            </p>
                                        </div>
                                    </div>


                                    <div className="flex-1 flex items-end justify-between text-sm">
                                    <div>
                                       
                                        <p className="text-xs text-left font-medium py-1 text-gray-700">Status: <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-red-100 text-gray-600">{deal.payment_status} release</span></p>
                                        <p className="text-xs text-left font-medium text-gray-700">Jumlah Barang: <span className="text-xs font-normal text-gray-500">{deal.deal_qty}</span></p>
                                        
                                    </div>

                                        <div className="flex flex-row">
                                            <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                                                Menunggu pembayaran dari Pembeli...
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            )
                        })}

                        {/* SIAP DIKIRIM – KIRIM PRODUCT (Button) */}
                        <li className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2elDtfiP76kGYe01IClR5w8KX5EfIodL1A&usqp=CAU" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover" />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">

                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href="#">
                                            Jam tangan Rolex bekas
                                            </a>
                                            <p className="mt-1 text-left text-xs text-gray-500 font-normal">di-Bid oleh <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">Pembeli #2121</span></p>
                                        </h3>
                                        <p className="ml-4">
                                            <span className="text-sm font-light text-gray-500">Jumlah yang akan kamu terima: </span>RpRp21000000
                                        </p>
                                    </div>
                                </div>


                                <div className="flex-1 flex items-end justify-between text-sm">
                                <div>
                                    
                                    <p className="text-xs text-left font-medium py-1 text-gray-700">Status: <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-red-100 text-gray-600">awaiting release</span></p>
                                    <p className="text-xs text-left font-medium text-gray-700">Jumlah Barang: <span className="text-xs font-normal text-gray-500">1</span></p>
                                    
                                </div>

                                    <div className="flex flex-row items-center">
                                        <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                                            Pembayaran telah diverifikasi
                                        </p>
                                        <a href="#" className="text-white bg-rust-600 rounded-md ml-4 px-5 py-3 cursor-pointer hover:bg-rust-700 font-medium transition duration-150 ease-in-out">Kirim Product</a>
                                    </div>
                                </div>

                            </div>
                        </li>

                        {/* SIAP DIKIRIM – PRODUCT DALAM PERJALANAN (Text) */}
                        <li className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2elDtfiP76kGYe01IClR5w8KX5EfIodL1A&usqp=CAU" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover" />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">

                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href="#">
                                            Jam tangan Rolex bekas
                                            </a>
                                            <p className="mt-1 text-left text-xs text-gray-500 font-normal">di-Bid oleh <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">Pembeli #2121</span></p>
                                        </h3>
                                        <p className="ml-4">
                                            <span className="text-sm font-light text-gray-500">Jumlah yang akan kamu terima: </span>Rp21000000
                                        </p>
                                    </div>
                                </div>


                                <div className="flex-1 flex items-end justify-between text-sm">
                                <div>
                                    
                                    <p className="text-xs text-left font-medium py-1 text-gray-700">Status: <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-red-100 text-gray-600">shipping</span></p>
                                    <p className="text-xs text-left font-medium text-gray-700">Jumlah Barang: <span className="text-xs font-normal text-gray-500">2</span></p>
                                    
                                </div>

                                <div className="flex flex-row">
                                    <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                                        Product dalam perjalanan...
                                    </p>
                                </div>
                                </div>

                            </div>
                        </li>

                        {/* RIWAYAT PENGIRIMAN – PRODUCT SUDAH SAMPAI (Text) */}
                        <li className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2elDtfiP76kGYe01IClR5w8KX5EfIodL1A&usqp=CAU" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover" />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">

                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href="#">
                                            Jam tangan Rolex bekas
                                            </a>
                                            <p className="mt-1 text-left text-xs text-gray-500 font-normal">di-Bid oleh <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">Pembeli #2121</span></p>
                                        </h3>
                                        <p className="ml-4">
                                            <span className="text-sm font-light text-gray-500">Jumlah yang akan kamu terima: </span>Rp21000000
                                        </p>
                                    </div>
                                </div>


                                <div className="flex-1 flex items-end justify-between text-sm">
                                <div>
                                    
                                    <p className="text-xs text-left font-medium py-1 text-gray-700">Status: <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-red-100 text-gray-600">shipping</span></p>
                                    <p className="text-xs text-left font-medium text-gray-700">Jumlah Barang: <span className="text-xs font-normal text-gray-500">2</span></p>
                                    
                                </div>

                                <div className="flex flex-row">
                                    <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                                        Product sudah sampai, transaksi selesai
                                    </p>
                                </div>
                                </div>

                            </div>
                        </li>

                        </ul>
                </div>
            </div>

        </div>
    )
}
