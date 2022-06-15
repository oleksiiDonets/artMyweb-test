import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import { usersApi } from '../api/userApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});
