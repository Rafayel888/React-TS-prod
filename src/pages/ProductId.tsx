import React from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { _addItem } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';

type EcoProdId = {
  id: string;
  name: string;
  typesSize: number;
  imageUrl: string;
  sizes: string;
  description: string;
  barCode: number;
  brand: string;
  producer: string;
  price: number;
  typeCare: string;
  count: 0;
};

export const ProductId: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = React.useState<EcoProdId>();

  React.useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get('http://localhost:3001/products/' + id );
        data.count = 1;
        setProduct(data);
        console.log('=>', data);
      } catch (error) {
        alert('Ошибка при получении');
      }
    }
    fetch();
  }, []);

  const onClickAdd = () => {
    const itemId: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      description: product.description,
      sizes: product.sizes,
      typesSize: product.typesSize,
      typeCare: product.typeCare,
      count:product.count
    };
    dispatch(_addItem(itemId));
  };

  
  const [value, setValue] = React.useState<number>();

  const onClickPlus = () => {
    setValue(product.count++)
  };

  const onClickMinus = () => {
    setValue(product.count--);
  };
  if (!product) {
    return <>Загрузка...</>;
  }

  return (
    <div className='wprapper__eco__prod'>
      <div className='page__names'>
        <Link to='/'>
          <h1>Главная</h1>
        </Link>
        <span></span>
        <h1>Косметика и гигиена</h1>
        <span></span>
        <h1>{product.typeCare}</h1>
        <span></span>
        <p>{product.name}</p>
        <p>{product.sizes}</p>
      </div>
      <div className='wrapper__product__show'>
        <div className='eco__div__left'>
          <div className='div__img'>
            <img src={product.imageUrl} />
          </div>
        </div>
        <div className='eco__div__right'>
          <p style={{ color: '#1FD85D' }}>В наличии</p>
          <h1>{product.name}</h1>

          <div className='typesSize__div'>
            {product.typesSize === 0 ? (
              <div>
                <img src='/img/icons/Vector_1card.svg' />
                <span>{product.sizes} мл</span>
              </div>
            ) : (
              <div>
                <img src='/img/icons/VectorCard.svg' />
                <span>{product.sizes} г</span>
              </div>
            )}
          </div>

          <div className='div__add__all'>
            <div className='div__price'>{product.price.toString().replace('.', ',')} ₸</div>
            <div className='div__buttons'>
              <button disabled={product.count <= 1} onClick={onClickMinus}>
                -
              </button>
              <span>{product.count}</span>
              <button onClick={() => onClickPlus()}>+</button>
            </div>
            <div onClick={onClickAdd} className='div__basket__add'>
              <span>В корзину</span>
              <img src='/img/icons/basket_card.svg' />
            </div>
          </div>

          <div className='div__info_1'>
            <div className='child__1'>
              <img src='/img/icons/share.svg' />
            </div>
            <div className='child__2'>
              <p>
                При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области
              </p>
            </div>
            <div className='child__3'>
              <span>Прайс-лист</span>
              <img src='/img/icons/down.svg' />
            </div>
          </div>

          <div className='div__info_2'>
            <div>
              <span>Производитель:</span>
              <p>{product.producer}</p>
            </div>
            <div>
              <span>Бренд:</span>
              <p>{product.brand}</p>
            </div>
            <div>
              <span>Артикул:</span>
              <p>460404</p>
            </div>
            <div>
              <span>Штрихкод:</span>
              <p>{product.barCode}</p>
            </div>
          </div>

          <div className='div__description'>
            <h2>Описание</h2>
            <p>{product.description}</p>
          </div>

          <div className='div__descript__foot'>
            <h2>Характеристики</h2>
            <div>
              <span>Назначение:</span>
              <p>{product.brand}</p>
            </div>
            <div>
              <span>Тип:</span>
              <p>Уход за телом</p>
            </div>
            <div>
              <span>Производитель:</span>
              <p>{product.brand}</p>
            </div>
            <div>
              <span>Артикул:</span>
              <p>460404</p>
            </div>
            <div>
              <span>Штрихкод:</span>
              <p>{product.barCode}</p>
            </div>

            {product.typesSize === 1 ? (
              <div>
                <span>Вес:</span>
                <p>{product.sizes} г</p>
              </div>
            ) : (
              <div>
                <span>Объем:</span>
                <p>{product.sizes} мл</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
