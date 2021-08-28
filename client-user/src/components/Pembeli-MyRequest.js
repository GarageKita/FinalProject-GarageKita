import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRequest, getRequestById } from '../store/slices/requestSlice';

import DeleteModal from '../components/Pembeli-DeleteModal.js';
import { getOffersByRequestId } from '../store/slices/offerSlice';

function PembeliMyRequest(props) {
  const { openFormRequest, requestList, changePage } = props;

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

  return (
    <React.Fragment>
      {deleteModal === true ? <DeleteModal openDeleteRequest={openDeleteRequest} id={requestIdToDelete} /> : null}

      <div className="flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Request saya</p>

            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-teal-100">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Nama & Budget
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Jumlah
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th scope="col" className="px-8 py-3 text-left text-sm font-bold text-teal-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {requestList.map((request, index) => {
                    return (
                      <tr key={request.id}>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <div className="flex text-left">
                            <div className="ml-4">
                              <Link
                                to={`/requests/${request.id}`}
                                className="cursor-pointer text-sm font-bold text-teal-600 hover:text-teal-500"
                                onClick={() => getRequestDetail(request.id)}
                              >
                                {request.name}
                              </Link>
                              <div className="text-sm text-gray-500">Rp {request.budget.toLocaleString('id-ID')}</div>
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
                            {request.Category.name}
                          </span>
                        </td>
                        <td className="flex flex-col px-6 py-4 whitespace-nowrap text-center text-sm">
                          <Link
                            to={`/requests/${request.id}`}
                            className="text-teal-600 hover:text-teal-400 my-2 font-bold"
                            onClick={() => getRequestDetail(request.id)}
                          >
                            Lihat Tawaran
                          </Link>
                          <a
                            onClick={() => openFormRequest('put', request)}
                            className="text-gray-500 cursor-pointer hover:text-gray-400 my-1 font-medium"
                          >
                            Edit
                          </a>
                          <a
                            className="text-red-600 cursor-pointer hover:text-red-400 my-1 font-medium"
                            onClick={() => openDeleteRequest(request.id)}
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
    </React.Fragment>
  );
}

export default PembeliMyRequest;