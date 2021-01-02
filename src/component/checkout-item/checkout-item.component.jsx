import React from 'react';
import { Card } from '@material-ui/core'; 


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem}) => {

  const removeItem = ()=> {}
  const addItem= ()=> {}
  const clearItem = ()=> {}

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      {/* <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div> */}
      <Card>
      <span className='name'>{cartItem}</span>
      </Card>
      <span className='quantity'>
        {/* <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{'0'}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <div className='remove-button'>{'0'}</div>
      <span className='quantity'>
        {/* <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{'0'}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
      <Card>
        &#10005;
        </Card>
      </div>
    </div>
  );
};


export default CheckoutItem;
