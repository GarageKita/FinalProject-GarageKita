import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import requestReducer from './requestSlice';

const reducer = {
  user: userReducer,
  request: requestReducer,
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
