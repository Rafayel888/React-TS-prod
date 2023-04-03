import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findIndex = state.items.find((obj) => obj.id == action.payload.id);
      if (findIndex) {
        findIndex.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    _addItem(state, action:PayloadAction<CartItem>) {
      const findIndex = state.items.find((obj) => obj.id == action.payload.id);

      if (!findIndex) {
        state.items.push({
          ...action.payload,
        });
      } else {
        findIndex.count += action.payload.count;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    checkout(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  },
});

export const { addItem, removeItem, minusItem, _addItem, checkout } = cartSlice.actions;

export default cartSlice.reducer;
