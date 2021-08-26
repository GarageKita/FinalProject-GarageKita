import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postRequest } from '../store/slices/requestSlice';

function PembeliFormRequest(props) {
  const { openFormRequest, categories, formType } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [budget, setBudget] = useState(0);
  const [budgetCeil, setBudgetCeil] = useState(0);
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState(0);
  const [category_id, setCategory_id] = useState(0);

  const categoriesHandler = (e) => {
    const category = categories.find((el) => el.name === e.target.value);
    setCategory_id(category.id);
  };

  const submitPostRequest = async (e) => {
    e.preventDefault();
    console.log(name, budget, budgetCeil, description, qty, category_id);
    const { error } = await dispatch(postRequest({ name, budget, budgetCeil, description, qty, category_id }));
    if (!error) {
      openFormRequest();
      // todo page belum autoupdate
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
              <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Buat Request baru</p>

              <form action="#" method="POST" onSubmit={(e) => submitPostRequest(e)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-8 py-5 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label for="name" className="block text-sm font-medium text-gray-700">
                          Nama
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="budget" className="block text-sm font-medium text-gray-700">
                          Budget
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budget"
                          id="budget"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="budgetCeiling" className="block text-sm font-medium text-gray-700">
                          Budget Ceiling
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budgetCeiling"
                          id="budgetCeiling"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={budgetCeil}
                          onChange={(e) => setBudgetCeil(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6">
                        <label for="description" className="block text-sm font-medium text-gray-700">
                          Desription
                        </label>
                        <textarea
                          type="text"
                          rows="4"
                          name="description"
                          id="description"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="category" className="block text-sm font-medium text-gray-700">
                          Kategori
                        </label>
                        <select
                          id="category"
                          name="category"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                          onChange={(e) => categoriesHandler(e)}
                        >
                          {categories.map((category, i) => {
                            return <option key={`category-${i}`}>{category.name}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="quantity" className="block text-sm font-medium text-gray-700">
                          Jumlah
                        </label>
                        <input
                          type="number"
                          min="0"
                          name="quantity"
                          id="quantity"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="bg-gray-50 px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  onClick={(e) => submitPostRequest(e)}
                >
                  Submit Request
                </button>

                <button
                  onClick={() => openFormRequest()}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
              <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Edit Request saya</p>

              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-8 py-5 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label for="name" className="block text-sm font-medium text-gray-700">
                          Nama
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="budget" className="block text-sm font-medium text-gray-700">
                          Budget
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budget"
                          id="budget"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="budgetCeiling" className="block text-sm font-medium text-gray-700">
                          Budget Ceiling
                        </label>
                        <input
                          type="number"
                          min="1000"
                          name="budgetCeiling"
                          id="budgetCeiling"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label for="description" className="block text-sm font-medium text-gray-700">
                          Desription
                        </label>
                        <textarea
                          type="text"
                          rows="4"
                          name="description"
                          id="description"
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="category" className="block text-sm font-medium text-gray-700">
                          Kategori
                        </label>
                        <select
                          id="category"
                          name="category"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        >
                          {categories.map((category, i) => {
                            return <option key={`category-${i}`}>{category}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label for="quantity" className="block text-sm font-medium text-gray-700">
                          Jumlah
                        </label>
                        <input
                          type="number"
                          min="0"
                          name="quantity"
                          id="quantity"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="bg-gray-50 px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Edit Request
                </button>

                <button
                  onClick={() => openFormRequest()}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
