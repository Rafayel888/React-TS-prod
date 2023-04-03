import { configureStore } from '@reduxjs/toolkit';
import prodReducer from './products/slice';
import filterReducer from './filter/slice';
import cartReducer from './cart/slice';

import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    products: prodReducer,
    filters: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
