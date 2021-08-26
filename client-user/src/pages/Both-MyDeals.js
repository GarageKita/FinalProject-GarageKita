import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LoggedInNavbar from '../components/Pembeli-NavBar.js'
import KategoriFilter from '../components/KategoriFilter.js'

import PembeliMyDeals from '../components/Pembeli-MyDeals.js'
import PenjualMyDeals from '../components/Penjual-MyDeals.js'

// import DeleteModal from '../components/Pembeli-BidDeleteModal.js'
// import EditFormBid from '../pages/Pembeli-FormBid.js'

function MyDeals() {

    // const [ deleteBid, setDeleteBid ] = useState(false)
    // const [ editBid, setEditBid ] = useState(false)
    const [ currentMode, setCurrentMode ] = useState('pembeli')

    function changeMode(toMode) {
        setCurrentMode(toMode)
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

    const mockDeals = [
        {
            "id": 6,
            "consumer_id": 5,
            "product_id": 1,
            "deal_price": 100000,
            "deal_qty": 1,
            "updatedAt": "2021-08-24T05:30:18.105Z",
            "createdAt": "2021-08-24T05:30:18.105Z",
            "payment_status": "awaiting"
        },
        {
            "id": 6,
            "consumer_id": 5,
            "product_id": 1,
            "deal_price": 100000,
            "deal_qty": 1,
            "updatedAt": "2021-08-24T05:30:18.105Z",
            "createdAt": "2021-08-24T05:30:18.105Z",
            "payment_status": "awaiting"
        },
        {
            "id": 6,
            "consumer_id": 5,
            "product_id": 1,
            "deal_price": 100000,
            "deal_qty": 1,
            "updatedAt": "2021-08-24T05:30:18.105Z",
            "createdAt": "2021-08-24T05:30:18.105Z",
            "payment_status": "awaiting"
        },
        
    ]


    return (
        <>
        
            <LoggedInNavbar />
            

            {/* { deleteBid ? <DeleteModal triggerDeleteModal={triggerDeleteModal} /> : null }
            { editBid ? <EditFormBid triggerEditModal={triggerEditModal} /> : null } */}

            <div className="bg-white">
                <div>
                    
                    <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                            <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">MyDeals</h1>

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
                                {/* <!-- TABLE MyDeals - START --> */}
                                
                                <div className="flex flex-col">
                                    <div className="sm:-mx-6 lg:-mx-8">
                                        <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        
                                        { currentMode === 'pembeli' ?
                                        <PembeliMyDeals mockDeals={mockDeals} changeMode={changeMode} />
                                        : <PenjualMyDeals mockDeals={mockDeals} changeMode={changeMode} />
                                        }

                                        </div>
                                    </div>
                                </div>
                                

                                {/* <!-- TABLE MyDeals - END --> */}
                            </div>
                            </div>
                        </section>
                    </main>
                </div>
                </div>
        </>
    )
}

export default MyDeals