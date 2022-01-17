import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, quantity }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const index = basket.findIndex(
        (basketItem) => basketItem.id === id
    );
    
    const addToBasket = () => {
        if (index === -1) {
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    quantity: quantity,
                },
                addQuantity: "1",
            });
        } else {
            basket[index].quantity += 1;
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    quantity: quantity,
                },
                addQuantity: "2",
            })
        } 
    };
    
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>             
                    ))}
                </div>
            </div>

            <img src={image} alt="" />
            
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product