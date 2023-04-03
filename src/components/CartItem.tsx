import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import { CartItem as CartItemType } from '../redux/cart/types';
import { selectCart } from '../redux/cart/selectors';
import { CartEmpty } from './CartEmpty';

type CartItemProps = {
  id: string;
  name: string;
  imageUrl: string;
  typesSize: number;
  sizes: string;
  price: number;
  count: number;
};
export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imageUrl,
  typesSize,
  sizes,
  price,
  count,
}) => {
  const { items,totalPrice } = useSelector(selectCart);
 
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItemType));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  

  return (
    <div>
      <div className='basket__div'>
        <div className='basket__products'>
          <div className='div__img'>
            <img src={imageUrl} />
          </div>
          <div className='div__description'>
            <div className='types__div'>
              {typesSize === 0 ? (
                <div>
                  <img src='/img/icons/Vector_1card.svg' />
                  <span>{sizes} мл</span>
                </div>
              ) : (
                <div>
                  <img src='/img/icons/VectorCard.svg' />
                  <span>{sizes} г</span>
                </div>
              )}
            </div>
            <h2>
              <strong>{name}</strong>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
              vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
              duis.{' '}
            </p>
          </div>
          <div className='count__div'>
            <button disabled={count == 1} onClick={() => onClickMinus()}>
              -
            </button>
            <span>{count}</span>
            <button onClick={() => onClickPlus()}>+</button>
          </div>

          <div className='div__price'>
            <span>{price.toString().replace('.', ',')} ₸</span>
          </div>

          <div onClick={() => onClickRemove()} className='delte__div'>
            <img src='/img/icons/remove.svg' />
          </div>
        </div>
      </div>
    </div>
  );
};
