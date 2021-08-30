import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import requestReducer from './slices/requestSlice';
import categoryReducer from './slices/categorySlice';
import offerReducer from './slices/offerSlice';
import dealReducer from './slices/dealSlice';
import bidReducer from './slices/bidSlice';
import productReducer from './slices/productSlice';
import ongkirReducer from './slices/ongkirSlice';
import addressReducer from './slices/addressSlice';

const reducer = {
  user: userReducer,
  request: requestReducer,
  category: categoryReducer,
  offer: offerReducer,
  deal: dealReducer,
  bid: bidReducer,
  product: productReducer,
  ongkir: ongkirReducer,
  address: addressReducer,
};

export default configureStore({
  reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['user/loginPost/fulfilled', 'user/registerPost/fulfilled', 'deals/getDeals/fulfilled'],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        //
        ignoredPaths: ['items.dates'],
      },
    }),
});
