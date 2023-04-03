import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../redux/filter/slice';
import { Sort as SortType, SortPropertyEnum } from '../redux/filter/types';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
  value: SortType;
};

export const sortList: SortItem[] = [
  { name: 'по цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'по цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'по названию (DESC)', sortProperty: SortPropertyEnum.NAME_DESC },
  { name: 'по названию (ASC)', sortProperty: SortPropertyEnum.NAME_ASC },
];

export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState<boolean>(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath ? event.composedPath() : null;

      if (sortRef.current && !path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='sort__up'>
      <h1>Косметика и гигиена</h1>
      <div className='sort__div'>
        <h4>Сортировка:</h4>
        <div ref={sortRef} className='sort__name'>
          <p onClick={() => setOpen(!open)}>{value.name}</p>
          {open && (
            <div className='list__elm active'>
              <ul>
                {sortList.map((obj, i) => (
                  <li
                    key={i}
                    onClick={() => onClickListItem(obj)}
                    className={value.sortProperty === obj.sortProperty ? 'active' : ''}
                  >
                    {obj.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='burger'>
          <img src='/img/icons/burger.svg' />
          <img src='/img/icons/catalog_2.svg' />
        </div>
      </div>
    </div>
  );
});
