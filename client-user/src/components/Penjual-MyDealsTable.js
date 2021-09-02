/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updateShipping } from '../store/slices/dealSlice';

export default function PenjualMyDealsTable(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { mockDeals, changeMode } = props;
  const updateShippingStatus = (data) => {
    const { shipping_status, payment_status, id } = data;
    console.log('shipping ini akan diupdate', data);
    if (payment_status === 'paid' && shipping_status === 'undeliver') {
      const payload = { 
        id: id,
        data: {
          shipping_status: 'delivering' 
        }
      };
      dispatch(updateShipping(payload)).then(() => {
        history.push('/products/myproducts');
      });
    }
  };

  return (
    <div>            
      <div className="flex flex-row justify-between">
        <p className="mb-1 text-left font-bold text-rust-600 text-xl">Product yang kamu lepas ke Pembeli</p>
        <Link
          to="/deals/pembeli"
          className="flex flex-row cursor-pointer max-h-max h-4 text-teal-600 hover:text-teal-400 transition duration-150 ease-in-out"
        >
          <p className="mb-1 text-left font-bold text-sm">Mode Pembeli: MyDeals</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <p className="mb-6 text-left font-normal text-gray-500 text-sm">Pembayaran diproses oleh 3rd party payment gateway.</p>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">                        
            {/* TRANSAKSI BERLANGSUNG – MENUNGGU PEMBAYARAN DARI PEMBELI (Text) */}
            {mockDeals.map(deal => {
              return (
                <li key={deal.id} className="py-6 flex">
                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img src={deal.image_url} alt={deal.product_name} className="w-full h-full object-center object-cover" />
                  </div>
                        
                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                        <Link to={`/deals/${deal.id}`} className="font-bold">{deal.product_name}</Link>
                        <p className="mt-1 text-left text-xs text-gray-500 font-normal">
                          di-Bid oleh 
                          <span className="font-bold text-teal-600 hover:text-teal-500 hover:underline cursor-pointer"> Pembeli #{deal.consumer_id}</span>
                        </p>
                        </h3>
                        <p className="ml-4">
                            <span className="text-sm font-light text-gray-500">Jumlah yang akan kamu terima: </span>Rp.{deal.deal_price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 flex items-end justify-between text-sm">
                      <div>                                       
                        <p className="text-xs text-left font-medium py-1 text-gray-700">Status: <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-red-100 text-gray-600">{deal.payment_status} release</span></p>
                        <p className="text-xs text-left font-medium text-gray-700">Jumlah Barang: <span className="text-xs font-normal text-gray-500">{deal.deal_qty}</span></p>                                        
                      </div>

                      <div className="flex flex-row">
                        {(deal.payment_status === 'paid' && deal.shipping_status === 'undeliver') ?
                          <>
                            <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                              Pembayaran telah diverifikasi
                            </p>
                            <button onClick={() => updateShippingStatus(deal)} className="text-white bg-rust-600 rounded-md ml-4 px-5 py-3 cursor-pointer hover:bg-rust-700 font-medium transition duration-150 ease-in-out">
                              Kirim Product
                            </button>
                          </>
                          :(deal.payment_status === 'paid' && deal.shipping_status === 'delivering') ?
                            <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                              Product dalam perjalanan...
                            </p>
                          :(deal.payment_status === 'paid' && deal.shipping_status === 'completed') ?
                            <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                              Product sudah sampai, transaksi selesai
                            </p>
                          :
                            <p className="text-right text-gray-500 font-normal cursor-not-allowed">
                              Menunggu Pembayaran
                            </p>
                        }
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
