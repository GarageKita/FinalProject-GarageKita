import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/LogIn'
import Register from './pages/Register';

function App() {
    return (
        <div className="App">

            {/* SWITCH ROUTERS */}
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/users/login" component={Login} />
                <Route path="/users/register" component={Register} />
            </Switch>

            {/* FOOTER */}
            <footer className="border-2 border-gray-200 border-solid">
                
                <div className="flex flex-row min-w-full h-60 bg-white ">
                    <div className="min-h-full w-1/2 min-w-min pl-16 py-10">
                        {/* <img src={LogoBlack} alt="" className="h-10" /> */}
                        <p className="mt-7 mb-3 text-teal-600 font-bold">PT GarageKita Sukses Selalu</p>
                        <div className="font-normal text-sm">
                            <p>Jl. Fase III no. 1</p>
                            <p>Jakarta Pusat, DKI Jakarta 10230</p>
                            <p>Phone: +62 21 2008 0109</p>
                        </div>
                        {/* <p className="mt-7 mb-3">The Met Cloisters</p>
                        <div className="font-normal text-xs">
                            <p>99 Margaret Corbin Drive</p>
                            <p>Fort Tryon Park</p>
                            <p>New York, NY 10040</p>
                            <p>Phone: 212-923-3700</p>
                        </div> */}
                    </div>

                    <div className="bg-gray-50 flex flex-col min-h-full w-1/2 min-w-min border-l border-gray-200 border-solid">
                        <div className="flex flex-col pt-16 text-sm text-gray-700 leading-loose">
                            <p className="hover:underline cursor-pointer">Tentang GarageKita</p>
                            <p className="hover:underline cursor-pointer">Kebijakan Privasi</p>
                            <p className="hover:underline cursor-pointer">Syarat dan Ketentuan</p>
                            <p className="hover:underline cursor-pointer">FAQ (Tanya Jawab)</p>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    );
}

export default App;
