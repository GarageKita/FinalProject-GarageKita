import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PenjualLoggedInNavbar from '../components/Penjual-NavBar.js';
import DeleteOfferModal from '../components/Penjual-OfferDeleteModal.js';
import { editOffer } from '../store/slices/offerSlice.js';

function PembeliMain() {
  function dateFormatter(input_date) {
    // let dateOnly = (new Date(input_date.slice(0,10))).toDateString().split(' ')
    // let cleanDate = (`${dateOnly[2]} ${dateOnly[1]} ${dateOnly[3]}`).toUpperCase()
    // return cleanDate
    let cleanTime = new Date(input_date).toGMTString();
    return cleanTime;
  }

  const [offered_price, setOfferedPrice] = useState('');
  const [deleteOffer, setDeleteOffer] = useState(false);
  const [offerIdToDelete, setOfferIdToDelete] = useState({});

  const dispatch = useDispatch();

  const { offerById: offer, loading } = useSelector((state) => state.offer);

  useEffect(() => {
    console.log(offer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setOfferedPrice(offer.offered_price);
    }
    setOfferedPrice(offer.offered_price);
  }, [offer]);

  function triggerDeleteModal(e, offerId) {
    e.preventDefault();
    setOfferIdToDelete(offerId);
    setDeleteOffer((prev) => !prev);
  }

  function closeDeleteModal() {
    setDeleteOffer((prev) => !prev);
  }

  const submitEditOffer = async (e) => {
    e.preventDefault();
    const { error } = await dispatch(
      editOffer({
        id: offer.id,
        payload: { offered_price, product_id: offer.product_id },
      })
    );
    if (!error) {
      setOfferedPrice(0);
    }
  };

  return (
    <>
      <PenjualLoggedInNavbar />

      {deleteOffer ? (
        <DeleteOfferModal triggerDeleteModal={triggerDeleteModal} offerId={offerIdToDelete} closeDeleteModal={closeDeleteModal} />
      ) : null}

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-rust-700">
                Mode Pembeli: <span className="font-normal">MyOffers</span>
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
              <div className="grid grid-cols-1 ">
                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 h-full w-full min-h-screen ">
                  <div className="flex flex-col grid-cols-2">
                    <div className="sm:-mx-6 lg:-mx-8">
                      <div className="align-middle  sm:px-6 lg:px-8">
                        <div className="flex flex-row align-top mb-5 h-6 w-60 max-w-max text-rust-600 hover:text-rust-400 cursor-pointer transition duration-150 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-1 mr-2 h-5 w-5 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          <Link to="/Offers/myOffers" className="mb-3 font-semibold text-lg">
                            Daftar MyOffers saya
                          </Link>
                        </div>

                        {/* <!-- CARD Individual MyOffers - START --> */}

                        <section className="flex flex-row ">
                          {/* <!-- PRODUCT CARD - START --> */}
                          <div className="w-full relative flex text-left items-center bg-white pt-14 pb-8  rounded-xl border-gray-200 border border-solid sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                              <div className="aspect-w-2 aspect-h-3 shadow-lg rounded-lg bg-gray-100  sm:col-span-4 lg:col-span-5">
                                <img src={offer.Product && offer.Product.image_url} alt="Product shot" className="object-center object-cover" />
                              </div>

                              <div className="flex flex-col justify-between sm:col-span-8 lg:col-span-7">
                                <div>
                                  <h2 className="text-2xl cursor-pointer hover:text-gray-600 transition duration-150 ease-in-out font-bold text-gray-800 sm:pr-12">
                                    {offer.Product && offer.Product.name}
                                  </h2>

                                  <section aria-labelledby="information-heading" className="mt-1">
                                    <p className="mt-1 text-xs text-gray-500 font-normal">
                                      di-request oleh{' '}
                                      <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">
                                        Pembeli #{offer.Product && offer.Product.seller_id}
                                      </span>
                                    </p>

                                    <div className="mt-6">
                                      <p className="text-sm font-bold text-rust-600">Request Description</p>
                                      <p className="text-sm font-normal text-gray-500">{offer.Product && offer.Product.description}</p>
                                    </div>

                                    <div className="border-t border-solid border-gray-200 mt-6 pt-2">
                                      <div className="mt-3">
                                        <p className="text-lg font-bold text-gray-800">Detil Offer kamu</p>
                                      </div>
                                      {/* <div className="mt-3">
                                        <p className="text-sm font-bold text-rust-600">
                                          Jumlah Offer: <span className="text-sm font-normal text-gray-500">1</span>
                                        </p>
                                      </div> */}
                                      <div className="mt-3">
                                        <p className="text-sm font-bold text-rust-600">
                                          Harga Offer:{' '}
                                          <span className="text-sm font-normal text-gray-500">
                                            Rp{offer.offered_price && offer.offered_price.toLocaleString('id-ID')}
                                          </span>
                                        </p>
                                      </div>
                                      <div className="mt-3">
                                        <p className="text-sm font-bold text-rust-600">
                                          Waktu Offer:{' '}
                                          <span className="text-sm font-normal text-gray-500">{dateFormatter('2021-08-23T13:39:35.534Z')}</span>
                                        </p>
                                      </div>
                                      <div className="mt-3">
                                        <p className="text-sm font-bold text-rust-600">
                                          Status Offer:
                                          <span className="text-sm pl-2 text-gray-500">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-600">
                                              {offer.status}
                                            </span>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- PRODUCT CARD - END --> */}

                          {/* <!-- ACTIONS - START --> */}
                          <section className="px-6 py-5 rounded-xl bg-gray-100 ml-4">
                            {/* EDIT HARGA Offer */}
                            <div>
                              <section aria-labelledby="options-heading">
                                <form>
                                  <div className="flex flex-row justify-between align-top">
                                    <p className="text-left mb-3 text-md font-semibold">Edit harga Offer</p>
                                    <p className="text-right text-xs mt-1 font-semibold text-rust-600">Edit berhasil!</p>
                                  </div>
                                  <input
                                    type="number"
                                    className="focus:outline-none focus:ring-1 focus:ring-offset-none focus:ring-rust-500 px-6 py-3 w-full rounded-md border border-solid border-gray-300"
                                    placeholder="Offer baru"
                                    value={offered_price}
                                    onChange={(e) => setOfferedPrice(e.target.value)}
                                  />
                                  <button
                                    type="submit"
                                    className="mt-4 w-full bg-rust-600 border border-transparent rounded-md py-2 px-8 flex items-center justify-center text-sm font-medium text-white hover:bg-rust-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rust-500"
                                    onClick={(e) => submitEditOffer(e)}
                                  >
                                    Submit harga Offer baru
                                  </button>
                                  <p className=" text-center mt-1 text-xs text-gray-500 font-normal">
                                    Email notifikasi perubahan harga Offer akan dikirim ke Penjual.
                                  </p>
                                </form>
                              </section>
                            </div>

                            {/* DELETE Offer */}
                            <div>
                              <section aria-labelledby="options-heading" className="border-t border-solid border-gray-200 pt-4 mt-6">
                                <form>
                                  <p className="text-left mb-3 text-md font-semibold text-red-500">Hapus Offer</p>
                                  <p className="text-left mt-1 text-sm text-gray-500 font-normal">Data Offer yang dihapus tidak bisa kembali.</p>

                                  <button
                                    onClick={(e) => triggerDeleteModal(e, offer.id)}
                                    type="submit"
                                    className="mt-4 w-full bg-gray-300 border border-transparent rounded-md py-2 px-8 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rust-500"
                                  >
                                    Hapus Offer
                                  </button>
                                  <p className=" text-center mt-1 text-xs text-gray-500 font-normal">
                                    Email notifikasi penghapusan harga Offer akan dikirim ke Penjual.
                                  </p>
                                </form>
                              </section>
                            </div>
                          </section>

                          {/* <!-- ACTIONS - END --> */}
                        </section>

                        {/* <!-- CARD Individual MyOffers - END --> */}
                      </div>
                    </div>
                  </div>
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
