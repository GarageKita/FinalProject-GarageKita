import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postOffer } from '../store/slices/offerSlice';
import FormProduct from '../pages/Penjual-FormProduct.js';
// import { getProductById } from '../store/slices/productSlice';

function RequestOffer(props) {
  const { request, closeRequestModal, categories } = props;

  // const { openRequestToOffer, mockRequests } = props;
  const [modalStatus, setModalStatus] = useState(false);
  const [formType, setFormType] = useState('');

  const [offered_price, setOfferedPrice] = useState('');
  const [product_id, setProductId] = useState('');

  const dispatch = useDispatch();

  const { myProducts } = useSelector((state) => state.product);
  const { provinces } = useSelector((state) => state.ongkir);

  const submitOffer = (e) => {
    e.preventDefault();
    dispatch(postOffer({ requestId: request.id, payload: { product_id, offered_price } }));
    closeRequestModal();
  };

  // const products = [
  //   {
  //     id: 3,
  //     name: 'TV LG',
  //     price: 1000000,
  //     priceFloor: 980000,
  //     description: 'masih bagus',
  //     image_url: 'https://www.lg.com/id/images/tv/md05970757/gallery/medium01.jpg',
  //     stock: 1,
  //     category_id: 1,
  //     province_id: 'a',
  //     city_id: 'b',
  //     weight: 3,
  //     seller_id: 1,
  //     updatedAt: '2021-08-26T14:17:05.649Z',
  //     createdAt: '2021-08-26T14:17:05.649Z',
  //   },
  //   {
  //     id: 8,
  //     name: 'Gelas IKEA',
  //     price: 40000,
  //     priceFloor: 37000,
  //     description: 'ga pernah dipake, hadiah dr orang',
  //     image_url: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/124/0712419_PE728838_S4.jpg',
  //     stock: 1,
  //     category_id: 1,
  //     province_id: 'a',
  //     city_id: 'b',
  //     weight: 3,
  //     seller_id: 1,
  //     updatedAt: '2021-07-22T14:17:05.649Z',
  //     createdAt: '2021-07-22T14:17:05.649Z',
  //   },
  // ];

  function openFormProduct(formToLoad) {
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
    // openRequestToOffer(null)
  }

  function getProductId(productName) {
    myProducts.forEach((product) => {
      if (product.name == productName) {
        setProductId(product.id);
        setOfferedPrice(product.price);
      }
    });
  }

  function closeModal() {
    setModalStatus((prev) => !prev);
  }

  return (
    <React.Fragment>
      {modalStatus === true ? (
        <FormProduct
          openFormProduct={openFormProduct}
          categories={categories}
          provinces={provinces}
          closeModal={closeModal}
          formType={formType}
        ></FormProduct>
      ) : null}

      <div className="fixed z-9 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
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
                onClick={() => closeRequestModal()}
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start ">
                <div className="flex flex-col justify-between sm:col-span-8 lg:col-span-7">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-700 sm:pr-12">
                      <span className="text-2xl font-light">Request: </span>
                      {request.name}
                    </h2>

                    <section aria-labelledby="information-heading">
                      <p className="text-2xl font-bold text-gray-700 sm:pr-12">
                        <span className="text-2xl font-light">Budget: </span> Rp{request.budget && request.budget.toLocaleString('id-ID')}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 font-normal">
                        request dari{' '}
                        <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer">
                          Pembeli #{request.consumer_id}
                        </span>
                      </p>

                      <div className="mt-6">
                        <p className="text-sm font-bold text-rust-600">Product Description</p>
                        <p className="text-sm font-normal text-gray-500">{request.description}</p>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-bold text-rust-600">
                          Jumlah Request: <span className="text-sm font-normal text-gray-500">{request.qty}</span>
                        </p>
                        {/* <p className="text-sm font-bold text-rust-600">Lokasi Product: <span className="text-sm font-normal text-gray-500">Bandung, Jawa Barat</span></p> */}
                      </div>
                    </section>
                  </div>

                  <div>
                    <section aria-labelledby="options-heading" className="mt-10">
                      <form>
                        <div className="col-span-3 mb-4">
                          <div className="flex flex-row justify-between">
                            <label for="category" className="text-sm font-bold text-rust-600">
                              Product yang kamu Offer
                            </label>
                            <a
                              onClick={() => openFormProduct('post')}
                              className="text-rust-600 font-normal text-xs underline hover:text-rust-700 cursor-pointer"
                            >
                              Atau buat Product baru
                            </a>
                          </div>
                          <select
                            id="category"
                            name="category"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rust-500 focus:border-rust-500 sm:text-sm"
                            onChange={(e) => getProductId(e.target.value)}
                          >
                            <option selected disabled>
                              -- pilih Product --
                            </option>
                            {myProducts.map((product, i) => {
                              return <option key={product.id}>{product.name}</option>;
                            })}
                          </select>
                        </div>

                        <input
                          type="number"
                          className="focus:outline-none focus:ring-1 focus:ring-offset-none focus:ring-rust-500 px-6 py-3 w-full rounded-md border border-solid border-gray-300"
                          placeholder="Masukkan harga Offer untuk Request ini"
                          value={offered_price}
                          onChange={(e) => setOfferedPrice(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="mt-4 w-full bg-rust-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-rust-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rust-500"
                          onClick={(e) => submitOffer(e)}
                        >
                          Submit Offer ke Pembeli #{request.consumer_id}
                        </button>
                        <p className=" text-center mt-1 text-xs text-gray-500 font-normal">
                          Setelah klik tombol Submit, harga Offer hanya bisa diedit lewat MyOffers.
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

export default RequestOffer;
