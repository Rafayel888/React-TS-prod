import React from 'react'

export const CartEmpty:React.FC = () => {
  return (
    <div className='cart_empty'>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Возможно, вы еще не заказали товар.
        <br />
        Для того, чтобы заказать, перейди на главную страницу.
      </p>
      <div>
        <img src='/img/empty-cart.png'/>
      </div>
    </div>
  );
}
