import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { filterMyBids } from '../store/slices/bidSlice';
import { filterProducts, filterMyProducts } from '../store/slices/productSlice';
import { filterMyRequests, filterAllRequests } from '../store/slices/requestSlice';

export default function KategoriFilter(props) {
  const { categories } = props;

  const [filterBy, setFilterBy] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();

  const filterRequests = (e) => {
    if (e.target.checked) {
      setFilterBy([...filterBy, e.target.value]);
    } else {
      setFilterBy(filterBy.filter((category) => category != e.target.value));
    }
  };

  useEffect(() => {
    if (location.pathname == '/myrequests') {
      dispatch(filterMyRequests(filterBy));
    } else if (location.pathname == '/requests') {
      dispatch(filterAllRequests(filterBy));
    } else if (location.pathname == '/products') {
      dispatch(filterProducts(filterBy));
    } else if (location.pathname == '/products/myproducts') {
      dispatch(filterMyProducts(filterBy));
      // } else if (location.pathname == '/bids/mybids') {
      //   dispatch(filterMyBids(filterBy));
    }
  }, [dispatch, filterBy, location.pathname]);

  return (
    <div>
      <div className="border-b border-gray-200 py-6">
        <h3 className="-my-3 flow-root">
          {/* <!-- Expand/collapse section button --> */}
          <p
            className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
            aria-controls="filter-section-1"
            aria-expanded="false"
          >
            <span className="font-medium text-gray-900">Filter bedasarkan Kategori</span>
          </p>
        </h3>

        {/* <!-- FILTER --> */}
        <div className="pt-6" id="filter-section-1">
          <div className="space-y-4">
            {categories.map((category, i) => {
              return (
                <div key={i} className="flex items-center">
                  <input
                    id={`category-${i}`}
                    name={category.name}
                    value={category.name}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    onChange={(e) => filterRequests(e)}
                  />
                  <label htmlFor={`category-${i}`} className="ml-3 text-sm text-gray-600">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
