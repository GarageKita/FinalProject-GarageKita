import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PenjualLoggedInNavbar from '../components/Penjual-NavBar.js';
import FormProduct from '../pages/Penjual-FormProduct.js';
import PenjualMyProduct from '../components/Penjual-MyProduct.js';
import KategoriFilter from '../components/KategoriFilter.js';

import { getMyProducts } from '../store/slices/productSlice.js';
import { getCategories } from '../store/slices/categorySlice.js';
import { allProvinces } from '../store/slices/ongkirSlice.js';
import { getMyAddress } from '../store/slices/addressSlice.js';

function PembeliMain() {
  const [currentPage, setCurrentPage] = useState('myProducts');
  const [modalStatus, setModalStatus] = useState(false);
  const [formType, setFormType] = useState('');
  const [productToEdit, setProductToEdit] = useState({});

  const dispatch = useDispatch();

  const { myProducts } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const { provinces } = useSelector((state) => state.ongkir);

  useEffect(() => {
    dispatch(getMyProducts());
    dispatch(getCategories());
    dispatch(allProvinces());
    dispatch(getMyAddress());
  }, []);

  // const mockProducts = [
  //         {
  //             "id": 1,
  //             "name": "iPhone 11 RED – berfungsi baik, dipakai 1 tahun",
  //             "price": 6500000,
  //             "priceFloor": 6000000,
  //             "description": "Retak di ujung kanan layar dan tombol home nggak bekerja, pakai assistive touch.",
  //             "image_url": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144763",
  //             "stock": 1,
  //             "category_id": 1,
  //             "province_id": "a",
  //             "city_id": "b",
  //             "weight": 200,
  //             "seller_id": 1,
  //             "updatedAt": "2021-08-26T14:17:05.649Z",
  //             "createdAt": "2021-08-26T14:17:05.649Z"
  //         },
  //         {
  //             "id": 2,
  //             "name": "Matador Duffel Bag Coklat",
  //             "price": 580000,
  //             "priceFloor": 550000,
  //             "description": "Masih bagus banget, baru dipake 3 kali, ada sedikit jahitan lepas di samping tapi ga terlalu keliatan.",
  //             "image_url": "https://dynamic.zacdn.com/0uuYkSuM95fcQwHk6rjII2CJzS8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/matador-7781-9607152-1.jpg",
  //             "stock": 1,
  //             "category_id": 1,
  //             "province_id": "a",
  //             "city_id": "b",
  //             "weight": 50,
  //             "seller_id": 2,
  //             "updatedAt": "2021-08-26T14:17:05.649Z",
  //             "createdAt": "2021-08-26T14:17:05.649Z"
  //         },

  // ]

  function openFormProduct(formToLoad, product) {
    console.log(product);
    if (product) setProductToEdit(product);
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
  }

  function closeModal() {
    setModalStatus((prev) => !prev);
  }

  function changePage(pageName) {
    setCurrentPage(pageName);
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
          product={productToEdit}
        ></FormProduct>
      ) : null}

      <div className="bg-white">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-rust-700">
                Mode Penjual: <span className="font-normal">MyProducts</span>
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
                      <a onClick={() => changePage('myProducts')} href="#" className="text-rust-600 hover:text-rust-700">
                        Daftar Product saya
                      </a>
                    </li>

                    <li className="my-2">
                      <Link to="/requests" className="text-rust-600 hover:text-rust-700">
                        Lihat Request tersedia
                      </Link>
                    </li>
                  </ul>

                  {currentPage === 'myProducts' || currentPage === 'allRequests' ? <KategoriFilter categories={categories} /> : null}
                </form>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 h-full min-w-full pl-4 overflow-y-auto overflow-x-auto">
                  {/* <!-- Replace with your content --> */}

                  {currentPage === 'myProducts' ? (
                    <PenjualMyProduct openFormProduct={openFormProduct} productList={myProducts} changePage={changePage} />
                  ) : null}

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

export default PembeliMain;
