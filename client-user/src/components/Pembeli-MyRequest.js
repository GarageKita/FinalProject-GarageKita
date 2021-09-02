import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getRequestById } from '../store/slices/requestSlice';

import DeleteModal from '../components/Pembeli-DeleteModal.js';
import { getOffersByRequestId } from '../store/slices/offerSlice';
import { getRequestById } from '../store/slices/requestSlice.js';

function PembeliMyRequest(props) {
  const { openFormRequest, requestList } = props;

  const [deleteModal, setDeleteModal] = useState(false);
  const [requestIdToDelete, setRequestIdToDelete] = useState('');

  const dispatch = useDispatch();

  function openDeleteRequest(id) {
    setRequestIdToDelete(id);
    setDeleteModal((prev) => !prev);
  }

  const getRequestDetail = (requestId) => {
    dispatch(getRequestById(requestId));
    dispatch(getOffersByRequestId(requestId));
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {deleteModal === true ? <DeleteModal openDeleteRequest={openDeleteRequest} id={requestIdToDelete} /> : null}

      <div className="flex flex-col mb-48">
        <div className=" w-full ">
          <div className=" align-middle min-w-full ">
            <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Request saya</p>

            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-teal-100">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Nama & Budget
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Jumlah Offer
                    </th>
                    <th scope="col" className="px-6 py-3 text-center whitespace-nowrap text-sm font-bold text-teal-600 uppercase tracking-wider">
                      In-Budget
                      <br />
                      <span className="lowercase font-normal text-xs tracking-normal">(Ada/Tidak)</span>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Jumlah Request
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {requestList.map((request, index) => {
                    return (
                      <tr key={request.id}>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <div className="flex ">
                            <div className="ml-4">
                              <Link
                                to={{
                                  pathname: `/requests/${request.id}`,
                                  state: {
                                    request: request,
                                  },
                                }}
                                className="cursor-pointer text-sm font-bold text-teal-600 hover:text-teal-500"
                                onClick={() => getRequestDetail(request.id)}
                              >
                                {request.name}
                              </Link>
                              <div className="text-sm text-gray-500">Rp{request.budget.toLocaleString('id-ID')}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-2 whitespace-wrap  ">
                          <div className="text-sm text-gray-500">
                            {request.Offers && request.Offers.filter((offer) => offer.status != 'rejected').length}
                          </div>
                        </td>

                        {request.Offers &&
                        request.Offers.filter((offer) => offer.status != 'rejected').filter((offer) => offer.offered_price <= request.budgetCeil)
                          .length > 0 ? (
                          <td className="px-6 py-2 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-teal-600">Ada</span>
                          </td>
                        ) : (
                          <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">Tidak</span>
                          </td>
                        )}

                        <td className="px-6 py-2 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{request.qty}</div>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                            {request.Category.name}
                          </span>
                        </td>
                        <td className="flex flex-row items-center align-middle justify-evenly pt-5 whitespace-nowrap text-center text-sm">
                          <Link
                            to={{
                              pathname: `/requests/${request.id}`,
                              state: {
                                request: request,
                              },
                            }}
                            className="text-teal-600 hover:text-teal-400 my-1 font-bold"
                            onClick={() => getRequestDetail(request.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                              />
                            </svg>
                            {/* Lihat Tawaran */}
                          </Link>

                          <a
                            onClick={() => openFormRequest('put', request)}
                            className="text-gray-500 cursor-pointer hover:text-gray-400 my-1 font-medium"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            className="text-red-600 cursor-pointer hover:text-red-400 my-1 font-medium"
                            onClick={() => openDeleteRequest(request.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PembeliMyRequest;
