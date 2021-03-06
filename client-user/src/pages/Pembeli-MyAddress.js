import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoggedInNavbar from '../components/Pembeli-NavBar.js';
import DeleteAddressModal from '../components/Pembeli-DeleteAddressModal.js';
import FormAddressModal from '../components/Pembeli-FormAddressModal.js';
import { getMyAddress } from '../store/slices/addressSlice.js';
import { allProvinces } from '../store/slices/ongkirSlice.js';

function PembeliMyAddresses() {
  const [formAddress, setFormAddress] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState(false);

  const [formType, setFormType] = useState('put');
  const [addressToEdit, setAddressToEdit] = useState({});

  const { myAddresses, myCityId } = useSelector((state) => state.address);
  const { provinces } = useSelector((state) => state.ongkir);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAddress());
    dispatch(allProvinces());
  }, [dispatch]);

  useEffect(() => {
    console.log(myAddresses);
  }, [myAddresses]);

  // function triggerFormModal(formToLoad, request) {
  //   if (request) setRequestToEdit(request);
  //   setFormType(formToLoad);
  //   setFormAddress((prev) => !prev);
  // }

  function triggerFormModal(formToLoad, address) {
    if (address) {
      setAddressToEdit(address);
    }
    setFormType(formToLoad);
    setFormAddress((prev) => !prev);
  }

  function triggerDeleteModal() {
    setDeleteAddress((prev) => !prev);
  }

  function closeModal() {
    setFormAddress((prev) => !prev);
  }

  return (
    <>
      <LoggedInNavbar />

      {formAddress === true ? (
        <FormAddressModal
          triggerFormModal={triggerFormModal}
          formType={formType}
          provinces={provinces}
          addressProp={addressToEdit}
          closeModal={closeModal}
        />
      ) : null}
      {deleteAddress === true ? <DeleteAddressModal triggerDeleteModal={triggerDeleteModal} /> : null}

      <div className="bg-white mb-48">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">
                Mode Pembeli: <span className="font-normal">MyAddresses</span>
              </h1>

              <div className="flex flex-row justify-between pt-2 space-x-1 text-teal-600 hover:text-teal-400 transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <button
                  onClick={() => triggerFormModal('post')}
                  className="inline-flex justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Tambah alamat baru
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* <!-- Product grid --> */}
                <div className="lg:col-span-6 px-10 h-full min-w-full overflow-y-auto">
                  {/* <!-- Replace with your content --> */}

                  <div className="flex flex-col">
                    <div className="sm:-mx-6 lg:-mx-8">
                      <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-teal-100">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Alamat Lengkap
                                </th>
                                {/* <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Kota
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Provinsi
                                </th> */}
                                <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-teal-600 uppercase tracking-wider">
                                  Actions
                                </th>
                              </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                              {/* ADDRESS LOOP - START */}
                              {myAddresses.length > 0 &&
                                myAddresses.map((el, index) => {
                                  return (
                                    <tr>
                                      <td className="px-2 py-2 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{el.address}</div>
                                      </td>

                                      {/* <td className="px-6 py-2 whitespace-wrap  ">
                                  <div className="text-sm text-gray-500">Kota Apa</div>
                                </td>

                                <td className="px-6 py-2 whitespace-nowrap">
                                  <div className="text-sm text-gray-500">Provinsi Gitu</div>
                                </td> */}

                                      <td className="flex flex-row justify-center my-2 space-x-2 py-2 whitespace-nowrap text-center text-sm">
                                        <a
                                          onClick={() => triggerFormModal('put', el)}
                                          className="text-gray-500 cursor-pointer hover:text-gray-400  font-medium"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                          </svg>
                                          {/* Edit */}
                                        </a>
                                        <a
                                          className="text-red-600 cursor-pointer hover:text-red-400 font-medium"
                                          onClick={() => triggerDeleteModal()}
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                          </svg>
                                          {/* Hapus */}
                                        </a>
                                      </td>
                                    </tr>
                                  );
                                })}
                              {/* ADDRESS LOOP - END */}
                            </tbody>
                          </table>
                        </div>
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

export default PembeliMyAddresses;
