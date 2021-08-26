import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoggedInNavbar from '../components/LoggedIn-Nav.js';
import FormRequest from '../pages/Pembeli-FormRequest.js';
import PembeliMyRequest from '../components/Pembeli-MyRequest.js';
import KategoriFilter from '../components/KategoriFilter.js';

function PembeliMain() {
  const [currentPage, setCurrentPage] = useState('myRequests');
  const [modalStatus, setModalStatus] = useState(false);
  const [formType, setFormType] = useState('');

  const categories = ['Elektronik', 'Handphone & Tablet', 'Komputer', 'Otomotif', 'Mainan & Hobi', 'Buku & Alat Tulis', 'Kesehatan', 'Lain-lain'];

  const mockRequests = [
    {
      id: 1,
      name: 'HP Xiaomi Redmi',
      budget: 1800000,
      description:
        'Dicari: kondisi tampilan 80% ke atas, fungsionalitas 100%. Retak bocel sedikit nggak masalah yg penting berfungsi baik seperti baru. Prioritas warna hitam/abu.',
      qty: 1,
      consumer_id: 20,
      category: {
        id: 2,
        name: 'Handphone & Tablet',
      },
    },
    {
      id: 2,
      name: 'Casio F-91W',
      budget: 250000,
      description: 'Tampilan mulus 90%, harus masih berfungsi baik. Warna apa aja.',
      qty: 2,
      consumer_id: 20,
      category: {
        id: 1,
        name: 'Elektronik',
      },
    },
  ];

  useEffect(() => {}, [currentPage]);

  function openFormRequest(formToLoad) {
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
  }

  function changePage(pageName) {
    setCurrentPage(pageName);
  }

  return (
    <>
      <LoggedInNavbar />

      {modalStatus === true ? <FormRequest openFormRequest={openFormRequest} categories={categories} formType={formType}></FormRequest> : null}

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">Mode Pembeli</h1>

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
                <form className="hidden lg:block">
                  <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                    <a className="mt-2 mb-4">
                      <a
                        onClick={() => openFormRequest('post')}
                        className="text-teal-700 cursor-pointer w-40 bg-teal-200 hover:bg-teal-300 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-sm"
                      >
                        Buat Request baru
                      </a>
                    </a>

                    <li className="my-2">
                      <a onClick={() => changePage('myRequests')} href="#" className="text-teal-600 hover:text-teal-700">
                        Daftar Request saya
                      </a>
                    </li>

                    <li className="my-2">
                      <Link to="/products" className="text-teal-600 hover:text-teal-700">
                        Lihat Product tersedia
                      </Link>
                    </li>
                  </ul>

                  {currentPage === 'myRequests' || currentPage === 'allProducts' ? <KategoriFilter categories={categories} /> : null}
                </form>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 h-full min-w-full pl-4 overflow-y-auto overflow-x-auto">
                  {/* <!-- Replace with your content --> */}

                  {currentPage === 'myRequests' ? (
                    <PembeliMyRequest openFormRequest={openFormRequest} requestList={mockRequests} changePage={changePage} />
                  ) : null}

                  {/* <!-- /End replace --> */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default PembeliMain;
