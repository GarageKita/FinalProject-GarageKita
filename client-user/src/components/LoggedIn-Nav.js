import React from 'react'
import MainLogo from '../imgs/GarageKita-logo.png'
import { Link } from 'react-router-dom'

function LoggedInNavbar(){

    return (
        <>

            <nav className="fixed justify-between ">
                <div className="max-w-7xl pt-4 mx-auto px-2 sm:px-6 lg:px-8 bg-white justify-between fixed left-0 right-0">
                    <div className="relative flex items-center h-16">
                    
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img className="block lg:hidden h-10 w-auto" src={MainLogo} alt="Main Logo GarageKita" />
                            <img className="hidden lg:block h-10 w-auto" src={MainLogo} alt="Main Logo GarageKita" />
                        </Link>
                        </div>

                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 pt-2 pl-4">
                                <Link to="/" className=" cursor-pointer font-medium text-gray-500 hover:text-gray-900 mx-4">Browse semua Produk</Link>

                                <Link to="/" className=" cursor-pointer font-bold text-teal-600 hover:text-teal-500 mx-4">Ganti ke mode Penjual</Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="bg-teal-600 py-2 px-4 rounded-md text-teal-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            Log out
                        </button>
                    </div>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default LoggedInNavbar