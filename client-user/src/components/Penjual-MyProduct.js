import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getProductById } from '../store/slices/productSlice';

import DeleteProductModal from '../components/Penjual-DeleteProductModal.js';
import { getBidsByProductId } from '../store/slices/bidSlice';
import { getProductById } from '../store/slices/productSlice.js';

function PenjualMyProduct(props) {
  const { openFormProduct, productList } = props;

  const [deleteProductModal, setDeleteProductModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState('');

  const dispatch = useDispatch();

  function openDeleteProduct(id) {
    setProductIdToDelete(id);
    setDeleteProductModal((prev) => !prev);
  }

  const getProductDetail = (productId) => {
    dispatch(getProductById(productId));
    dispatch(getBidsByProductId(productId));
  };

  return (
    <React.Fragment>
      {deleteProductModal === true ? <DeleteProductModal openDeleteProduct={openDeleteProduct} id={productIdToDelete} /> : null}

      <div className="flex flex-col mb-48">
        <div className=" w-full ">
          <div className=" align-middle min-w-full ">
            <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Product saya</p>

            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-rust-100">
                  <tr>
                    <th scope="col" colSpan="2" className="px-6 py-3 text-center text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Nama & Harga
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Jumlah Bid
                    </th>
                    {/* <th scope="col" className="px-6 py-3 text-center whitespace-nowrap text-sm font-bold text-rust-600 uppercase tracking-wider">
                      In-Range
                      <br />
                      <span className="lowercase font-normal text-xs tracking-normal">(Ada/Tidak)</span>
                    </th> */}
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {productList.map((product, index) => {
                    return (
                      <tr key={product.id}>
                        <td className="pl-3 py-3  w-24">
                          <img src={product.image_url} alt="product image" className=" h-20 rounded-md" />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <div className="flex text-left">
                            <div className="ml-1">
                              <Link
                                to={{
                                  pathname: `/products/${product.id}`,
                                  state: {
                                    product: product,
                                  },
                                }}
                                className="cursor-pointer whitespace-normal leading-2 text-sm font-bold text-rust-600 hover:text-rust-500"
                                onClick={() => getProductDetail(product.id)}
                              >
                                {product.name}
                              </Link>
                              <div className="text-sm text-gray-500">Rp{product.price.toLocaleString('id-ID')}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-2 whitespace-wrap  ">
                          <div className="text-sm text-gray-500">{product.Bids && product.Bids.filter((bid) => bid.status != 'rejected').length}</div>
                        </td>

                        {/* {product.Bids.filter((bid) => bid.status != 'rejected').length > 0 && product.inRange ? (
                          <td className="px-6 py-2 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-teal-600">Ada</span>
                          </td>
                        ) : (
                          <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">Tidak</span>
                          </td>
                        )} */}

                        <td className="px-6 py-2 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{product.stock}</div>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                            {product.Category && product.Category.name}
                          </span>
                        </td>
                        <td className="flex py-10 items-center justify-evenly whitespace-nowrap text-center text-sm">
                          
                          <Link
                            to={{
                              pathname: `/products/${product.id}`,
                              state: {
                                product: product,
                              },
                            }}
                            className="text-rust-600 hover:text-rust-400 font-bold"
                            onClick={() => getProductDetail(product.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                            </svg>
                            {/* Lihat Bids */}
                          </Link>
                          <a
                            onClick={() => openFormProduct('put', product)}
                            className="text-gray-500 cursor-pointer hover:text-gray-400 font-medium"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            {/* Edit */}
                          </a>
                          <a href="#" className="text-red-600 hover:text-red-400 font-medium" onClick={(e) => openDeleteProduct(product.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

export default PenjualMyProduct;
