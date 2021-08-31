import React from 'react'

function FormAddressModal(props) {

    const { triggerFormModal, formType } = props

    if (formType === 'put') {

        return (
            <React.Fragment>
    
                <div className="fixed z-10 inset-0 overflow-y-auto px-80" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                    <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    
                        <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Edit Alamat</p>
    
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                
                                <div className="px-8 py-5 bg-white">
                                    <div className="grid grid-cols-6 gap-6">
    
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
                                            <input type="text" name="address" id="address" className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md" />
                                        </div>
        
                                        <div className="col-span-6 ">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Kota</label>
                                            <select name="city" id="city" className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md">
                                                <option>Kota 1</option>
                                                <option>Kota 2</option>
                                                <option>Kota 3</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 ">
                                            <label htmlFor="province" className="block text-sm font-medium text-gray-700">Provinsi</label>
                                            <select name="province" id="province" className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md">
                                                <option>Provinsi 1</option>
                                                <option>Provinsi 2</option>
                                                <option>Provinsi 3</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </form>
    
                        <div className="bg-white px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out">
                                Submit Edit
                            </button>
        
                            <button onClick={() => triggerFormModal()} type="button" className="transition duration-150 ease-in-out mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Kembali
                            </button>
                        </div>

                        </div>
                    </div>
                </div>
    
            </React.Fragment>
        )

    } else if (formType === 'post') {

        return (
            <React.Fragment>
    
                <div className="fixed z-10 inset-0 overflow-y-auto px-80" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                    <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    
                        <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Tambah Alamat</p>
    
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                
                                <div className="px-8 py-5 bg-white">
                                    <div className="grid grid-cols-6 gap-6">
    
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
                                            <input type="text" name="address" id="address" className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md" />
                                        </div>
        
                                        <div className="col-span-6 ">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Kota</label>
                                            <select name="city" id="city" className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md">
                                                <option>Kota 1</option>
                                                <option>Kota 2</option>
                                                <option>Kota 3</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 ">
                                            <label htmlFor="province" className="block text-sm font-medium text-gray-700">Provinsi</label>
                                            <select name="province" id="province" className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md">
                                                <option>Provinsi 1</option>
                                                <option>Provinsi 2</option>
                                                <option>Provinsi 3</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </form>
    
                        <div className="bg-white px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out">
                                Submit alamat baru
                            </button>
        
                            <button onClick={() => triggerFormModal()} type="button" className="transition duration-150 ease-in-out mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Kembali ke MyAddress
                            </button>
                        </div>

                        </div>
                    </div>
                </div>
    
            </React.Fragment>
        )

    }


}

export default FormAddressModal