import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PenjualLoggedInNavbar from '../components/Penjual-NavBar.js'
import KategoriFilter from '../components/KategoriFilter.js'
import DeleteOfferModal from '../components/Penjual-OfferDeleteModal.js'

import EditFormOffer from '../pages/Penjual-FormOffer.js'

function PembeliMain() {

    const [ deleteOffer, setDeleteOffer ] = useState(false)
    const [ editOffer, setEditOffer ] = useState(false)

    function triggerDeleteModal() {
        setDeleteOffer(prev => !prev)
    }

    function triggerEditModal() {
        setEditOffer(prev => !prev)
    }

    function dateFormatter (input_date) {
        let cleanTime = (new Date(input_date)).toGMTString()
        return cleanTime
    }

    const categories = [
        'Elektronik',
        'Handphone & Tablet',
        'Komputer',
        'Otomotif',
        'Mainan & Hobi',
        'Buku & Alat Tulis',
        'Kesehatan',
        'Lain-lain'
    ]

    const mockOffers = [
        {
            "id": 1,
            "offered_price": 8200000,
            "request_id": 478,
            "product_id": 89,
            "seller_id": 1,
            "status": 'Menunggu Pembeli',
            "createdAt": "2021-08-23T13:25:19.088Z",
            "updatedAt": "2021-08-23T13:48:03.453Z"
        },
        {
            "id": 2,
            "offered_price": 2100000,
            "request_id": 56,
            "product_id": 95,
            "seller_id": 2,
            "status": 'Menunggu Pembeli',
            "createdAt": "2021-08-23T13:25:19.088Z",
            "updatedAt": "2021-08-23T13:48:03.453Z"
        }
    ]


    return (
        <>
        
            <PenjualLoggedInNavbar />

            { deleteOffer ? <DeleteOfferModal triggerDeleteModal={triggerDeleteModal} /> : null }
            { editOffer ? <EditFormOffer triggerEditModal={triggerEditModal} /> : null }

            <div className="bg-white">
                <div>
                    
                    <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                            <h1 className="text-3xl font-extrabold tracking-tight text-rust-700">Mode Penjual: <span className="font-normal">MyOffers</span></h1>

                            <div className="flex items-center">
                            
                            <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
                                <span className="sr-only">Filters</span>
                                {/* <!-- Heroicon name: solid/filter --> */}
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                </svg>
                            </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pt-6 pb-24">

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            {/* <!-- Filters --> */}
                            <form className="hidden lg:block">

                                <KategoriFilter categories={categories} />

                            </form>

                            {/* <!-- Product grid --> */}
                            <div className="lg:col-span-3 h-full min-w-full overflow-y-auto ">
                                {/* <!-- TABLE MyBids - START --> */}
                                
                                <div className="flex flex-col">
                                    <div className="sm:-mx-6 lg:-mx-8">
                                        <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Offers saya</p>
                                        
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-rust-100">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                                            Nama Product
                                                        </th>
                                                        <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                                            Harga Offer
                                                        </th>
                                                        <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                                            Waktu Offer
                                                        </th>
                                                        <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                                            Status
                                                        </th>
                                                        <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                                            Quick Actions
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody className="bg-white divide-y divide-gray-200">

                                                    {mockOffers.map((offer, index) => {
                                                        return (

                                                            <tr key={offer.id}>
                                                                <td className="whitespace-nowrap py-3">
                                                                    <div className="flex text-left">
                                                                        <div className="ml-4">
                                                                            <Link to={`/offers/${offer.id}`} className="cursor-pointer text-sm font-bold text-rust-600 hover:text-rust-500">
                                                                            iPhone 11 RED
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="whitespace-wrap text-left">
                                                                    <div className="text-xs text-gray-500">{offer.offered_price}</div>
                                                                </td>
                                                                <td className="whitespace-nowrap text-left">
                                                                    <div className="text-sm text-gray-500">{dateFormatter(offer.createdAt)}</div>
                                                                </td>
                                                                <td className="whitespace-nowrap text-left text-sm text-gray-500">
                                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                                                                    {offer.status}
                                                                    </span>
                                                                </td>
                                                                <td className="flex flex-row align-middle pt-3 space-x-4 whitespace-nowrap text-center text-sm">
                                                                    <a onClick={() => triggerEditModal()} className="text-gray-500 cursor-pointer hover:text-gray-400 font-medium">Edit</a>
                                                                    <a onClick={() => triggerDeleteModal()} className="text-red-600 hover:text-red-400 font-medium cursor-pointer">Hapus</a>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                

                                {/* <!-- TABLE MyOffers - END --> */}
                            </div>
                            </div>
                        </section>
                    </main>
                </div>
                </div>
        </>
    )
}

export default PembeliMain