import React from 'react'
import './App.css';

import Landing from './pages/Landing';

function App() {
    return (
        <div className="App">

            <Landing />

            {/* FOOTER */}
            <footer>
                
                <div className="flex flex-row min-w-full h-96 bg-white border border-gray-200 border-solid">
                    <div className="min-h-full w-1/2 min-w-min pl-16 py-10">
                        {/* <img src={LogoBlack} alt="" className="h-10" /> */}
                        <p className="mt-7 mb-3">PT GarageKita Sukses Selalu</p>
                        <div className="font-normal text-xs">
                            <p>Jl. Fase III no. 1</p>
                            <p>Jakarta Pusat, DKI Jakarta 10230</p>
                            <p>Phone: +62 21 2008 0109</p>
                        </div>
                        <p className="mt-7 mb-3">The Met Cloisters</p>
                        <div className="font-normal text-xs">
                            <p>99 Margaret Corbin Drive</p>
                            <p>Fort Tryon Park</p>
                            <p>New York, NY 10040</p>
                            <p>Phone: 212-923-3700</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 flex flex-col min-h-full w-1/2 min-w-min">
                        <div className="flex flex-col pl-16 py-10 text-sm text-gray-700 leading-loose border-l border-r border-b border-gray-200 border-solid h-1/2">
                            <p className="hover:underline cursor-pointer">Membership</p>
                            <p className="hover:underline cursor-pointer">Mission and History</p>
                            <p className="hover:underline cursor-pointer">Support The Met</p>
                            <p className="hover:underline cursor-pointer">Corporate Support</p>
                        </div>
                        <div className="flex flex-col pl-16 py-10 border-l border-r border-gray-200  border-solid h-1/2">
                            <p className="font-semibold text-lg">Join our newsletter</p>
                            <div className="flex flex-row col-span-6 sm:col-span-4 pr">
                                <input type="text" name="email-address" id="email-address" placeholder="Enter your email" className="mt-3 px-4  focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-200 rounded-lg h-10 w-3/4" />
                                <button className="shadow-sm border border-gray-500 text-gray-500 text-sm px-5 py-2 mt-3 ml-3 rounded-lg hover:bg-gray-200 duration-100">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default App;
