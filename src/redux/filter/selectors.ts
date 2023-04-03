import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.filters;
export const selectSort = (state: RootState) => state.filters.sort;
