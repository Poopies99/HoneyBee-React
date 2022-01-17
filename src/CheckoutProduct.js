import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating, quantity }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const index = basket.findIndex(
        (basketItem) => basketItem.id === id
    );

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
            number: index,
        })
    }

    const addQuantity = () => {
        if (index !== -1) {
            basket[index].quantity += 1;
        }

        dispatch({
            type: "CHANGE_QUANTITY",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: quantity,
            },
            change: "ADD",
        })
    }

    const removeQuantity = () => {
        if (index !== -1) {
            basket[index].quantity -= 1;
        }

        dispatch({
            type: "CHANGE_QUANTITY",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: quantity,
            },
            change: "REMOVE",
        })
    }



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
                
                <div className='checkoutProduct__change'> 
                    <button className='checkoutProduct__button' onClick={addQuantity}>+1</button>
                    <button className='checkoutProduct__button' onClick={removeQuantity}>-1</button>
                </div>
                
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
