import React from 'react'

import MainImage from '../imgs/main.jpg'
import MainLogo from '../imgs/GarageKita-logo.png'

function Landing() {
    return (
        <>
            {/* MAIN LANDING PAGE - PALING ATAS */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <div>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src={MainLogo} />
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    {/* <!-- Heroicon name: outline/menu --> */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>

                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>

                            <a href="#" className="font-medium text-teal-600 hover:text-teal-500">Log in</a>
                            </div>
                        </nav>
                        </div>    
                    </div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Cari barang bekas</span>
                        </h1>
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block text-teal-600 xl:inline">lebih mudah</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10">
                                Get started
                            </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-teal-100 hover:bg-teal-200 md:py-4 md:text-lg md:px-10">
                                Live demo
                            </a>
                            </div>
                        </div>
                        </div>
                    </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={MainImage} alt="MainImage Shopping Cart" />
                </div>
                
            </div>

            {/* MAIN LANDING PAGE - TENGAH */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                        </p>
                    </div>

                    <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            {/* <!-- Heroicon name: outline/globe-alt --> */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                        </dd>
                        </div>

                        <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            {/* <!-- Heroicon name: outline/scale --> */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">No hidden fees</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                        </dd>
                        </div>
                        
                        </dl>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Landing