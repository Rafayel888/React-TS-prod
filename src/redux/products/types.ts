export type Products = {
  id: number;
  name: string;
  imageUrl: string;
  typeSize: number;
  barCode: number;
  sizes: string | number;
  producer: string;
  description: string;
  price: string | number;
  category: number;
  typeCare: string;
};

export enum Status{
  LOADING = 'loading',
  SUCCESS = 'compleated',
  ERROR='error'
}

export type SearchProductsParams = {
  sortBy: string;
  orderBy: string;
  search: string;
  category: string;
}

export interface ProductSliceState {
  items: Products[];
  status: Status;
}