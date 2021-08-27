/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import DeleteModal from '../components/Pembeli-DeleteModal.js'
import LoggedInNavbar from '../components/Pembeli-NavBar.js'
import FormRequest from '../pages/Pembeli-FormRequest.js'
import TolakOfferModal from '../components/Pembeli-TolakOfferModal.js'

function PembeliRequestDetail() {

    const [ deleteModal, setDeleteModal ] = useState(false)
    const [ tolakOfferModal, setTolakOfferModal ] = useState(false)

    const [ modalStatus, setModalStatus ] = useState(false)
    const [ formType, setFormType ] = useState('')

    function openDeleteRequest() {
        setDeleteModal(prev => !prev)
    }

    function openFormRequest(formToLoad) {
        setFormType(formToLoad)
        setModalStatus(prev => !prev)
    }

    function openTolakOfferModal(){
        setTolakOfferModal(prev => !prev)
    }

    function openAcceptOfferModal() {
        console.log('insert transaksi disini');
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

    return (
        <React.Fragment>

            { deleteModal === true ?
            <DeleteModal openDeleteRequest={openDeleteRequest} />
            : null }

            <LoggedInNavbar />

            { modalStatus === true ?
            <FormRequest openFormRequest={openFormRequest} categories={categories} formType={formType}></FormRequest>
            : null }

            { tolakOfferModal === true ?
            <TolakOfferModal openTolakOfferModal={openTolakOfferModal} />
            : null }

            <div className="bg-white">
                <div>
                    
                    <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                            <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">Mode Pembeli: <span className="font-normal">MyRequests</span></h1>

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

                                <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                                    <a className="mt-2 mb-4">
                                        <a onClick={() => openFormRequest('post')} className="text-teal-700 cursor-pointer w-40 bg-teal-200 hover:bg-teal-300 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-sm">
                                        Buat Request baru
                                        </a>
                                    </a>

                                    <li className="my-2">
                                        <Link to="/myrequests"  href="#" className="text-teal-600 hover:text-teal-700">
                                        Daftar Request saya
                                        </Link>
                                    </li>

                                    <li className="my-2">
                                        <Link to="/products" className="text-teal-600 hover:text-teal-700">
                                            Lihat Product tersedia
                                        </Link>
                                    </li>
                                </ul>

                            </form>

                            {/* <!-- Product grid --> */}
                            <div className="lg:col-span-3 h-full min-w-full pl-4 overflow-y-auto overflow-x-auto">
                                {/* <!-- Replace with your content --> */}

                        <div className="flex flex-row justify-between px-4 pt-2 pb-5 sm:px-6">
                            <div>
                                <p className="text-left font-semibold text-gray-500 text-lg">Detil Request</p>
                                <p className="text-left font-semibold text-gray-900 text-2xl">HP Xiaomi Redmi</p>
                                <p className="text-left max-w-2xl text-sm text-gray-500">
                                Request ID #112
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <a onClick={() => openFormRequest('put')} className="text-gray-500 cursor-pointer bg-gray-200 px-5 py-1 rounded-md hover:text-gray-500 hover:bg-gray-300 my-1 font-medium">Edit</a>
                                <a onClick={() => openDeleteRequest('HP Xiaomi Redmi')} className="text-red-500 cursor-pointer bg-red-200 px-5 py-1 rounded-md hover:text-red-500 hover:bg-red-300 my-1 font-medium">Hapus</a>
                            </div>
                        </div>
                        <div className="bg-white min-h-full shadow sm:rounded-lg">
                        <div className="border-t border-gray-200">
                            <dl>
                            <div className="bg-teal-50 text-left px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                Description
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Dicari: kondisi tampilan 80% ke atas, fungsionalitas 100%. Retak bocel sedikit nggak masalah yg penting berfungsi baik seperti baru. Prioritas warna hitam/abu.
                                </dd>
                            </div>
                            <div className="bg-white text-left px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                Budget
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Rp1.800.000
                                </dd>
                            </div>
                            <div className="bg-teal-50 text-left px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                Category
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Handphone & Tablet
                                </dd>
                            </div>
                            
                            <div className="bg-white text-left px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
                                <dt className="text-sm font-bold text-teal-600">
                                Tawaran dari Penjual
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">

                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        
                                        <div className="w-0 flex-1 flex items-center">
                                            {/* <!-- Heroicon name: solid/paper-clip --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span className="ml-3 font-bold flex-1 w-0 truncate">
                                            Rp2.100.000
                                            <p className="mt-1 text-xs text-gray-500 font-normal">dari <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">Penjual #1233</span></p>
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a onClick={() => openTolakOfferModal()} className="font-medium mr-4 text-red-600 hover:text-red-500 cursor-pointer">
                                            Tolak Offer
                                            </a>
                                            <a onClick={() => openAcceptOfferModal()} className="bg-teal-600 rounded-md px-5 py-2 font-medium text-teal-50 hover:bg-teal-500 transition duration-150 ease-in-out">
                                            Langsung Terima
                                            </a>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>
                                </dd>
                            </div>
                            </dl>
                        </div>
                        </div>
                    
                        {/* <!-- /End replace --> */}
                        </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        </React.Fragment>
    )
}

export default PembeliRequestDetail