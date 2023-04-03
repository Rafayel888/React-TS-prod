import { count, log } from 'console';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';

type ProductsBlockProps = {
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
};
export const ProductsBlock: React.FC<ProductsBlockProps> = ({
  id,
  name,
  typesSize,
  imageUrl,
  sizes,
  description,
  barCode,
  brand,
  producer,
  price,
}) => {
  const dispatch = useDispatch();

  
  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      imageUrl,
      description,
      sizes,
      typesSize,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className='card__all__div'>
      <div>
        <div className='card__div'>
          {typesSize === 0 ? (
            <div className='div__img'>
              <img src={imageUrl} className='img_prod' style={{ margin: '45px 0 4px 117px' }} />
            </div>
          ) : (
            <div className='div__img'>
              <img src={imageUrl} className='img_prod' style={{ margin: '35px 0 4px 62px' }} />
            </div>
          )}

          {typesSize === 0 ? (
            <div className='capacity__div'>
              <img src='/img/icons/Vector_1Card.svg' width={9} height={15} />
              <span>{sizes} мл</span>
            </div>
          ) : (
            <div className='capacity__div'>
              <img src='/img/icons/VectorCard.svg' width={20} height={14} />
              <span>{sizes} г</span>
            </div>
          )}

          {typesSize === 1 ? (
            <Link to={`/product/${id}/${barCode}`}>
              <h2 style={{ marginBottom: '15px' }}>
                <strong>{name}</strong>
              </h2>
            </Link>
          ) : (
            <Link to={`/product/${id}/${barCode}`}>
              <h2 style={{ marginBottom: '35px' }}>
                <strong>{name}</strong>
              </h2>
            </Link>
          )}

          <div className='div__data'>
            <span className='s4'>Штрихкод:</span>
            <span className='s5'>{barCode}</span>
          </div>
          <div className='div__data'>
            <span className='s4'>Производитель:</span>
            <span className='s5'>{producer}</span>
          </div>
          <div className='div__data'>
            <span className='s4'>Бренд:</span>
            <span className='s5'>{brand}</span>
          </div>
          <div className='price__buy__div'>
            <p>{price.toString().replace('.', ',')} ₸</p>
            <div onClick={onClickAdd}>
              <span>В КОРЗИНУ</span>
              <img src='/img/icons/basket_2.svg' width={24} height={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
