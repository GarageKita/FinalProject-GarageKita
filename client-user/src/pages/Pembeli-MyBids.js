import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoggedInNavbar from '../components/Pembeli-NavBar.js';
import DeleteModal from '../components/Pembeli-BidDeleteModal.js';
import EditFormBid from '../pages/Pembeli-FormBid.js';
import FormRequest from '../pages/Pembeli-FormRequest.js';

import CekOngkirModal from '../components/Pembeli-CekOngkirModal.js';

import { getCategories } from '../store/slices/categorySlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getBidById, getMyBids } from '../store/slices/bidSlice.js';
import { getMyAddress } from '../store/slices/addressSlice.js';

function PembeliMyBids() {
  const [deleteBid, setDeleteBid] = useState(false);
  const [editBid, setEditBid] = useState(false);
  const [bidToEdit, setBidToEdit] = useState({});
  const [bidIdToDelete, setBidIdToDelete] = useState({});
  const [bidToCekOngkir, setBidToCekOngkir] = useState('');

  const [currentPage, setCurrentPage] = useState('myBids');
  const [modalStatus, setModalStatus] = useState(false);
  const [statusOngkirModal, setStatusOngkirModal] = useState(false);

  const [formType, setFormType] = useState('');

  const dispatch = useDispatch();

  const { myBids } = useSelector((state) => state.bid);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getMyAddress());
    dispatch(getMyBids());
    dispatch(getCategories());
  }, []);

  function triggerDeleteModal(bidId) {
    setBidIdToDelete(bidId);
    setDeleteBid((prev) => !prev);
  }

  function triggerEditModal(bid) {
    setBidToEdit(bid);
    setEditBid((prev) => !prev);
  }

  function getBidDetail(bidId) {
    dispatch(getBidById(bidId));
  }

  function openFormRequest(formToLoad) {
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
  }

  function changePage(pageName) {
    setCurrentPage(pageName);
  }

  function closeModal() {
    setModalStatus((prev) => !prev);
  }

  function closeDeleteModal() {
    setDeleteBid((prev) => !prev);
  }
  function openCekOngkirModal(bid) {
    console.log(bid);
    setBidToCekOngkir(bid);
    setStatusOngkirModal((prev) => !prev);
  }

  //   const categories = ['Elektronik', 'Handphone & Tablet', 'Komputer', 'Otomotif', 'Mainan & Hobi', 'Buku & Alat Tulis', 'Kesehatan', 'Lain-lain'];

  //   const mockBids = [
  //     {
  //       id: 1,
  //       offered_price: 180000,
  //       consumer_id: 88,
  //       qty: 1,
  //       product_id: 682,
  //       status: 'Menunggu Penjual',
  //       createdAt: '2021-08-23T12:36:48.016Z',
  //       updatedAt: '2021-08-23T13:40:40.146Z',
  //     },
  //     {
  //       id: 2,
  //       offered_price: 180000,
  //       consumer_id: 88,
  //       qty: 1,
  //       product_id: 921,
  //       status: 'Menunggu Penjual',
  //       createdAt: '2021-07-19T12:36:48.016Z',
  //       updatedAt: '2021-07-19T13:40:40.146Z',
  //     },
  //   ];

  return (
    <>
      <LoggedInNavbar />

      {deleteBid ? <DeleteModal triggerDeleteModal={triggerDeleteModal} bidId={bidIdToDelete} closeDeleteModal={closeDeleteModal} /> : null}

      {editBid ? <EditFormBid triggerEditModal={triggerEditModal} bid={bidToEdit} /> : null}

      {statusOngkirModal === true ? <CekOngkirModal openCekOngkirModal={openCekOngkirModal} offer={bidToCekOngkir} /> : null}

      {modalStatus === true ? (
        <FormRequest openFormRequest={openFormRequest} categories={categories} formType={formType} closeModal={closeModal}></FormRequest>
      ) : null}

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">
                Mode Pembeli: <span className="font-normal">MyBids</span>
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
                      <Link to="/myrequests" href="#" className="text-teal-600 hover:text-teal-700">
                        Daftar Request saya
                      </Link>
                    </li>

                    <li className="my-2">
                      <Link to="/products" className="text-teal-600 hover:text-teal-700">
                        Lihat Product tersedia
                      </Link>
                    </li>
                  </ul>
                </form>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 h-full min-w-full overflow-y-auto ">
                  {/* <!-- TABLE MyBids - START --> */}

                  <div className="flex flex-col mb-48">
                    <div className=" w-full ">
                      <div className=" align-middle min-w-full ">
                        <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Bids saya</p>

                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-teal-100">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Nama Product
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Harga Bid
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Jumlah
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Quick Actions
                                </th>
                              </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                              {myBids.map((bid, index) => {
                                if (bid.status != 'deal') {
                                  return (
                                    <tr key={bid.id}>
                                      <td className="whitespace-nowrap py-3">
                                        <div className="flex justify-center">
                                          <div>
                                            <Link
                                              to={{
                                                pathname: `/bids/${bid.id}`,
                                                state: {
                                                  bid: bid,
                                                },
                                              }}
                                              className="cursor-pointer text-sm font-bold text-teal-600 hover:text-teal-500"
                                              onClick={() => getBidDetail(bid.id)}
                                            >
                                              {bid.Product && bid.Product.name}
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="whitespace-wrap">
                                        <div className="text-xs text-gray-500">Rp{bid.offered_price.toLocaleString('id-ID')}</div>
                                      </td>
                                      <td className="whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{bid.qty}</div>
                                      </td>
                                      <td className="whitespace-nowrap text-sm text-gray-500">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                                          {bid.status}
                                        </span>
                                      </td>

                                      {/* KALAU BELUM ACCEPTED OLEH PENJUAL, MASUK SINI */}

                                      {bid.status != 'accepted' ? (
                                        <td className="flex flex-row justify-center align-middle pt-3 space-x-4 whitespace-nowrap text-sm">
                                          <a
                                            onClick={() => triggerEditModal(bid)}
                                            className="text-gray-500 cursor-pointer hover:text-gray-400 font-medium"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              class="h-6 w-6"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                              />
                                            </svg>
                                            {/* Edit */}
                                          </a>
                                          <a
                                            onClick={() => triggerDeleteModal(bid.id)}
                                            className="text-red-600 hover:text-red-400 font-medium cursor-pointer"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              class="h-6 w-6"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                              />
                                            </svg>
                                            {/* Hapus */}
                                          </a>
                                        </td>
                                      ) : (
                                        // {/* KALAU SUDAH ACCEPTED OLEH PENJUAL, MASUK SINI */}
                                        <td className="flex flex-row pt-2 justify-center align-middle m-auto space-x-4 whitespace-nowrap text-sm">
                                          <a
                                            onClick={() => openCekOngkirModal(bid)}
                                            className="bg-teal-600 cursor-pointer rounded-lg text-xs px-3 py-2 font-medium text-teal-50 hover:bg-teal-500 transition duration-150 ease-in-out"
                                          >
                                            Cek Ongkir
                                          </a>
                                          <a
                                            onClick={() => triggerDeleteModal(bid.id)}
                                            className="bg-gray-200 cursor-pointer rounded-lg text-xs px-3 py-2 font-medium text-gray-500 hover:bg-gray-300 transition duration-150 ease-in-out"
                                          >
                                            Batalkan
                                          </a>
                                        </td>
                                      )}
                                    </tr>
                                  );
                                }
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- TABLE MyBids - END --> */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default PembeliMyBids;
