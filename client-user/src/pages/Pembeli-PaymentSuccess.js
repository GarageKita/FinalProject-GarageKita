import React from 'react'

import MainLogo from '../imgs/GarageKita-logo.png'
import { Link } from 'react-router-dom'

import LoggedInNavbar from '../components/Pembeli-NavBar.js'

function PembeliPaymentSuccess() {
    return (
        <>

            <LoggedInNavbar />

            <div className="pt-72 pb-60 lg:text-center text-center">

                <h2 className="text-md text-teal-600 font-semibold tracking-wide">Terima kasih!</h2>
                <p className="mt-2 text-center text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pembayaran kamu sedang kami proses.
                </p>
                <p className="mt-4 text-center max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                <div className="flex flex-row text-center mt-8 mx-auto h-6 w-60 max-w-max text-teal-600 hover:text-teal-400 cursor-pointer transition duration-150 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 mr-2 h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <Link to="/deals" className="mb-3 font-semibold text-lg">Kembali ke MyDeals</Link>
                </div>
                </p>

            </div>
        </>
    )
}

export default PembeliPaymentSuccess