import React from 'react'

type CategoriesProps = {
  value: number;
  onChangeCategory: (ind: number) => void;
}
export const categories = [
  'Уход за телом',
  'Уход за руками',
  'Уход за ногами',
  'Уход за лицом',
  'Уход за волосами',
  'Средства для загара',
  'Средства для бритья',
  'Подарочные наборы',
  'Гигиеническая продукция',
  'Гигиена полости рта',
  'Подарочные наборы',
];
export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className='category__div'>
      {categories.map((categoryName, i) => (
        <div key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
          <span>{categoryName}</span>
        </div>
      ))}
    </div>
  );
});