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
                    <Link to="/products/myproducts" className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">MyProducts</Link>
                    <Link to="/offers/myoffers" className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">MyOffers</Link>
                    <Link to="/deals" className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">MyDeals</Link>
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
