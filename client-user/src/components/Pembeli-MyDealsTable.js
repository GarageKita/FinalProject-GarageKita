/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PembeliMyDealsTable(props) {
  useEffect(() => {
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const clientKey = 'SB-Mid-client-TPkLr9_TH34idZS9';
    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute('data-client-key', clientKey);
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  const { mockDeals, changeMode } = props;
  const handlePayment = (e, id, price) => {
    e.target.innerHTML = 'Please Wait';
    fetch(`https://garagekita-dealtransaction.herokuapp.com/deals/payments/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        total_payment: price,
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        window.snap.pay(data.token);
      })
      .catch((err) => {
        console.log('error ketika payment', err);
        e.target.innerHTML = 'Bayar Sekarang';
      })
      .finally(() => {
        e.target.innerHTML = 'Bayar Sekarang';
      });
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="mb-1 text-left font-bold text-teal-600 text-xl">
          Product yang dibeli dari Penjual
        </p>

        <Link
          to="/deals/penjual"
          className="flex flex-row cursor-pointer max-h-max h-4 text-rust-600 hover:text-rust-400 transition duration-150 ease-in-out"
        >
          <p className="mb-1 text-left font-bold text-sm">Mode Penjual: MyDeals</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

      </div>
      <p className="mb-6 text-left font-normal text-gray-500 text-sm">
        Pembayaran diproses oleh 3rd party payment gateway.
      </p>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {mockDeals.map((deal) => {
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
                            milik{' '}
                            <span className="font-bold text-rust-600 hover:text-rust-500 hover:underline cursor-pointer">{deal.seller_email}</span>
                          </p>
                        </h3>
                        <p className="ml-4 font-medium">
                          Jumlah yang kamu bayarkan: Rp{deal.deal_price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 flex items-end justify-between text-sm">
                      <div>
                        <p className="text-xs text-left font-medium py-1 text-teal-600">
                          Status:{' '}
                          <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-red-100 text-gray-600">
                            {deal.payment_status} payment
                          </span>
                        </p>
                        <p className="text-xs text-left font-medium text-teal-600">
                          Jumlah Barang: <span className="text-xs font-normal text-gray-500">{deal.deal_qty}</span>
                        </p>
                      </div>
                      <div className="flex flex-row">
                        {deal.payment_status === 'paid' ? (
                          <div className="flex flex-row items-center">
                            <p className="text-right mr-3 text-gray-500 font-normal cursor-not-allowed">
                              Lunas, dalam proses pengiriman
                              {/* <br/> */}
                              {/* <span className="text-gray-500 font-normal text-xs">Setelah sampai, akan muncul di "Tiba di Tujuan"</span> */}
                            </p>
                            <button className="text-teal-700 bg-teal-200 rounded-md px-5 py-3 cursor-pointer hover:bg-teal-300 font-normal transition duration-150 ease-in-out">
                              Sudah sampai
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              onClick={(e) => handlePayment(e, deal.id, deal.deal_price)}
                              className="text-white bg-teal-600 rounded-md mr-4 px-5 py-3 cursor-pointer hover:bg-teal-700 font-medium transition duration-150 ease-in-out"
                            >
                              Bayar Sekarang
                            </button>
                            <button className="text-gray-700 bg-gray-200 rounded-md px-5 py-3 cursor-pointer hover:bg-gray-300 font-normal transition duration-150 ease-in-out">
                              Batalkan
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
