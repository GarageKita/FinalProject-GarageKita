import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PenjualLoggedInNavbar from '../components/Penjual-NavBar.js';
import FormProduct from '../pages/Penjual-FormProduct.js';
import KategoriFilter from '../components/KategoriFilter.js';
import RequestOfferModal from '../components/Penjual-RequestOffer.js';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/slices/categorySlice.js';
import { getRequests } from '../store/slices/requestSlice.js';

function PenjualAllRequests() {
  const [currentPage, setCurrentPage] = useState('allProducts');
  const [modalStatus, setModalStatus] = useState(false);
  const [requestModalStatus, setRequestModalStatus] = useState(false);
  const [formType, setFormType] = useState('');
  const [request, setRequest] = useState({});

  const dispatch = useDispatch();

  const { requests, loading } = useSelector((state) => state.request);
  const { categories } = useSelector((state) => state.category);
  const { provinces } = useSelector((state) => state.ongkir);

  useEffect(() => {
    dispatch(getRequests());
    dispatch(getCategories());
  }, [dispatch]);

  //     const mockRequests = [
  //         {
  //            id: 1,
  //            name: 'HP Xiaomi Redmi' ,
  //            budget: 1800000,
  //            description: 'Dicari: kondisi tampilan 80% ke atas, fungsionalitas 100%. Retak bocel sedikit nggak masalah yg penting berfungsi baik seperti baru. Prioritas warna hitam/abu.',
  //            qty: 1,
  //            consumer_id: 20,
  //            category:
  //            {
  //              id: 2,
  //              name: 'Handphone & Tablet'
  //            }
  //         },
  //         {
  //            id: 2,
  //            name: 'Casio F-91W' ,
  //            budget: 250000,
  //            description: 'Tampilan mulus 90%, harus masih berfungsi baik. Warna apa aja.',
  //            qty: 2,
  //            consumer_id: 20,
  //            category:
  //            {
  //              id: 1,
  //              name: 'Elektronik'
  //            }
  //        },
  //         {
  //            id: 3,
  //            name: 'Toyota Yaris 2020' ,
  //            budget: 230000000,
  //            description: 'Kilometer sedikit, 95% kelihatan baru, warna apa aja tapi jangan kuning/ijo.',
  //            qty: 1,
  //            consumer_id: 89,
  //            category:
  //            {
  //              id: 4,
  //              name: 'Otomotif'
  //            }
  //        },
  //         {
  //            id: 4,
  //            name: 'Bumi Manusia Cetakan Pertama' ,
  //            budget: 100000,
  //            description: 'Semua halaman harus lengkap, bercak bercak dikit gpp asal ga boleh ada yang robek!',
  //            qty: 1,
  //            consumer_id: 47,
  //            category:
  //            {
  //              id: 6,
  //              name: 'Buku & Alat Tulis'
  //            }
  //        },
  // ]

  function openFormProduct(formToLoad) {
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
  }

  function closeModal() {
    setModalStatus((prev) => !prev);
  }

  function closeRequestModal() {
    setRequestModalStatus((prev) => !prev);
  }

  function openRequestToOffer(request) {
    setRequest(request);
    setRequestModalStatus((prev) => !prev);
  }

  return (
    <>
      <PenjualLoggedInNavbar />

      {modalStatus === true ? (
        <FormProduct
          openFormProduct={openFormProduct}
          categories={categories}
          provinces={provinces}
          formType={formType}
          closeModal={closeModal}
        ></FormProduct>
      ) : null}

      {requestModalStatus === true ? (
        <RequestOfferModal openRequestToOffer={openRequestToOffer} request={request} closeRequestModal={closeRequestModal} categories={categories} />
      ) : null}

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-rust-700">
                Mode Penjual: <span className="font-normal">All Requests</span>
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
                        onClick={() => openFormProduct('post')}
                        className="text-rust-700 cursor-pointer w-40 bg-rust-200 hover:bg-rust-300 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-sm"
                      >
                        Buat Product baru
                      </a>
                    </a>

                    <li className="my-2">
                      <Link to="/products/myproducts" href="#" className="text-rust-600 hover:text-rust-700">
                        Daftar Product saya
                      </Link>
                    </li>

                    <li className="my-2">
                      <a href="#" className="text-rust-600 hover:text-rust-700">
                        Lihat Request tersedia
                      </a>
                    </li>
                  </ul>

                  {currentPage === 'myRequests' || currentPage === 'allProducts' ? <KategoriFilter categories={categories} /> : null}
                </form>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 h-full min-w-full pl-4 overflow-y-auto overflow-x-auto">
                  {/* <!-- Replace with your content --> */}

                  <div className="flex flex-col">
                    <div className="sm:-mx-6 lg:-mx-8">
                      <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Requests List</p>

                        {/* {!loading && requests.map(request => ( */}
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-rust-100">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                  Nama & Budget
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                  Deskripsi
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                  Jumlah
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                  Kategori
                                </th>
                                <th scope="col" className="px-8 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                                  Actions
                                </th>
                              </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                              {!loading &&
                                requests.map((request, index) => {
                                  return (
                                    <tr key={request.id}>
                                      <td className="px-2 py-4 leading-3">
                                        <div className="flex text-left">
                                          <div className="ml-4">
                                            <a
                                              onClick={() => openRequestToOffer(request)}
                                              className="cursor-pointer text-sm font-bold text-rust-600 hover:text-rust-500"
                                            >
                                              {request.name}
                                            </a>
                                            <div className="text-sm mt-1 text-gray-500">Rp{request.budget.toLocaleString('id-ID')}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-wrap text-left ">
                                        <div className="text-xs text-gray-500">{request.description}</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{request.qty}</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                                          {request.Category && request.Category.name}
                                        </span>
                                      </td>
                                      <td className=" whitespace-nowrap text-center text-sm">
                                        <a
                                          onClick={() => openRequestToOffer(request)}
                                          className="text-white rounded-md bg-rust-600 px-4 py-2 cursor-pointer hover:bg-rust-500 transition duration-150 ease-in-out my-1 font-medium"
                                        >
                                          Berikan Offer
                                        </a>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                        {/* ))} */}
                      </div>
                    </div>
                  </div>

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

export default PenjualAllRequests;
