export enum SortPropertyEnum {
  NAME_DESC = 'name',
  NAME_ASC = '-name',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: Sort;

}