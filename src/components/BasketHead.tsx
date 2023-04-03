import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCart } from '../redux/cart/selectors';

export const BasketHead:React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  return (
    <>
      <Link to='/basket'>
        <div className='down__child_4'>
          <div className='basket__div'>
            <img width={46} height={46} src='/img/icons/basket.svg' />
            <div className='count__div'>
              <span>{items.length}</span>
            </div>
          </div>
          <div className='sum__div'>
            <p>Корзина</p>
            <span>{totalPrice.toFixed(3).toString().replace('.',' ')} ₸ </span>
          </div>
        </div>
      </Link>
    </>
  );
}
