import React from 'react'
import {Link} from 'react-router-dom'

import MainLogo from '../imgs/GarageKita-logo.png'
import EmailActivation from '../components/EmailActivation'

function Register() {

    return (
        <>
            
            <EmailActivation />

                <div id="register-section" className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md space-y-8">

                        <Link to="/">
                            <img className="mx-auto w-64" src={MainLogo} alt="GarageKita Logo" />
                        </Link>

                        <div className="border border-solid border-gray-300 w-auto px-12 py-10 rounded-xl shadow-lg">
                            <div id="register-sub-section">
                                
                                <h2 className="my-4 text-center text-3xl font-extrabold text-gray-900">
                                    <span className="text-teal-600 leading-none">Daftarkan akun baru</span>
                                </h2>
                                <p className="mt-2 text-center text-sm text-gray-500">
                                    <span>Sudah punya akun </span><span className="font-medium">GarageKita? </span>
                                    <Link to="/users/login" id="register-link" className="font-medium text-teal-600 hover:text-teal-500">
                                    Masuk ke sini!
                                    </Link>
                                </p>
                                <p className="mt-2 text-center text-sm text-red-500">
                                Email sudah pernah dipakai mendaftar.    
                                </p>
                            </div>
                    
                            <form id="register-form" className="mt-8 space-y-6">
                                <input type="hidden" name="remember" value="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="register-email" className="sr-only">Email address</label>
                                    <input id="register-email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div>
                                    <label htmlFor="register-password" className="sr-only">Password</label>
                                    <input id="register-password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                </div>
                                </div>
                        
                        
                                <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-teal-400 group-hover:text-teal-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    Daftar
                                </button>
                                </div>
                            </form>
                    
                            
                        </div>
                    </div>
                </div>
        
        </>
    )
}

export default Register