/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDeals } from '../store/slices/dealSlice';

import LoggedInNavbar from '../components/Pembeli-NavBar.js';
import KategoriFilter from '../components/KategoriFilter.js';

import PembeliMyDealsTable from '../components/Pembeli-MyDealsTable.js';

import MyCartIllus from '../imgs/svg/MyCart.svg';

// import DeleteModal from '../components/Pembeli-BidDeleteModal.js'
// import EditFormBid from '../pages/Pembeli-FormBid.js'

function PembeliMyDeals() {
  const dispatch = useDispatch();
  // const initDeal = useSelector((state) => state.deal);
  // const [ deleteBid, setDeleteBid ] = useState(false)
  // const [ editBid, setEditBid ] = useState(false)
  const [currentMode, setCurrentMode] = useState('pembeli');
  // const [mockDeals, setMockDeals] = useState([initDeal.dealsData]);
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

  const categories = ['Elektronik', 'Handphone & Tablet', 'Komputer', 'Otomotif', 'Mainan & Hobi', 'Buku & Alat Tulis', 'Kesehatan', 'Lain-lain'];

  // const mockDeals = [
  //     {
  //         "id": 6,
  //         "consumer_id": 5,
  //         "product_id": 1,
  //         "deal_price": 100000,
  //         "deal_qty": 1,
  //         "updatedAt": "2021-08-24T05:30:18.105Z",
  //         "createdAt": "2021-08-24T05:30:18.105Z",
  //         "payment_status": "awaiting"
  //     },
  //     {
  //         "id": 6,
  //         "consumer_id": 5,
  //         "product_id": 1,
  //         "deal_price": 100000,
  //         "deal_qty": 1,
  //         "updatedAt": "2021-08-24T05:30:18.105Z",
  //         "createdAt": "2021-08-24T05:30:18.105Z",
  //         "payment_status": "awaiting"
  //     },
  //     {
  //         "id": 6,
  //         "consumer_id": 5,
  //         "product_id": 1,
  //         "deal_price": 100000,
  //         "deal_qty": 1,
  //         "updatedAt": "2021-08-24T05:30:18.105Z",
  //         "createdAt": "2021-08-24T05:30:18.105Z",
  //         "payment_status": "awaiting"
  //     },

  // ]

  return (
    <>
      <LoggedInNavbar />
      {/* { deleteBid ? <DeleteModal triggerDeleteModal={triggerDeleteModal} /> : null }
            { editBid ? <EditFormBid triggerEditModal={triggerEditModal} /> : null } */}

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <div className="flex flex-row">
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg> */}
                <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">
                  Mode Pembeli: <span className="font-normal">MyDeals</span>
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
                {/* <form className="hidden lg:block"> */}
                <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                  {/* <a className="mt-2 mb-4"> */}
                  <button className="text-teal-600 hover:text-teal-700">
                    <strong>Menunggu Pembayaran</strong>
                  </button>
                  {/* </a> */}

                  <li className="my-2">
                    <a href="#" className="text-teal-600 hover:text-teal-700">
                      Dalam Pengiriman
                    </a>
                  </li>

                  <li className="my-2">
                    <a href="#" className="text-teal-600 hover:text-teal-700">
                      Menunggu Pengiriman
                    </a>
                  </li>

                  <li className="my-2">
                    <a href="#" className="text-teal-600 hover:text-teal-700">
                      Riwayat Transaksi
                    </a>
                  </li>
                  <img src={MyCartIllus} className="w-full" />
                </ul>

                {/* <KategoriFilter categories={categories} /> */}
                {/* </form> */}

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
