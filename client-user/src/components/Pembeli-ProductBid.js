import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBid } from '../store/slices/bidSlice';

function ProductBid(props) {
  const { openProductToBid, id, closeProductModal } = props;

  const [offered_price, setOfferedPrice] = useState('');

  const dispatch = useDispatch();
  const { productById: product, loading } = useSelector((state) => state.product);

  const submitBid = (e) => {
    e.preventDefault();
    dispatch(postBid({ productId: id, payload: { qty: 1, offered_price } }));
    closeProductModal();
  };

  return (
    <React.Fragment>
      <div className="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4">
          {/* <!--
                    Background overlay, show/hide based on modal state.

                    Entering: "ease-out duration-300"
                        From: "opacity-0"
                        To: "opacity-100"
                    Leaving: "ease-in duration-200"
                        From: "opacity-100"
                        To: "opacity-0"
                    --> */}
          <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"></div>

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
            &#8203;
          </span>

          {/* <!--
                    Modal panel, show/hide based on modal state.

                    Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        To: "opacity-100 translate-y-0 md:scale-100"
                    Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 md:scale-100"
                        To: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    --> */}
          <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
            <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                onClick={() => openProductToBid(null)}
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                  <img src={product.image_url} alt="Product shot" className="object-center object-cover" />
                </div>

                <div className="flex flex-col justify-between sm:col-span-8 lg:col-span-7">
                  <div>
                    <h2 className="text-2xl font-bold text-teal-600 sm:pr-12">{product.name}</h2>

                    <section aria-labelledby="information-heading" className="mt-1">
                      <p className="text-2xl text-gray-700">Rp{product.price && product.price.toLocaleString('id-ID')}</p>
                      <p className="mt-1 text-xs text-gray-500 font-normal">
                        oleh{' '}
                        <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">
                          Penjual #{product.seller_id}
                        </span>
                      </p>

                      <div className="mt-6">
                        <p className="text-sm font-bold text-teal-600">Product Description</p>
                        <p className="text-sm font-normal text-gray-500">{product.description}</p>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-bold text-teal-600">
                          Jumlah Stok: <span className="text-sm font-normal text-gray-500">{product.stock}</span>
                        </p>
                        <p className="text-sm font-bold text-teal-600">
                          Lokasi Product: <span className="text-sm font-normal text-gray-500">Bandung, Jawa Barat</span>
                        </p>
                      </div>
                    </section>
                  </div>

                  <div>
                    <section aria-labelledby="options-heading" className="mt-10">
                      <form>
                        <input
                          type="number"
                          className="focus:outline-none focus:ring-1 focus:ring-offset-none focus:ring-teal-500 px-6 py-3 w-full rounded-md border border-solid border-gray-300"
                          placeholder="Masukkan harga Bid untuk Product ini"
                          value={offered_price}
                          onChange={(e) => setOfferedPrice(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="mt-4 w-full bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                          onClick={(e) => submitBid(e)}
                        >
                          Submit Bid ke Penjual #{product.seller_id}
                        </button>
                        <p className=" text-center mt-1 text-xs text-gray-500 font-normal">
                          Setelah klik tombol Submit, harga Bid hanya bisa diedit lewat MyBids.
                        </p>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductBid;
