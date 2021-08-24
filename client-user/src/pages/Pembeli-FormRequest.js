import React from 'react'

function PembeliFormRequest(props) {

    const { openFormRequest, categories, formType } = props

    if (formType === 'post') {

        return (
            <React.Fragment>
    
                <div className="fixed z-10 inset-0 overflow-y-auto px-28" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                        <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    
                        <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Buat Request baru</p>
    
                            <form action="#" method="POST">
                                <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-8 py-5 bg-white">
                                    <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
                                        <input type="text" name="name" id="name" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="budget" class="block text-sm font-medium text-gray-700">Budget</label>
                                        <input type="number" min="1000" name="budget" id="budget" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="budgetCeiling" class="block text-sm font-medium text-gray-700">Budget Ceiling</label>
                                        <input type="number" min="1000" name="budgetCeiling" id="budgetCeiling"  class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6">
                                        <label for="description" class="block text-sm font-medium text-gray-700">Desription</label>
                                        <textarea type="text" rows="4" name="description" id="description" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="category" class="block text-sm font-medium text-gray-700">Kategori</label>
                                        <select id="category" name="category" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                                            {categories.map((category, i) => {
                                                return <option key={`category-${i}`}>{category}</option>
                                            })}
                                        </select>
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="quantity" class="block text-sm font-medium text-gray-700">Jumlah</label>
                                        <input type="number" min="0" name="quantity" id="quantity" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    </div>
                                </div>
    
                                </div>
                            </form>
    
                    <div className="bg-gray-50 px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            Submit Request
                        </button>
    
                        <button onClick={() => openFormRequest()} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Batalkan
                        </button>
                    </div>
                    </div>
                </div>
                </div>
    
            </React.Fragment>
        )

    } else if (formType === 'put') {

        return (
            <React.Fragment>
    
                <div className="fixed z-10 inset-0 overflow-y-auto px-28" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                        <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    
                        <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Edit Request saya</p>
    
                            <form action="#" method="POST">
                                <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-8 py-5 bg-white">
                                    <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
                                        <input type="text" name="name" id="name" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="budget" class="block text-sm font-medium text-gray-700">Budget</label>
                                        <input type="number" min="1000" name="budget" id="budget" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="budgetCeiling" class="block text-sm font-medium text-gray-700">Budget Ceiling</label>
                                        <input type="number" min="1000" name="budgetCeiling" id="budgetCeiling"  class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6">
                                        <label for="description" class="block text-sm font-medium text-gray-700">Desription</label>
                                        <textarea type="text" rows="4" name="description" id="description" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="category" class="block text-sm font-medium text-gray-700">Kategori</label>
                                        <select id="category" name="category" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                                            {categories.map((category, i) => {
                                                return <option key={`category-${i}`}>{category}</option>
                                            })}
                                        </select>
                                    </div>
    
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="quantity" class="block text-sm font-medium text-gray-700">Jumlah</label>
                                        <input type="number" min="0" name="quantity" id="quantity" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm p-2 border border-solid border-gray-300 rounded-md" />
                                    </div>
    
                                    </div>
                                </div>
    
                                </div>
                            </form>
    
                    <div className="bg-gray-50 px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            Edit Request
                        </button>
    
                        <button onClick={() => openFormRequest()} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Batalkan
                        </button>
                    </div>
                    </div>
                </div>
                </div>
    
            </React.Fragment>
        )

    }

}

export default PembeliFormRequest