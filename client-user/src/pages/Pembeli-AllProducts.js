import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoggedInNavbar from '../components/Pembeli-NavBar.js';
import FormRequest from '../pages/Pembeli-FormRequest.js';
import KategoriFilter from '../components/KategoriFilter.js';
import ProductBidModal from '../components/Pembeli-ProductBid.js';

// import guitar from '../imgs/products/guitar.jpeg';
// import shoes from '../imgs/products/shoes.jpeg';
// import watch from '../imgs/products/watch.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/slices/categorySlice.js';
import { getProducts, liveSearch } from '../store/slices/productSlice.js';

function PembeliAllProducts() {
  const [currentPage, setCurrentPage] = useState('allProducts');
  const [modalStatus, setModalStatus] = useState(false);
  const [productModalStatus, setProductModalStatus] = useState(false);
  const [formType, setFormType] = useState('');
  const [product, setProduct] = useState('');
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  function searchKeyword(e) {
    setKeyword(e.target.value);
    dispatch(liveSearch(e.target.value));
  }

  //   const mockProduct = [
  //     {
  //       id: 1,
  //       name: 'Jam Tangan Rolex bekas',
  //       price: 20000000,
  //       description:
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat dignissim nisl, vitae cursus est luctus id. Nullam ullamcorper lacinia diam, nec feugiat risus aliquam at. In scelerisque placerat libero quis congue. Curabitur ornare sapien eros, pharetra maximus sapien porttitor sed.',
  //       image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2elDtfiP76kGYe01IClR5w8KX5EfIodL1A&usqp=CAU',
  //       stock: 1,
  //       seller_id: 123,
  //       category: {
  //         id: 8,
  //         name: 'Lain-lain',
  //       },
  //     },
  //   ];

  function openFormRequest(formToLoad) {
    setFormType(formToLoad);
    setModalStatus((prev) => !prev);
  }

  function closeModal() {
    setModalStatus((prev) => !prev);
  }

  function closeProductModal() {
    setProductModalStatus((prev) => !prev);
  }

  function openProductToBid(product) {
    setProduct(product);
    setProductModalStatus((prev) => !prev);
  }

  return (
    <>
      <LoggedInNavbar />

      {modalStatus === true ? (
        <FormRequest openFormRequest={openFormRequest} categories={categories} formType={formType} closeModal={closeModal}></FormRequest>
      ) : null}

      {productModalStatus === true ? (
        <ProductBidModal openProductToBid={openProductToBid} product={product} closeProductModal={closeProductModal} />
      ) : null}

      <div className="bg-white mb-48">
        <div>
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <div className="flex flex-row w-full justify-between">
                <h1 className="text-3xl font-extrabold tracking-tight text-teal-700">
                  Mode Pembeli: <span className="font-normal">All Products</span>
                </h1>

                <div className="flex flex-row align-middle items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    value={keyword}
                    onChange={(e) => searchKeyword(e)}
                    type="text"
                    className="text-sm h-10 border border-solid border-gray-300 rounded-xl px-3 py-1"
                    placeholder="Search"
                  />
                </div>
              </div>

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
                      <a href="#" className="text-teal-600 hover:text-teal-700">
                        Lihat Product tersedia
                      </a>
                    </li>
                  </ul>

                  {currentPage === 'myRequests' || currentPage === 'allProducts' ? <KategoriFilter categories={categories} /> : null}
                </form>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3 min-w-full pl-4 h-full">
                  {/* <!-- Replace with your content --> */}

                  <div className="flex flex-row justify-between">
                    <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Products List</p>

                    {/* <div className="flex flex-row justify-between align-middle items-center pb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-300 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input type="text" className="text-sm h-10 border border-solid border-gray-300 rounded-xl px-3 py-1" placeholder="Search" />
                    </div> */}
                  </div>

                  <div className="grid grid-cols-3 gap-5">
                    {!loading &&
                      products.map((product) => {
                        console.log(products);
                        return (
                          <div className="grid grid-cols-2 gap-3 h-48 justify-start">
                            <div className="bg-contain bg-center flex flex-col rounded-lg shadow-sm justify-center bg-gray-100 h-48">
                              <img src={product.image_url} />
                            </div>

                            <div className="text-left">
                              <a
                                onClick={() => openProductToBid(product)}
                                className="text-md font-semibold leading-5 text-teal-600 mt-5 cursor-pointer hover:text-teal-500"
                              >
                                {product.name}
                              </a>
                              <p className="my-2 text-sm text-gray-800 font-semibold leading-4">Rp{product.price.toLocaleString('id-ID')}</p>
                              <p className="mt-3 text-xs text-gray-500 font-normal">
                                oleh:{' '}
                                <span className="font-bold text-rust-600 hover:text-rust-500 hover:underline cursor-pointer">
                                  Penjual #{product.seller_id}
                                </span>
                              </p>
                              <p className="mt-1 text-xs text-gray-500 font-normal">
                                lokasi: <span className="font-bold text-gray-700 ">Bandung</span>
                              </p>
                              <p className="mt-1 text-xs text-gray-500 font-normal">
                                stok: <span className="font-bold text-gray-700 ">{product.stock}</span>
                              </p>
                              <div className="py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-500">
                                  {product.Category && product.Category.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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

export default PembeliAllProducts;
