import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductById } from '../store/slices/productSlice';

function PenjualMyProduct(props) {
  const { openFormProduct, productList } = props;

  const [deleteModal, setDeleteModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState('');

  const dispatch = useDispatch();

  const getProductDetail = (productId) => {
    dispatch(getProductById(productId));
    // dispatch(getOffersByRequestId(requestId));
  };

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <p className="mb-6 text-left font-semibold text-gray-900 text-2xl">Daftar Product saya</p>

            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-rust-100">
                  <tr>
                    <th scope="col" colSpan="2" className="px-5 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Nama & Harga
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th scope="col" className="px-8 py-3 text-left text-sm font-bold text-rust-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {productList.map((product, index) => {
                    return (
                      <tr key={product.id}>
                        <td className=" py-4 w-24">
                          <img src={product.image_url} alt="product image" />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <div className="flex text-left">
                            <div className="ml-1">
                              <Link
                                to={`/products/${product.id}`}
                                className="cursor-pointer whitespace-normal leading-2 text-sm font-bold text-rust-600 hover:text-rust-500"
                              >
                                {product.name}
                              </Link>
                              <div className="text-sm text-gray-500">Rp. {product.price.toLocaleString('id-ID')}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-wrap text-left ">
                          <div className="text-xs text-gray-500">{product.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{product.stock}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
                            {product.Category && product.Category.name}
                          </span>
                        </td>
                        <td className="flex flex-col px-6 py-4 whitespace-nowrap text-center text-sm">
                          <a href="#" className="text-rust-600 hover:text-rust-400 my-2 font-bold">
                            Lihat Bids
                          </a>
                          <a
                            onClick={() => openFormProduct('put', product)}
                            className="text-gray-500 cursor-pointer hover:text-gray-400 my-1 font-medium"
                          >
                            Edit
                          </a>
                          <a href="#" className="text-red-600 hover:text-red-400 my-1 font-medium">
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

export default PenjualMyProduct;
