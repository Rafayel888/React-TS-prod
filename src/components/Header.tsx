import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';
import { BasketHead } from './BasketHead';
import { Search } from './Search';

export const Header: React.FC = () => {
  const { items} = useSelector(selectCart);
  const isMounted = React.useRef(false);
 
  
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  },[items])

  return (
    <header className='wrapper__header'>
      <div className='contain__header'>
        <div className='header__up'>
          <div className='up__left'>
            <div className='left'>
              <img src='/img/icons/geolocat.svg' width={14} height={17} />
              <div className='left__child_1'>
                <h3>
                  <a href='#'>г. Кокчетав, ул. Ж. Ташенова 129Б</a>
                </h3>
                <p>(Рынок Восточный)</p>
              </div>
            </div>

            <div className='right'>
              <img src='/img/icons/email.svg' width={17} height={14} />
              <div className='left__child_2'>
                <h3>
                  <a href='#'>opt.sultan@mail.ru</a>
                </h3>
                <p> На связи в любое время</p>
              </div>
            </div>
          </div>

          <div className='up__right'>
            <nav>
              <ul>
                <li>
                  <a href='#'>О компании</a>
                </li>
                <li>
                  <a href='#'>Доставка и оплата</a>
                </li>
                <li>
                  <a href='#'>Возврат</a>
                </li>
                <li>
                  <a href='#'>Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className='contain__header'>
        <div className='header__down'>
          <div className='down__left'>
            <img src='/img/icons/Logo.svg' />
            <div className='catalog__div'>
              <span>Каталог</span>
              <img src='/img/icons/catalog.svg' width={15} height={15} />
            </div>
            <Search />
            <div className='search__div'>
              <img src='/img/icons/search.svg' />
            </div>
          </div>

          <div className='down__right'>
            <div className='down__child_1'>
              <span className='s1'>+7 (777) 490-00-91</span>
              <span className='s2'>время работы: 9:00-20:00</span>
              <span className='s3'>
                <a href='tel:+93888001'>Заказать звонок</a>
              </span>
            </div>
            <div className='down__child_2'>
              <img src='/img/dispatcher.png' />
            </div>
            <div className='down__child_3'>
              <div className='price__list'>
                <p>Прайс-лист</p>
                <img src='/img/icons/arrow_to_down.svg' />
              </div>
            </div>
           <BasketHead/>
          </div>
        </div>
      </div>
    </header>
  );
};
