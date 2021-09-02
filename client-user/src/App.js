import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/LogIn';
import Register from './pages/Register';

import PembeliMain from './pages/Pembeli-Main';
import PembeliRequestDetail from './pages/Pembeli-RequestDetail';
import PembeliAllProducts from './pages/Pembeli-AllProducts';
import PembeliMyBids from './pages/Pembeli-MyBids';
import PembeliIndividualBid from './pages/Pembeli-IndividualBid';
import PembeliPaymentSuccess from './pages/Pembeli-PaymentSuccess';
import PembeliMyAddresses from './pages/Pembeli-MyAddress';

import PenjualMain from './pages/Penjual-Main';
import PenjualProductDetail from './pages/Penjual-ProductDetail';
import PenjualAllRequests from './pages/Penjual-AllRequests';
import PenjualMyOffers from './pages/Penjual-MyOffers';
import PenjualIndividualOffer from './pages/Penjual-IndividualOffer';

import PembeliMyDeals from './pages/Pembeli-MyDeals';
import PenjualMyDeals from './pages/Penjual-MyDeals';

import IndividualDeal from './pages/Both-IndividualDeal';
import SuccessPayment from './pages/Success-Payment';

import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      {/* SWITCH ROUTERS */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />

        <Route path="/requests/:id" component={PembeliRequestDetail} />
        <Route path="/requests" component={PenjualAllRequests} />
        <Route path="/myrequests" component={PembeliMain} />

        <Route path="/requests/:id" component={PembeliRequestDetail} />
        <Route path="/requests" component={PenjualAllRequests} />
        <Route path="/myrequests" component={PembeliMain} />

        <Route path="/bids/mybids" component={PembeliMyBids} />
        <Route path="/bids/:bidID" component={PembeliIndividualBid} />
        <Route path="/products/myproducts" component={PenjualMain} />
        <Route path="/products/:id" component={PenjualProductDetail} />
        <Route path="/products" component={PembeliAllProducts} />

        <Route path="/bids/mybids" component={PembeliMyBids} />
        <Route path="/bids/:bidID" component={PembeliIndividualBid} />

        <Route path="/offers/myoffers" component={PenjualMyOffers} />
        <Route path="/offers/:offerID" component={PenjualIndividualOffer} />

        <Route exact path="/deals/pembeli" component={PembeliMyDeals} />
        <Route exact path="/deals/penjual" component={PenjualMyDeals} />
        <Route path="/deals/:id" component={IndividualDeal} />

        <Route path="/address/myaddress" component={PembeliMyAddresses} />

        <Route path="/payments/success" component={PembeliPaymentSuccess} />

        <Route component={PageNotFound} />
      </Switch>

      {/* FOOTER */}
      {/* <footer className="fixed mt-auto bottom-0 w-screen max-w-full min-w-max border-2 border-gray-200 border-solid">
        <div className="flex flex-row min-w-full h-48 bg-white ">
          <div className="min-h-full w-1/2 min-w-min pl-16 py-10">
            <p className="my-3 text-teal-600 font-bold">PT GarageKita Sukses Selalu</p>
            <div className="font-normal text-xs">
              <p>Jl. Fase III no. 1</p>
              <p>Jakarta Pusat, DKI Jakarta 10230</p>
              <p>Phone: +62 21 2008 0109</p>
            </div>
          </div>

          <div className="bg-gray-50 w-1/2 min-w-min align-middle justify-center pt-10 border-l border-gray-200 border-solid">
            <div className="flex flex-col text-xs text-gray-700 leading-loose">
              <p className="hover:underline cursor-pointer">Tentang GarageKita</p>
              <p className="hover:underline cursor-pointer">Kebijakan Privasi</p>
              <p className="hover:underline cursor-pointer">Syarat dan Ketentuan</p>
              <p className="hover:underline cursor-pointer">FAQ (Tanya Jawab)</p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
