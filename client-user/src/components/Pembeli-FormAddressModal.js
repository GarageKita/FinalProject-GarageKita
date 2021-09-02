import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editAddress, postAddress } from '../store/slices/addressSlice';
import { allCitiesInProvince } from '../store/slices/ongkirSlice';

function FormAddressModal(props) {
  const { triggerFormModal, formType, provinces, addressProp, closeModal } = props;

  const dispatch = useDispatch();

  const { citiesInProvince } = useSelector((state) => state.ongkir);

  const [address, setAddress] = useState('');
  const [province_id, setProvinceId] = useState('');
  const [province, setProvince] = useState('');
  const [city_id, setCityId] = useState('');
  const [city_name, setCityName] = useState('');

  useEffect(() => {
    if (formType === 'put') {
      setAddress(addressProp.address);
      setProvinceId(addressProp.province_id);
      setCityId(addressProp.city_id);
      provinces.forEach((el) => {
        if (el.province_id == addressProp.province_id) {
          setProvince(el.province);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (citiesInProvince.length > 0 && addressProp) {
      citiesInProvince.forEach((el) => {
        if (el.city_id == addressProp.city_id) {
          setCityName(el.city_name);
        }
      });
    }
  }, [citiesInProvince]);

  useEffect(() => {
    if (province_id) {
      dispatch(allCitiesInProvince(province_id));
    }
  }, [province, province_id, dispatch]);

  const provinceHandler = (e) => {
    const province = provinces.find((el) => el.province === e.target.value);
    setProvinceId(province.province_id);
  };

  const cityHandler = (e) => {
    const city = citiesInProvince.find((el) => el.city_name === e.target.value);
    setCityId(city.city_id);
  };

  const submitPostAddress = async (e, addressId) => {
    e.preventDefault();
    if (addressId) {
      const { payload, error } = await dispatch(
        editAddress({
          id: addressId,
          payload: {
            address,
            province_id,
            city_id,
          },
        })
      );
      if (!error) {
        closeModal();
      }
    } else {
      const { payload, error } = await dispatch(
        postAddress({
          payload: {
            address,
            province_id,
            city_id,
          },
        })
      );
      if (!error) {
        closeModal();
      }
    }
  };

  if (formType === 'put') {
    return (
      <React.Fragment>
        <div className="relative fixed z-10 inset-0 overflow-y-auto px-80" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Edit Alamat</p>

              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-8 py-5 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Alamat Lengkap
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 ">
                        <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                          Provinsi
                        </label>
                        <select
                          name="province"
                          id="province"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                          onChange={(e) => provinceHandler(e)}
                        >
                          <option selected disabled>
                            -- pilih provinsi --
                          </option>
                          {provinces.map((el, i) => {
                            return (
                              <option selected={province == el.province && true} key={i}>
                                {el.province}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 ">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          Kota
                        </label>
                        <select
                          name="city"
                          id="city"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                          onChange={(e) => cityHandler(e)}
                        >
                          <option selected disabled>
                            -- pilih kota --
                          </option>
                          {citiesInProvince.length > 0 &&
                            citiesInProvince.map((el, i) => {
                              return (
                                <option selected={city_name == el.city_name && true} key={i}>
                                  {el.city_name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="bg-white px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                  onClick={(e) => submitPostAddress(e, addressProp.id)}
                >
                  Submit Edit
                </button>

                <button
                  onClick={() => triggerFormModal()}
                  type="button"
                  className="transition duration-150 ease-in-out mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (formType === 'post') {
    return (
      <React.Fragment>
        <div className="fixed z-10 inset-0 overflow-y-auto px-80" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Tambah Alamat</p>

              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-8 py-5 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Alamat Lengkap
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 ">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          Kota
                        </label>
                        <select
                          name="city"
                          id="city"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                          onChange={(e) => provinceHandler(e)}
                        >
                          <option selected disabled>
                            -- pilih provinsi --
                          </option>
                          {provinces.map((el, i) => {
                            return <option key={i}>{el.province}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 ">
                        <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                          Provinsi
                        </label>
                        <select
                          name="province"
                          id="province"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                          onChange={(e) => cityHandler(e)}
                        >
                          <option selected disabled>
                            -- pilih kota --
                          </option>
                          {citiesInProvince.length > 0 &&
                            citiesInProvince.map((el, i) => {
                              return <option key={i}>{el.city_name}</option>;
                            })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="bg-white px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                  onClick={(e) => submitPostAddress(e)}
                >
                  Submit alamat baru
                </button>

                <button
                  onClick={() => triggerFormModal()}
                  type="button"
                  className="transition duration-150 ease-in-out mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Kembali ke MyAddress
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } 
}

export default FormAddressModal;
