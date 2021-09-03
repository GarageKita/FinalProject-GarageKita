import React from 'react'
import { Link } from 'react-router-dom'

import MainLogo from '../imgs/GarageKita-logo.png'

export default function LandingMobileNav (props) {

    const {triggerMobileNav} = props

    return (
        <React.Fragment>

            <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img className="h-8 w-auto" src={MainLogo} alt="" />
                        </div>
                        <div className="-mr-2">
                            <button onClick={() => triggerMobileNav()} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                                <span className="sr-only">Close main menu</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col text-left pl-5 pt-4 pb-4 space-y-3">
                            <Link className="font-medium text-md text-gray-500 hover:text-gray-900">Product</Link>

                            <Link className="font-medium text-md text-gray-500 hover:text-gray-900">Marketplace</Link>

                            <Link className="font-medium text-md text-gray-500 hover:text-gray-900">Company</Link>

                            <Link to="/users/login" className="bg-teal-300 text-center w-24 rounded-md px-3 py-2 font-bold text-teal-600 hover:text-teal-500">Log in</Link>
                        </div>
                        </div>
                    </div>

        </React.Fragment>
    )
}