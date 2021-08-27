import React from 'react'
import {Link} from 'react-router-dom'

import MainLogo from '../imgs/GarageKita-logo.png'

function Login() {

    return (
        <>
                <div id="login-section" className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md space-y-8">

                        <Link to="/">
                            <img className="mx-auto w-64" src={MainLogo} alt="GarageKita Logo" />
                        </Link>

                        <div className="border border-solid border-gray-300 w-auto px-12 py-10 rounded-xl shadow-lg">
                            <div id="login-sub-section">
                                
                                <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                                    <span className="text-teal-600 leading-none">Log in ke akun kamu</span>
                                </h2>
                                <p className="mt-2 text-center text-sm text-gray-500">
                                    <span>Belum punya akun? </span>
                                    <Link to="/users/register" id="register-link" className="font-medium text-teal-600 hover:text-teal-500">
                                    Daftar sekarang!
                                    </Link>
                                </p>
                                <p className="mt-2 text-center text-sm text-red-500">
                                Email/Password yang kamu masukkan salah.    
                                </p>
                            </div>
                    
                            <form id="login-form" className="mt-8 space-y-6">
                                <input type="hidden" name="remember" value="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="login-email" className="sr-only">Email address</label>
                                    <input id="login-email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div>
                                    <label htmlFor="login-password" className="sr-only">Password</label>
                                    <input id="login-password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                </div>
                                </div>
                        
                        
                                <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-teal-400 group-hover:text-teal-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    Log in
                                </button>
                                </div>
                            </form>
                    
                            <div id="login-oauth-section">
                                
                                <p className="mt-4 text-center font-bold text-sm text-teal-600">
                                Atau log in dengan:
                                </p>
                            </div>
                            {/* <div className="flex items-center justify-center">
                                <g-signin-button className="g-signin-button"
                                    :params="googleSignInParams"
                                    @success="onSignInSuccess"
                                    @error="onSignInError">
                                    Sign in with Google
                                </g-signin-button>
                                <!-- <div className="g-signin2" data-onsuccess="onSignIn"></div> -->
                            </div>
                            <!-- <a href="#" onclick="signOut();">Sign out</a> --> */}
                        </div>
                    </div>
                </div>
            {/* <!-- LOGIN ENDS --> */}
        </>
    )
}

export default Login