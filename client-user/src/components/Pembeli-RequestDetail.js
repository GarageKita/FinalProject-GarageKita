import React, { useState } from 'react'

import DeleteModal from './Pembeli-DeleteModal.js'

function PembeliRequestDetail(props) {

    const { openFormRequest } = props
    const [ deleteModal, setDeleteModal ] = useState(false)

    function openDeleteRequest() {
        setDeleteModal(prev => !prev)
    }

    return (
        <React.Fragment>

            { deleteModal === true
            ?
            <DeleteModal openDeleteRequest={openDeleteRequest} />
            :
            null
            }

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
                                <a href="#" className="font-medium mr-4 text-teal-600 hover:text-teal-500">
                                Tawar Dulu
                                </a>
                                <a href="#" className="bg-teal-600 rounded-md px-5 py-2 font-medium text-teal-50 hover:bg-teal-500 transition duration-150 ease-in-out">
                                Langsung Terima
                                </a>
                            </div>
                        </li>
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
                                <a href="#" className="font-medium mr-4 text-teal-600 hover:text-teal-500">
                                Tawar Dulu
                                </a>
                                <a href="#" className="bg-teal-600 rounded-md px-5 py-2 font-medium text-teal-50 hover:bg-teal-500 transition duration-150 ease-in-out">
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

        </React.Fragment>
    )
}

export default PembeliRequestDetail