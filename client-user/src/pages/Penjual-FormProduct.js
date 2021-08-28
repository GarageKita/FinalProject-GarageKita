import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, postProduct } from '../store/slices/productSlice';

function PembeliFormRequest(props) {
  const { openFormProduct, categories, formType, closeModal, product } = props;

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [stock, setStock] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [province_id, setProvinceId] = useState('');
  const [city_id, setCityId] = useState('');
  const [category_id, setCategory_id] = useState(0);
  const [category_name, setCategory_name] = useState('');

  useEffect(() => {
    if (formType === 'put') {
      setName(product.name);
      setPrice(product.price);
      setWeight(product.weigth);
      setStock(product.stock);
      setDescription(product.description);
      setImageUrl(product.image_url);
      setProvinceId(product.province_id);
      setCityId(product.city_id);
      setCategory_id(product.category_id);
      setCategory_name(product.Category.name);
    }
  }, []);

  const categoriesHandler = (e) => {
    const category = categories.find((el) => el.name === e.target.value);
    setCategory_id(category.id);
  };

  const provinceHandler = (e) => {
    setProvinceId();
  };

  const cityHandler = (e) => {
    setCityId();
  };

  const submitPostProduct = async (e, productId) => {
    e.preventDefault();
    if (productId) {
      const { payload, error } = await dispatch(
        editProduct({ id: productId, payload: { name, price, weight, stock, description, image_url, province_id, city_id, category_id } })
      );
      if (!error) {
        closeModal(payload.data.data.id);
      }
    } else {
      const { payload, error } = await dispatch(
        postProduct({ name, price, weight, stock, description, image_url, province_id, city_id, category_id })
      );
      if (!error) {
        closeModal(payload.data.data.id);
      }
    }
  };

  if (formType === 'post') {
    return (
      <React.Fragment>
        <div className="fixed z-10 inset-0 overflow-y-auto px-28" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Buat Product baru</p>

              <form action="#" method="POST" onSubmit={(e) => submitPostProduct(e)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-8 py-5 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label for="name" className="block text-sm font-medium text-gray-700">
                          Nama Product
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label for="budget" className="block text-sm font-medium text-gray-700">
                          Price
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budget"
                          id="budget"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label for="budgetCeiling" className="block text-sm font-medium text-gray-700">
                          Price Floor
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budgetCeiling"
                          id="budgetCeiling"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label for="weight" className="block text-sm font-medium text-gray-700">
                          Berat (gram)
                        </label>
                        <input
                          type="number"
                          min="0"
                          name="weight"
                          id="weight"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>

                      <div className="col-span-3">
                        <label for="description" className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          type="text"
                          rows="5"
                          name="description"
                          id="description"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      {/* <div className="col-span-3">
                                        <label for="description" className="block text-sm font-medium text-gray-700">Image URL</label>
                                        <input type="text" name="description" id="description" className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div> */}

                      <div className="col-span-3">
                        <label className="text-sm font-medium text-gray-700">Image</label>
                        <div className=" flex justify-center px-6 pt-4 pb-4 border-2 border-gray-300 border-dashed rounded-md">
                          <div className=" text-center">
                            <svg className="mx-auto h-10 w-10 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <div className="flex flex-col text-sm text-gray-600">
                              <label
                                for="file-upload"
                                className="relative cursor-pointer bg-white rounded-md text-xs font-medium text-rust-600 hover:text-rust-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rust-500"
                              >
                                <span>Unggah foto produk kamu</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1 text-xs">atau: drag & drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG atau JPG maksimal 10MB</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-3">
                        <label for="category" className="block text-sm font-medium text-gray-700">
                          Kategori
                        </label>
                        <select
                          id="category"
                          name="category"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rust-500 focus:border-rust-500 sm:text-sm"
                          onChange={(e) => categoriesHandler(e)}
                        >
                          <option selected disabled>
                            -- pilih category --
                          </option>
                          {categories.map((category, i) => {
                            return <option key={`category-${i}`}>{category.name}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="province" className="block text-sm font-medium text-gray-700">
                          Provinsi
                        </label>
                        <select
                          id="province"
                          name="province"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rust-500 focus:border-rust-500 sm:text-sm"
                          onChange={(e) => provinceHandler(e)}
                        >
                          <option selected disabled>
                            -- pilih provinsi --
                          </option>
                          {categories.map((category, i) => {
                            return <option key={`category-${i}`}>{category.name}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="city" className="block text-sm font-medium text-gray-700">
                          Kota
                        </label>
                        <select
                          id="city"
                          name="city"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rust-500 focus:border-rust-500 sm:text-sm"
                          onChange={(e) => cityHandler(e)}
                        >
                          <option selected disabled>
                            -- pilih kota --
                          </option>
                          {categories.map((category, i) => {
                            return <option key={`category-${i}`}>{category.name}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="stock" className="block text-sm font-medium text-gray-700">
                          Stock
                        </label>
                        <input
                          type="number"
                          min="0"
                          name="stock"
                          id="stock"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={stock}
                          onChange={(e) => setStock(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="bg-gray-50 px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium transition duration-150 ease-in-out rounded-md text-white bg-rust-600 hover:bg-rust-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rust-500"
                  onClick={(e) => submitPostProduct(e)}
                >
                  Submit Product
                </button>

                <button
                  onClick={() => openFormProduct()}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rust-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Batalkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (formType === 'put') {
    return (
      <React.Fragment>
        <div className="fixed z-10 inset-0 overflow-y-auto px-28" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Edit Product saya</p>

              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-8 py-5 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label for="name" className="block text-sm font-medium text-gray-700">
                          Nama Product
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label for="budget" className="block text-sm font-medium text-gray-700">
                          Price
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budget"
                          id="budget"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label for="budgetCeiling" className="block text-sm font-medium text-gray-700">
                          Price Floor
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budgetCeiling"
                          id="budgetCeiling"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label for="weight" className="block text-sm font-medium text-gray-700">
                          Berat (gram)
                        </label>
                        <input
                          type="number"
                          min="0"
                          name="weight"
                          id="weight"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>

                      <div className="col-span-3">
                        <label for="description" className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          type="text"
                          rows="5"
                          name="description"
                          id="description"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      {/* <div className="col-span-3">
                                        <label for="description" className="block text-sm font-medium text-gray-700">Image URL</label>
                                        <input type="text" name="description" id="description" className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div> */}

                      <div className="col-span-3">
                        <label className="text-sm font-medium text-gray-700">Image</label>
                        <div className=" flex justify-center px-6 pt-4 pb-4 border-2 border-gray-300 border-dashed rounded-md">
                          <div className=" text-center">
                            <svg className="mx-auto h-10 w-10 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <div className="flex flex-col text-sm text-gray-600">
                              <label
                                for="file-upload"
                                className="relative cursor-pointer bg-white rounded-md text-xs font-medium text-rust-600 hover:text-rust-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rust-500"
                              >
                                <span>Unggah foto produk kamu</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1 text-xs">atau: drag & drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG atau JPG maksimal 10MB</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-3">
                        <label for="category" className="block text-sm font-medium text-gray-700">
                          Kategori
                        </label>
                        <select
                          id="category"
                          name="category"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rust-500 focus:border-rust-500 sm:text-sm"
                          onChange={(e) => categoriesHandler(e)}
                        >
                          <option disabled>-- pilih category --</option>
                          {categories.map((category, i) => {
                            return (
                              <option selected={category_name == category.name && true} key={`category-${i}`}>
                                {category.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="province" className="block text-sm font-medium text-gray-700">
                          Provinsi
                        </label>
                        <select
                          id="province"
                          name="province"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rust-500 focus:border-rust-500 sm:text-sm"
                          onChange={(e) => provinceHandler(e)}
                        >
                          <option disabled>-- pilih provinsi --</option>
                          {categories.map((category, i) => {
                            return <option key={`category-${i}`}>{category.name}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="city" className="block text-sm font-medium text-gray-700">
                          Kota
                        </label>
                        <select
                          id="city"
                          name="city"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rust-500 focus:border-rust-500 sm:text-sm"
                          onChange={(e) => cityHandler(e)}
                        >
                          <option disabled>-- pilih kota --</option>
                          {categories.map((category, i) => {
                            return <option key={`category-${i}`}>{category.name}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="stock" className="block text-sm font-medium text-gray-700">
                          Stock
                        </label>
                        <input
                          type="number"
                          min="0"
                          name="stock"
                          id="stock"
                          className="mt-1 focus:ring-rust-500 focus:border-rust-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={stock}
                          onChange={(e) => setStock(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="bg-gray-50 px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium transition duration-150 ease-in-out rounded-md text-white bg-rust-600 hover:bg-rust-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rust-500"
                  onClick={(e) => submitPostProduct(e, product.id)}
                >
                  Edit Product
                </button>

                <button
                  onClick={() => openFormProduct()}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rust-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Batalkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PembeliFormRequest;
