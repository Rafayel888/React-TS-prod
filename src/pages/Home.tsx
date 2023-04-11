import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { setCategoryId, setFilters } from '../redux/filter/slice';
import { selectProductData } from './../redux/products/selectors';
import { fetchProducts } from '../redux/products/asyncActions';
import { selectFilter } from '../redux/filter/selectors';
import { Categories } from '../components/Categories';
import { ProductsBlock } from '../components/ProductsBlock';
import { Sort, sortList } from '../components/Sort';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef<boolean>(false);

  const { items, status } = useSelector(selectProductData);
console.log(items);

  const { searchValue, sort, categoryId } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const orderBy = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue ? `q=${searchValue}` : '';

    dispatch(
      fetchProducts({
        sortBy,
        orderBy,
        category,
        search,
      }),
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        order: sort.sortProperty,
        category: categoryId,
        searchName: searchValue,
      });
      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [sort.sortProperty, searchValue, categoryId]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
          categoryId,
        }),
      );
    }
  }, []);

  React.useEffect(() => {
    getProducts();
  }, [searchValue, sort.sortProperty, categoryId]);

  const productsBlock = items
    .filter((obj) => {
      const searchPrev = obj.name.toLowerCase();
      if (searchPrev.includes(searchValue) || searchPrev.toUpperCase().includes(searchValue)) {
        return true;
      }

      return false;
    })
    .map((obj) => {
      return (
        <div key={obj.id}>
          <ProductsBlock {...obj} />
        </div>
      );
    });

  return (
    <div data-testid='main-page' className='home__wrapper'>
      <div className='page__names'>
        <h1>Главная</h1>
        <span></span>
        <h1>Косметика и гигиена</h1>
      </div>
      <Sort value={sort} />
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <div className='list__prod__div'>
        <aside>
          <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
          <p>Цена ₸</p>
          <div className='show__price'>
            <input type='text' placeholder='0' />
            <span>-</span>
            <input type='text' placeholder='10 000' />
          </div>
          <h3>Производитель</h3>
          <div className='div__inp'>
            <input type='text' className='inp_producer' placeholder='Поиск...' />
            <div className='search_div_2'>
              <img src='/img/icons/search.svg' />
            </div>
            <ul className='ul__check'>
              <li>
                <input type='checkbox' />
                <span>Grifon</span>
              </li>
              <li>
                <input type='checkbox' />
                <span>Boyscout</span>
              </li>
              <li>
                <input type='checkbox' />
                <span>Paclan</span>
              </li>
              <li>
                <input type='checkbox' />
                <span>Булгари Грин</span>
              </li>
            </ul>
          </div>
        </aside>

        {status === 'error' ? (
          <div className='content__error-info'>
            <h2>Произошла ошибка 😕</h2>
            <p>К сожалению, не удалось получить продукты. Попробуйте повторить попытку позже.</p>
          </div>
        ) : (
          <div className='list__products'>{productsBlock}</div>
        )}
      </div>
    </div>
  );
};
