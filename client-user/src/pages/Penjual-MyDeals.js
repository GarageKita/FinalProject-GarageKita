/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSellerTransaction } from '../store/slices/dealSlice';
import PenjualLoggedInNavbar from '../components/Penjual-NavBar.js';
import PenjualMyDealsTable from '../components/Penjual-MyDealsTable.js';
import MyCartIllusPenjual from '../imgs/svg/MyCartPenjual.svg'

function PenjualMyDeals() {
  const dispatch = useDispatch();
  const [currentMode, setCurrentMode] = useState('pembeli');
  const [mockDeals, setMockDeals] = useState([]);
  useEffect(() => {
    dispatch(getSellerTransaction()).then(({ payload }) => {
      const { data: initData } = payload.data;
      setMockDeals(initData);
    });
  }, []);

  function changeMode(toMode) {
    setCurrentMode(toMode);
  }

  return (
    <>
      <PenjualLoggedInNavbar />

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <div className="flex flex-row">                
                <h1 className="text-3xl font-extrabold tracking-tight text-rust-700">
                Mode Penjual: <span className="font-normal">MyDeals</span>
                </h1>
              </div>
              <div className="flex items-center">
                <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
                  <span className="sr-only">Filters</span>
                  {/* <!-- Heroicon name: solid/filter --> */}
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* <!-- Filters --> */}
                  <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                    <li className="my-2">
                      <a href="#" className="text-rust-600 hover:text-rust-700">
                        Siap Dikirim
                      </a>
                    </li>

                    <li className="mt-2 mb-4">
                      <a href="#" className="text-rust-600 hover:text-rust-700">
                        Transaksi Berlangsung
                      </a>
                    </li>

                    <li className="my-2">
                      <a href="#" className="text-rust-600 hover:text-rust-700">
                        Riwayat Pengiriman
                      </a>
                    </li>
                    <img src={MyCartIllusPenjual} className="w-full" />
                  </ul>                  
                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 h-full min-w-full overflow-y-auto ">
                  {/* <!-- TABLE MyDeals - START --> */}
                  <div className="flex flex-col">
                    <div className="w-full">
                      <div className=" align-middle inline-block min-w-full ">
                        
                          <PenjualMyDealsTable mockDeals={mockDeals} changeMode={changeMode} />
                        
                      </div>
                    </div>
                  </div>
                  {/* <!-- TABLE MyDeals - END --> */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default PenjualMyDeals;
