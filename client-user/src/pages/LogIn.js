import React from 'react'

function Login() {

    return (
        <>
                <div id="login-section" className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
            
                    <div id="login-sub-section">
                        <img className="mx-auto h-40 w-auto" src="logoYellow" alt="GarageKita Logo" />
                        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                            <span className="text-yellow-500">Log in</span><span className="text-gray-200"> to your account</span>
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-200">
                        Unregistered?
                        <a href="#" id="register-link" className="font-medium text-yellow-500 hover:text-yellow-400">
                            Click here to register!
                        </a>
                        </p>
                    </div>
            
                    <form id="login-form" className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="login-email" className="sr-only">Email address</label>
                            <input id="login-email" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="login-password" className="sr-only">Password</label>
                            <input id="login-password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                        </div>
                
                
                        <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-yellow-600 group-hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            </span>
                            Sign in
                        </button>
                        </div>
                    </form>
            
                    <div id="login-oauth-section">
                        
                        <p className="mt-2 text-center font-bold text-sm text-yellow-500">
                        Or sign in with:
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
            {/* <!-- LOGIN ENDS --> */}
        </>
    )
}

export default Login