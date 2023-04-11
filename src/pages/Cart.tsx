import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem';
import { selectCart } from '../redux/cart/selectors';
import { checkout } from '../redux/cart/slice';
import { Modal } from '../components/Modal';
import { CartEmpty } from '../components/CartEmpty';

export const Basket: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const [modal, setModal] = React.useState<boolean>(false);

  const onClickCheckout = () => {
    setModal(true);
    dispatch(checkout());
  };

  if (!totalPrice) {
    return (
      <div data-testid='basket-page' className='basket__wrapper'>
        <div className='page__names'>
          <Link to='/'>
            <p>Главная</p>
          </Link>
          <span></span>
          <p style={{ opacity: '0.5' }}>Корзина</p>
        </div>
        <div className='page__title'>
          <h1>Корзина</h1>
        </div>
        <CartEmpty />
        {!modal ? <span></span> : <Modal open={modal} onClose={() => setModal(false)} />}
      </div>
    );
  }
  return (
    <div className='basket__wrapper'>
      <div className='page__names'>
        <Link to='/'>
          <p>Главная</p>
        </Link>
        <span></span>
        <p style={{ opacity: '0.5' }}>Корзина</p>
      </div>

      <div className='page__title'>
        <h1>Корзина</h1>
      </div>
      <div className='basket__products__all__div'>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className='total__div'>
        <button onClick={onClickCheckout}>Оформить заказ</button>
        <span>{totalPrice.toFixed(3).toString().replace('.', ',')} ₸</span>
      </div>
    </div>
  );
};
