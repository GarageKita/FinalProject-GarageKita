import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoggedInNavbar from '../components/Pembeli-NavBar.js';
import KategoriFilter from '../components/KategoriFilter.js';
import DeleteModal from '../components/Pembeli-BidDeleteModal.js';
import EditFormBid from '../pages/Pembeli-FormBid.js';
import FormRequest from '../pages/Pembeli-FormRequest.js';
import { getCategories } from '../store/slices/categorySlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getBidById, getMyBids } from '../store/slices/bidSlice.js';

function PembeliMyBids() {
  const [deleteBid, setDeleteBid] = useState(false);
  const [editBid, setEditBid] = useState(false);
  const [bidToEdit, setBidToEdit] = useState({});
  const [bidIdToDelete, setBidIdToDelete] = useState({});

  const [currentPage, setCurrentPage] = useState('myBids');
  const [modalStatus, setModalStatus] = useState(false);
  const [formType, setFormType] = useState('');
  const [requestToEdit, setRequestToEdit] = useState({});

  const dispatch = useDispatch();

  const { myBids } = useSelector((state) => state.bid);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getMyBids());
    dispatch(getCategories());
  }, [dispatch]);

  function triggerDeleteModal(bidId) {
    setBidIdToDelete(bidId);
    setDeleteBid((prev) => !prev);
  }

  function triggerEditModal(bid) {
    setBidToEdit(bid);
    setEditBid((prev) => !prev);
  }

  // function getBidDetail(bidId) {
  //   dispatch(getBidById(bidId));
  // }

  function openFormRequest(formToLoad, request) {
    if (request) setRequestToEdit(request);
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
  }

  function changePage(pageName) {
    setCurrentPage(pageName);
  }

  function closeModal() {
    setModalStatus((prev) => !prev);
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

      {/* {deleteBid ? <DeleteModal triggerDeleteModal={triggerDeleteModal} bidId={bidIdToDelete} /> : null}

      {editBid ? <EditFormBid triggerEditModal={triggerEditModal} bid={bidToEdit} /> : null} */}
      {deleteBid ? <DeleteModal triggerDeleteModal={triggerDeleteModal} /> : null}
      {editBid ? <EditFormBid triggerEditModal={triggerEditModal} /> : null}
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

                  <div className="flex flex-col">
                    <div className="sm:-mx-6 lg:-mx-8">
                      <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Bids saya</p>

                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-teal-100">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Nama Product
                                </th>
                                <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Harga Bid
                                </th>
                                <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Jumlah
                                </th>
                                <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Status
                                </th>
                                <th scope="col" className="pr-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Quick Actions
                                </th>
                              </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                              {myBids.map((bid, index) => {
                                return (
                                  <tr key={bid.id}>
                                    <td className="whitespace-nowrap py-3">
                                      <div className="flex text-left">
                                        <div className="ml-4">
                                          <Link
                                            to={{
                                              pathname: `/bids/${bid.id}`,
                                              state: {
                                                bid: bid,
                                              },
                                            }}
                                            className="cursor-pointer text-sm font-bold text-teal-600 hover:text-teal-500"
                                            // onClick={() => getBidDetail(bid.id)}
                                          >
                                            {bid.Product && bid.Product.name}
                                          </Link>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="whitespace-wrap text-left">
                                      <div className="text-xs text-gray-500">Rp{bid.offered_price.toLocaleString('id-ID')}</div>
                                    </td>
                                    <td className="whitespace-nowrap text-left">
                                      <div className="text-sm text-gray-500">{bid.qty}</div>
                                    </td>
                                    <td className="whitespace-nowrap text-left text-sm text-gray-500">
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                                        {bid.status}
                                      </span>
                                    </td>
                                    <td className="flex flex-row align-middle pt-3 space-x-4 whitespace-nowrap text-center text-sm">
                                      <a
                                        onClick={() => triggerEditModal(bid)}
                                        className="text-gray-500 cursor-pointer hover:text-gray-400 font-medium"
                                      >
                                        Edit
                                      </a>
                                      <a
                                        onClick={() => triggerDeleteModal(bid.id)}
                                        className="text-red-600 hover:text-red-400 font-medium cursor-pointer"
                                      >
                                        Hapus
                                      </a>
                                    </td>
                                  </tr>
                                );
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
