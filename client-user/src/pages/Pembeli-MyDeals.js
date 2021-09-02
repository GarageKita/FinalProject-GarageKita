/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDeals } from '../store/slices/dealSlice';
import LoggedInNavbar from '../components/Pembeli-NavBar.js';
import PembeliMyDealsTable from '../components/Pembeli-MyDealsTable.js';
import MyCartIllus from '../imgs/svg/MyCart.svg';

function PembeliMyDeals() {
  const dispatch = useDispatch();
  const [currentMode, setCurrentMode] = useState('pembeli');
  const [mockDeals, setMockDeals] = useState([]);
  useEffect(() => {
    dispatch(getDeals()).then(({ payload }) => {
      const { data: initData } = payload.data;
      console.log('initData from dispatch parent', initData);
      setMockDeals(initData);
    });
  }, []);


  function changeMode(toMode) {
    setCurrentMode(toMode);
  }

  const filterDeal = (type) => {
    if (type === 'menunggu-pembayaran') {
      dispatch(getDeals()).then(({ payload }) => {
        const { data } = payload.data;
        const filtered = data.filter(e => e.payment_status === 'awaiting');
        setMockDeals(filtered);
      });
    } else if (type === 'dalam-pengiriman') {
      dispatch(getDeals()).then(({ payload }) => {
        const { data } = payload.data;
        const filtered = data.filter(e => e.payment_status === 'paid' && e.shipping_status === 'delivering');
        setMockDeals(filtered);
      });
    } else if (type === 'riwayat-transaksi') {
      dispatch(getDeals()).then(({ payload }) => {
        const { data } = payload.data;
        const filtered = data.filter(e => e.payment_status === 'paid' && e.shipping_status === 'completed');
        setMockDeals(filtered);
      });
    } else if (type === 'menunggu-pengiriman') {
      dispatch(getDeals()).then(({ payload }) => {
        const { data } = payload.data;
        const filtered = data.filter(e => e.payment_status === 'paid' && e.shipping_status === 'undeliver');
        setMockDeals(filtered);
      });
    }
  }
  
  return (
    <>
      <LoggedInNavbar />
      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <div className="flex flex-row">
                <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">
                  Mode Pembeli: <span className="font-normal">MyDeals</span>
                </h1>
              </div>
              <div className="flex items-center">
                <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
                  <span className="sr-only">Filters</span>
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
                  <button onClick={(e) => filterDeal('menunggu-pembayaran')} className="text-teal-600 hover:text-teal-700">
                    <strong>Menunggu Pembayaran</strong>
                  </button>

                  <li className="my-2">
                    <button onClick={(e) => filterDeal('dalam-pengiriman')} className="text-teal-600 hover:text-teal-700">
                      Dalam Pengiriman
                    </button>
                  </li>

                  <li className="my-2">
                    <button onClick={() => filterDeal('menunggu-pengiriman')} className="text-teal-600 hover:text-teal-700">
                      Menunggu Pengiriman
                    </button>
                  </li>

                  <li className="my-2">
                    <button onClick={() => filterDeal('riwayat-transaksi')} className="text-teal-600 hover:text-teal-700">
                      Riwayat Transaksi
                    </button>
                  </li>
                  <img src={MyCartIllus} alt="My Cart Illustration" className="w-full" />
                </ul>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 h-full min-w-full overflow-y-auto ">
                  {/* <!-- TABLE MyDeals - START --> */}
                  <div className="flex flex-col">
                    <div className="w-full">
                      <div className=" align-middle inline-block min-w-full ">
                        <PembeliMyDealsTable mockDeals={mockDeals} changeMode={changeMode} />
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

export default PembeliMyDeals;
