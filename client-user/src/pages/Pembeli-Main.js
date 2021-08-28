import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoggedInNavbar from '../components/Pembeli-NavBar.js';
import FormRequest from '../pages/Pembeli-FormRequest.js';
import PembeliMyRequest from '../components/Pembeli-MyRequest.js';
import KategoriFilter from '../components/KategoriFilter.js';

import { getMyRequests } from '../store/slices/requestSlice.js';
import { getCategories } from '../store/slices/categorySlice';

function PembeliMain() {
  const [currentPage, setCurrentPage] = useState('myRequests');
  const [modalStatus, setModalStatus] = useState(false);
  const [formType, setFormType] = useState('');
  const [requestToEdit, setRequestToEdit] = useState({});

  const dispatch = useDispatch();

  const { myRequests } = useSelector((state) => state.request);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getMyRequests());
    dispatch(getCategories());
  }, [dispatch]);

  function openFormRequest(formToLoad, request) {
    if (request) setRequestToEdit(request);
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
  }

  function closeModal() {
    setModalStatus((prev) => !prev);
  }

  function changePage(pageName) {
    setCurrentPage(pageName);
  }

  return (
    <>
      <LoggedInNavbar />

      {modalStatus === true ? (
        <FormRequest
          openFormRequest={openFormRequest}
          categories={categories}
          formType={formType}
          closeModal={closeModal}
          request={requestToEdit}
        ></FormRequest>
      ) : null}

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">
                Mode Pembeli: <span className="font-normal">MyRequests</span>
              </h1>

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

                  {myRequests ? <PembeliMyRequest openFormRequest={openFormRequest} requestList={myRequests} changePage={changePage} /> : null}

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
