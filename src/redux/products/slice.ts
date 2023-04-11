import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { Status } from './types';

const initialState = {
  items: [],
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});
export const { setItems } = productSlice.actions;
export default productSlice.reducer;
