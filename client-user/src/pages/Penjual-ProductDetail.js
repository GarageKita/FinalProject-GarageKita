import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import DeleteProductModal from '../components/Penjual-DeleteProductModal.js'
import PenjualLoggedInNavbar from '../components/Penjual-NavBar.js'
import FormProduct from '../pages/Penjual-FormProduct.js'
import TolakBidModal from '../components/Penjual-TolakBidModal.js'

function PenjualProductDetail() {

    const [ deleteProductModal, setDeleteProductModal ] = useState(false)
    const [ tolakOfferModal, setTolakBidModal ] = useState(false)

    const [ modalStatus, setModalStatus ] = useState(false)
    const [ formType, setFormType ] = useState('')

    function openDeleteProduct() {
        setDeleteProductModal(prev => !prev)
    }

    function openFormProduct(formToLoad) {
        setFormType(formToLoad)
        setModalStatus(prev => !prev)
    }

    function openTolakBidModal(){
        setTolakBidModal(prev => !prev)
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

            { deleteProductModal === true ?
            <DeleteProductModal openDeleteProduct={openDeleteProduct} />
            : null }

            <PenjualLoggedInNavbar />

            { modalStatus === true ?
            <FormProduct openFormProduct={openFormProduct} categories={categories} formType={formType}></FormProduct>
            : null }

            { tolakOfferModal === true ?
            <TolakBidModal openTolakBidModal={openTolakBidModal} />
            : null }

            <div className="bg-white">
                <div>
                    
                    <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                            <h1 className="text-3xl font-extrabold tracking-tight text-rust-700">Mode Penjual: <span className="font-normal">MyProducts</span></h1>

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
                                        <a onClick={() => openFormProduct('post')} className="text-rust-700 cursor-pointer w-40 bg-rust-200 hover:bg-rust-300 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-sm">
                                        Buat Product baru
                                        </a>
                                    </a>

                                    <li className="my-2">
                                        <Link to="/products/myproducts" href="#" className="text-rust-600 hover:text-rust-700">
                                        Daftar Product saya
                                        </Link>
                                    </li>

                                    <li className="my-2">
                                        <Link to="/requests" className="text-rust-600 hover:text-rust-700">
                                        Lihat Request tersedia
                                        </Link>
                                    </li>
                                </ul>

                            </form>

                            {/* <!-- Product grid --> */}
                            <div className="lg:col-span-3 h-full min-w-full  overflow-y-auto overflow-x-auto">
                                {/* <!-- Replace with your content --> */}

                                <div className="flex flex-row justify-between">
                                    <div>
                                        <p className="text-left font-semibold text-gray-500 text-lg">Detil Product</p>
                                        <p className="text-left font-semibold text-gray-900 text-2xl">iPhone 11 RED - berfungsi baik, dipakai 1 tahun</p>
                                        <p className="text-left max-w-2xl text-sm text-gray-500">
                                        Product ID #285
                                        </p>
                                    </div>
                                    <div className="flex flex-col mr-6">
                                        <a onClick={() => openFormProduct('put')} className="text-gray-500 cursor-pointer bg-gray-200 px-5 py-1 rounded-md transition duration-150 ease-in-out hover:text-gray-500 hover:bg-gray-300 my-1 font-medium">Edit</a>
                                        <a onClick={() => openDeleteProduct()} className="text-red-500 cursor-pointer bg-red-200 px-5 py-1 rounded-md transition duration-150 ease-in-out hover:text-red-500 hover:bg-red-300 my-1 font-medium">Hapus</a>
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between pt-2 pb-5 sm:px-6">
                                    <div className="flex flex-col">
                                        <div>
                                            <img className=" w-72 " src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144763" />
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white min-h-full shadow sm:rounded-lg">
                                        <div className="border-t border-gray-200">
                                            <dl>

                                                <div className="bg-gray-100 text-left px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                    Description
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    Retak di ujung kanan layar dan tombol home nggak bekerja, pakai assistive touch.
                                                    </dd>
                                                </div>
                                                <div className="bg-white text-left px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                    Harga
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    Rp6.500.000
                                                    </dd>
                                                </div>
                                                <div className="bg-gray-100 text-left px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">
                                                    Category
                                                    </dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    Handphone & Tablet
                                                    </dd>
                                                </div>
                                                
                                                <div className="flex flex-col bg-white text-left px-4 py-3 sm:gap-2 sm:px-6">
                                                    <div className="text-sm font-bold text-rust-600">
                                                        Bid dari Pembeli
                                                    </div>
                                                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">

                                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                            
                                                            <div className="w-0 flex-1 flex items-center">
                                                                {/* <!-- Heroicon name: solid/paper-clip --> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rust-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                                </svg>
                                                                <span className="ml-3 font-bold flex-1 w-0 truncate">
                                                                Rp6.250.000
                                                                <p className="mt-1 text-xs text-gray-500 font-normal">dari <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">Pembeli #0926</span></p>
                                                                </span>
                                                            </div>
                                                            <div className="ml-4 flex-shrink-0">
                                                                <a onClick={() => openTolakBidModal()} className="font-medium mr-4 transition duration-150 ease-in-out text-gray-500 hover:text-gray-400 cursor-pointer">
                                                                Tolak Bid
                                                                </a>
                                                                <a href="#" className="bg-rust-600 cursor-pointer rounded-md px-5 py-2 font-medium text-rust-50 hover:bg-gray-1000 transition duration-150 ease-in-out">
                                                                Terima Bid
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                            
                                                            <div className="w-0 flex-1 flex items-center">
                                                                {/* <!-- Heroicon name: solid/paper-clip --> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rust-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                                </svg>
                                                                <span className="ml-3 font-bold flex-1 w-0 truncate">
                                                                Rp6.100.000
                                                                <p className="mt-1 text-xs text-gray-500 font-normal">dari <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">Pembeli #7766</span></p>
                                                                </span>
                                                            </div>
                                                            <div className="ml-4 flex-shrink-0">
                                                                <a onClick={() => openTolakBidModal()} className="font-medium mr-4 transition duration-150 ease-in-out text-gray-500 hover:text-gray-400 cursor-pointer">
                                                                Tolak Bid
                                                                </a>
                                                                <a href="#" className="bg-rust-600 cursor-pointer rounded-md px-5 py-2 font-medium text-rust-50 hover:bg-gray-1000 transition duration-150 ease-in-out">
                                                                Terima Bid
                                                                </a>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                    </div>
                                                </div>

                                            </dl>
                                        </div>
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

export default PenjualProductDetail