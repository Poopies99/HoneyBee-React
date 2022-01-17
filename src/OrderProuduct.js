import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating, quantity }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const index = basket.findIndex(
        (basketItem) => basketItem.id === id
    );

    return (
        <div className='checkoutProduct'>
            <div className='checkoutProduct__image'>
                <img className='checkoutProduct__image' src={image} alt=""/>
            </div>

            <div className='checkoutProduct__info'>
                <div className='checkoutProduct__header'>
                    <p className='checkoutProduct__title'>{title}</p>
                    <p className="checkoutProduct__price">${price}</p>
                </div>
                    
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
                
                <div className='checkoutProduct__quantity'>
                    Quantity: {quantity}
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
