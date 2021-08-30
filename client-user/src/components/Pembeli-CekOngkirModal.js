import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAddress } from '../store/slices/addressSlice';
import { postDeal } from '../store/slices/dealSlice';
import { ongkirCost } from '../store/slices/ongkirSlice';

function PembeliCekOngkirModal(props) {
  const { openCekOngkirModal, offer, request } = props;

  const dispatch = useDispatch();

  const [destination_id, setDestinationId] = useState('');
  const [courier, setCourier] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const { myCityId } = useSelector((state) => state.address);
  const { ongkir, typeOrigin, cityOrigin, provinceOrigin } = useSelector((state) => state.ongkir);

  useEffect(() => {
    setDestinationId(myCityId);
  }, []);

  useEffect(() => {
    if (courier) {
      dispatch(
        ongkirCost({
          origin: offer.Product.city_id,
          destination: destination_id,
          weight: offer.Product.weight,
          courier: courier,
        })
      );
    }
  }, [courier]);

  useEffect(() => {
    if (ongkir) {
      setTotalPrice(offer.offered_price + ongkir);
    }
  }, [ongkir]);

  const chooseCourier = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case 'TIKI':
        setCourier('tiki');
        break;
      case 'JNE':
        setCourier('jne');
        break;
      case 'POS Indonesia':
        setCourier('pos');
        break;
      default:
        break;
    }
  };

  function acceptOffer() {
    // console.log(offer);
    // console.log(request);
    dispatch(
      postDeal({
        comsumer_id: request.consumer_id,
        product_id: offer.product_id,
        deal_price: totalPrice,
        deal_qty: request.qty,
        request_id: offer.request_id,
      })
    );
    openCekOngkirModal();
  }

  return (
    <React.Fragment>
      <div className="fixed z-10 inset-0 overflow-y-auto px-80" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white min-w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <p className="mt-6 mb-4 mx-8 text-left font-semibold text-gray-900 text-2xl">Cek Ongkir & Terima Offer</p>

            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-8 py-5 bg-white">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-4">
                      <label for="address" class="block text-sm font-medium text-gray-700">
                        Alamat Pengiriman
                      </label>
                      <select
                        name="address"
                        id="address"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                      >
                        <option>PT. GarageKita Sukses Selalu, Jl. Fase III no. 1, Jakarta Pusat, DKI Jakarta 10230</option>
                        <option>
                          Gracia Residence, Jl. Graha Raya Bintaro No.16, Pd. Kacang Bar., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15226
                        </option>
                        <option>
                          Ciliwung 1 no. 76 Condet Cililitan Kramat Jati Jakarta Timur, Cililitan, Kramatjati, RT.10/RW.6, Cililitan, Kec. Kramat
                          jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13640
                        </option>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-2">
                      <label for="courier" class="block text-sm font-medium text-gray-700">
                        Pilih Kurir
                      </label>
                      <select
                        name="courier"
                        id="courier"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-solid border-gray-300 rounded-md"
                        onChange={(e) => chooseCourier(e)}
                      >
                        <option selected disabled>
                          ---
                        </option>
                        <option>TIKI</option>
                        <option>JNE</option>
                        <option>POS Indonesia</option>
                      </select>
                    </div>
                  </div>
                  <section className="  bg-teal-100 px-5 rounded-md py-3 mt-5 flex flex-row justify-between">
                    <div className="space-y-1 block text-sm font-bold text-gray-700">
                      <div>Harga Offer: Rp{offer.offered_price.toLocaleString('id-ID')}</div>
                      <div>
                        Ongkos Kirim: Rp{ongkir.toLocaleString('id-ID')}
                        <span className="font-normal text-xs">
                          {' '}
                          (dikirim dari {typeOrigin} {cityOrigin}, {provinceOrigin})
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-right font-bold text-teal-600">Total Harga</div>
                      <div className="text-xl text-right font-bold text-gray-700">Rp{totalPrice.toLocaleString('id-ID')}</div>
                    </div>
                  </section>
                </div>
              </div>
            </form>

            <div className="bg-white px-4 pt-3 pb-6 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                onClick={() => acceptOffer()}
              >
                Terima Offer, masukkan ke MyDeals
              </button>

              <button
                onClick={() => openCekOngkirModal()}
                type="button"
                className="transition duration-150 ease-in-out mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mr-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Kembali ke Detil Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PembeliCekOngkirModal;
