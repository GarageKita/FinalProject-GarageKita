import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export default function PembeliDropdownMenu() {

    const [ menuState, setMenuState ] = useState(false)

    function changeMenuState() {
        setMenuState(prev => !prev)
    }

    return (
        <div>

            <div className="relative inline-block text-left mr-3">
            <div>
                <button onClick={() => changeMenuState()} type="button" className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-rust-700 text-sm font-medium text-white hover:bg-rust-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-rust-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Mode Penjual
                {/* <!-- Heroicon name: solid/chevron-down --> */}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>

            
            { menuState === true ?
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}

                    <div className="flex flex-row px-4 hover:bg-gray-100 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <Link to="/products/myproducts" className="text-gray-700 block px-2 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">MyProducts</Link>
                    </div>

                    <div className="flex flex-row px-4 hover:bg-gray-100 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <Link to="/offers/myoffers" className="text-gray-700 px-2 block py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">MyOffers</Link>
                    </div>
                    
                    <div className="flex flex-row px-4 hover:bg-gray-100 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <Link to="/deals/penjual" className="text-gray-700 block px-2 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">MyDeals</Link>
                    </div>
                    <Link to="/myrequests" className="text-teal-700 font-bold hover:bg-teal-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Ganti ke Mode Pembeli</Link>
                </div>
            </div>
            :
            null
            }

            </div>
            
        </div>
    )
}
