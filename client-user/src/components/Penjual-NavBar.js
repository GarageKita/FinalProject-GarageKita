import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MainLogo from '../imgs/GarageKita-logo.png'
import PenjualDropdownMenu from './Penjual-DropdownMenu.js'

function PenjualNavBar(){

    const [ mockUser, setMockUser ] = useState('rama.shinta@gmail.com')

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
                                <Link to="/requests" className=" cursor-pointer font-medium text-gray-500 hover:text-gray-900 mx-4">Browse semua Request</Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <p className="mr-3 py-2 px-4 text-sm rounded-md text-rust-600 ">
                            Hello, <span className="font-semibold">{mockUser}</span>
                        </p>

                        <PenjualDropdownMenu />

                        <Link to="/" className=" font-semibold py-2 px-4 text-rust-600 hover:text-rust-400 transition duration-150 ease-in-out ">
                            Log out
                        </Link>
                    </div>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default PenjualNavBar