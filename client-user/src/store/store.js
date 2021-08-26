import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import requestReducer from './slices/requestSlice';
import categoryReducer from './slices/categorySlice';

const reducer = {
  user: userReducer,
  request: requestReducer,
  category: categoryReducer,
};

export default configureStore({
  reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['user/loginPost/fulfilled', 'user/registerPost/fulfilled'],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});
