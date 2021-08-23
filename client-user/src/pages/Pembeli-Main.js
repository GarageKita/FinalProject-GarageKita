import React from 'react'
import {Link} from 'react-router-dom'

import LoggedInNavbar from '../components/LoggedIn-Nav'

function PembeliMain() {

    return (
        <>
        
            <LoggedInNavbar />

            <div className="bg-white">
                <div>
                    
                    <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                            <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">Mode Pembeli</h1>

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
                                        <a href="#" className="text-teal-700 w-40 bg-teal-200 px-4 py-2 rounded-md shadow-sm">
                                        Buat Request baru
                                        </a>
                                    </a>

                                    <li className="my-2">
                                        <a href="#" className="text-teal-600 hover:text-teal-700">
                                        Daftar Request saya
                                        </a>
                                    </li>

                                    <li className="my-2">
                                        <a href="#" className="text-teal-600 hover:text-teal-700">
                                        Lihat Produk tersedia
                                        </a>
                                    </li>
                                </ul>

                                <div className="border-b border-gray-200 py-6">
                                <h3 className="-my-3 flow-root">
                                    {/* <!-- Expand/collapse section button --> */}
                                    <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                    <span className="font-medium text-gray-900">
                                        Kategori
                                    </span>
                                    <span className="ml-6 flex items-center">
                                        {/* <!--
                                        Expand icon, show/hide based on section open state.

                                        Heroicon name: solid/plus-sm
                                        --> */}
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                        {/* <!--
                                        Collapse icon, show/hide based on section open state.

                                        Heroicon name: solid/minus-sm
                                        --> */}
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    </button>
                                </h3>

                                {/* <!-- FILTER --> */}
                                <div className="pt-6" id="filter-section-1">
                                    <div className="space-y-4">

                                    <div className="flex items-center">
                                        <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-600">
                                        Elektronik
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="filter-category-2" name="category[]" value="travel" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-600">
                                        Handphone & Tablet
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-3" className="ml-3 text-sm text-gray-600">
                                        Komputer
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-600">
                                        Otomotif
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-5" className="ml-3 text-sm text-gray-600">
                                        Mainan & Hobi
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-6" className="ml-3 text-sm text-gray-600">
                                        Buku & Alat Tulis
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="filter-category-7" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-600">
                                        Kesehatan
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="filter-category-8" className="ml-3 text-sm text-gray-600">
                                        Lain-lain
                                        </label>
                                    </div>
                                    
                                    </div>
                                </div>
                                </div>

                            </form>

                            {/* <!-- Product grid --> */}
                            <div className="lg:col-span-3 h-4/5 min-w-full pl-4 overflow-y-auto overflow-x-auto">
                                {/* <!-- Replace with your content --> */}
                                
                                <div className="flex flex-col">
                                <div className="sm:-mx-6 lg:-mx-8">
                                    <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Request saya</p>
                                    
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-teal-100">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                                        Nama & Budget
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                                        Deskripsi
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                                        Jumlah
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                                        Kategori
                                                    </th>
                                                    <th scope="col" className="px-8 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className="bg-white divide-y divide-gray-200">

                                                {/* BARANG 2 */}
                                                <tr>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <div className="flex text-left">
                                                            <div className="ml-4">
                                                                <Link to="/" className="text-sm font-bold text-teal-600 hover:text-teal-500">
                                                                HP Xiaomi Redmi
                                                                </Link>
                                                                <div className="text-sm text-gray-500">
                                                                Rp1.800.000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-wrap text-left ">
                                                        <div className="text-xs text-gray-500">Dicari: kondisi tampilan 80% ke atas, fungsionalitas 100%. Retak bocel sedikit nggak masalah yg penting berfungsi baik seperti baru. Prioritas warna hitam/abu.</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">1</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                                                        Handphone & Tablet
                                                        </span>
                                                    </td>
                                                    <td className="flex flex-col px-6 py-4 whitespace-nowrap text-center text-sm">
                                                        <a href="#" className="text-teal-600 hover:text-teal-400 my-2 font-bold">Lihat Tawaran</a>
                                                        <a href="#" className="text-gray-500 hover:text-gray-400 my-1 font-medium">Edit</a>
                                                        <a href="#" className="text-red-600 hover:text-red-400 my-1 font-medium">Hapus</a>
                                                    </td>
                                                </tr>

                                                {/* BARANG 2 */}
                                                <tr>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <div className="flex text-left">
                                                            <div className="ml-4">
                                                                <Link to="/" className="text-sm font-bold text-teal-600 hover:text-teal-500">
                                                                HP Xiaomi Redmi
                                                                </Link>
                                                                <div className="text-sm text-gray-500">
                                                                Rp1.800.000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-wrap text-left ">
                                                        <div className="text-xs text-gray-500">Dicari: kondisi tampilan 80% ke atas, fungsionalitas 100%. Retak bocel sedikit nggak masalah yg penting berfungsi baik seperti baru. Prioritas warna hitam/abu.</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">1</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                                                        Handphone & Tablet
                                                        </span>
                                                    </td>
                                                    <td className="flex flex-col px-6 py-4 whitespace-nowrap text-center text-sm">
                                                        <a href="#" className="text-teal-600 hover:text-teal-400 my-2 font-bold">Lihat Tawaran</a>
                                                        <a href="#" className="text-gray-500 hover:text-gray-400 my-1 font-medium">Edit</a>
                                                        <a href="#" className="text-red-600 hover:text-red-400 my-1 font-medium">Hapus</a>
                                                    </td>
                                                </tr>

                                                

                                            </tbody>
                                        </table>
                                    </div>
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
        </>
    )
}

export default PembeliMain