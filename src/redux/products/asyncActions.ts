import { createAsyncThunk } from '@reduxjs/toolkit';
import { Products, SearchProductsParams } from './types';
import axios from 'axios';
import pickBy from 'lodash/pickBy';
import identify from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Products[], SearchProductsParams>(
  'product/fetchProductsStatus',
  async (params) => {
    const { sortBy, orderBy, category, search } = params;

    const { data } = await axios.get<Products[]>(
      `http://localhost:3001/products?_sort=${sortBy}&_order=${orderBy}&_${search}&_category=${category}`,
      {
        params: pickBy(
          {
            sortBy,
            orderBy,
            category,
            search
          },
          identify,
        ),
      },
    );
    
    return data;
  },
);
