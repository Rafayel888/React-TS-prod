import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductData } from '../redux/products/selectors';
import { ProductsBlock } from './ProductsBlock';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../redux/filter/slice';

export const Search:React.FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState<string>('');

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <>
      <input onChange={onChangeInput} value={value} type='text' placeholder='Поиск...' />
    </>
  );
};
